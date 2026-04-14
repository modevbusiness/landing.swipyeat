import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { restaurantId, billingCycle, email, planType = "pro" } = await request.json();

    if (!restaurantId) {
      return NextResponse.json(
        { error: "Restaurant ID is required" },
        { status: 400 }
      );
    }

    // Fetch the correct plan from DB to get real prices
    const { data: plan, error: planError } = await supabaseAdmin
      .from("subscription_plans")
      .select("*")
      .eq("plan_type", planType)
      .eq("is_active", true)
      .single();

    if (planError || !plan) {
      return NextResponse.json(
        { error: `Plan '${planType}' not found in database` },
        { status: 404 }
      );
    }

    // Convert DH to centimes (Stripe requires amounts in smallest currency unit)
    const monthlyAmount = Math.round(plan.price_monthly * 100);
    const yearlyAmount = Math.round(plan.price_yearly * 100);

    const origin = request.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "mad",
            product_data: {
              name: `SwipyEat ${plan.name}`,
              description:
                billingCycle === "yearly"
                  ? `SwipyEat ${plan.name} — Annual subscription`
                  : `SwipyEat ${plan.name} — Monthly subscription`,
            },
            unit_amount:
              billingCycle === "yearly" ? yearlyAmount : monthlyAmount,
            recurring: {
              interval: billingCycle === "yearly" ? "year" : "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        restaurantId,
        userId,
        planType: planType,
        billingCycle: billingCycle || "monthly",
      },
      success_url: `${origin}/onboarding/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/redirect`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session", details: error.message },
      { status: 500 }
    );
  }
}
