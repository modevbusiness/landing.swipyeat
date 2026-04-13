import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      // ── Payment completed ──────────────────────────────────────────
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const restaurantId = session.metadata?.restaurantId;
        const billingCycle = session.metadata?.billingCycle || "monthly";

        if (restaurantId && session.subscription) {
          // Find or create pro plan
          let { data: proPlan } = await supabaseAdmin
            .from("subscription_plans")
            .select("id")
            .eq("plan_type", "pro")
            .single();

          // If no pro plan exists, create one
          if (!proPlan) {
            const { data: newPlan } = await supabaseAdmin
              .from("subscription_plans")
              .insert({
                name: "Pro",
                plan_type: "pro",
                price_monthly: 299,
                price_yearly: 2990,
                max_tables: -1,
                max_menu_items: -1,
                max_staff: -1,
                features: {
                  analytics: true,
                  multi_branch: true,
                  priority_support: true,
                },
                is_active: true,
              })
              .select("id")
              .single();
            proPlan = newPlan;
          }

          if (proPlan) {
            // Deactivate current free trial subscription
            await supabaseAdmin
              .from("subscriptions")
              .update({ is_current: false, status: "canceled" })
              .eq("restaurant_id", restaurantId)
              .eq("is_current", true);

            // Create the pro subscription
            await supabaseAdmin.from("subscriptions").insert({
              restaurant_id: restaurantId,
              plan_id: proPlan.id,
              status: "active",
              is_current: true,
              billing_cycle: billingCycle,
              started_at: new Date().toISOString(),
              auto_renew: true,
            });
          }
        }
        break;
      }

      // ── Subscription canceled ──────────────────────────────────────
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const restaurantId = subscription.metadata?.restaurantId;

        if (restaurantId) {
          // Mark subscription as canceled
          await supabaseAdmin
            .from("subscriptions")
            .update({ status: "canceled", is_current: false })
            .eq("restaurant_id", restaurantId)
            .eq("is_current", true);

          // Re-activate free trial (or create one)
          const { data: freePlan } = await supabaseAdmin
            .from("subscription_plans")
            .select("id")
            .eq("plan_type", "free_trial")
            .single();

          if (freePlan) {
            await supabaseAdmin.from("subscriptions").insert({
              restaurant_id: restaurantId,
              plan_id: freePlan.id,
              status: "active",
              is_current: true,
              billing_cycle: "monthly",
            });
          }
        }
        break;
      }

      // ── Subscription updated (e.g. plan change) ────────────────────
      case "customer.subscription.updated": {
        // Handle subscription updates if needed
        console.log("Subscription updated:", event.data.object.id);
        break;
      }

      // ── Payment failed ─────────────────────────────────────────────
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.error("Payment failed for invoice:", invoice.id);
        // Could send email notification or suspend access here
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
