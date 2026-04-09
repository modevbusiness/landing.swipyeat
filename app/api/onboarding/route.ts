import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { verifyInviteToken } from "@/lib/invite";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { role: bodyRole, restaurantName, address, city, phone, email: contactEmail, name, logo_url, inviteToken } = body;
    
    let role = bodyRole;
    let restaurantId = null;
    let invitationRole = null;

    // Handle invitation token if present
    if (inviteToken) {
      const payload = await verifyInviteToken(inviteToken);
      if (payload) {
        // Security check: email must match
        if (payload.email.toLowerCase() !== user.emailAddresses[0]?.emailAddress.toLowerCase()) {
          return NextResponse.json({ error: "Email mismatch with invitation" }, { status: 400 });
        }
        
        // Use data from invitation
        role = "staff"; // Ensure role is staff path
        restaurantId = payload.restaurantId;
        invitationRole = payload.role;
      } else {
        return NextResponse.json({ error: "Invalid or expired invitation token" }, { status: 400 });
      }
    }

    // If restaurant_admin, create a new restaurant
    if (role === "restaurant_admin" && !restaurantId) {
      if (!restaurantName || !address) {
        return NextResponse.json(
          { error: "Restaurant name and address are required for admins" },
          { status: 400 }
        );
      }

      // Generate a slug from restaurant name
      const slug = restaurantName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      // Create restaurant (id will be auto-generated as text UUID)
      const { data: restaurant, error: restaurantError } = await supabaseAdmin
        .from("restaurants")
        .insert({
          name: restaurantName,
          slug: `${slug}-${Date.now()}`,
          address: address,
          city: city || null,
          phone: phone || null,
          email: contactEmail || null,
          logo_url: logo_url || null,
          is_active: true,
          pin: "0000",
          is_locked: false,
        })
        .select()
        .single();

      if (restaurantError) {
        console.error("Restaurant creation error:", restaurantError);
        console.error("Error details:", JSON.stringify(restaurantError, null, 2));
        return NextResponse.json(
          { error: "Failed to create restaurant", details: restaurantError.message },
          { status: 500 }
        );
      }

      restaurantId = restaurant.id;

      // Create a free trial subscription for the restaurant
      const { data: freePlan, error: planError } = await supabaseAdmin
        .from("subscription_plans")
        .select("id")
        .eq("plan_type", "free_trial")
        .single();

      if (planError) {
        console.error("Error fetching free plan:", planError);
      }

      if (freePlan) {
        const { error: subscriptionError } = await supabaseAdmin
          .from("subscriptions")
          .insert({
            restaurant_id: restaurantId,
            plan_id: freePlan.id,
            status: "active",
            is_current: true,
            billing_cycle: "monthly",
            trial_ends_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days trial
          });

        if (subscriptionError) {
          console.error("Subscription creation error:", subscriptionError);
        }
      }
    }

    // Create user profile in database
    const { error: userError } = await supabaseAdmin.from("users").insert({
      id: userId,
      clerk_user_id: userId,
      restaurant_id: restaurantId,
      name: name,
      email: contactEmail || user.emailAddresses[0]?.emailAddress,
      avatar_url: user.imageUrl || null,
      role: role === "staff" ? invitationRole || "waiter" : "restaurant_admin", 
      is_active: true,
    });

    if (userError) {
      console.error("User creation error:", userError);
      console.error("Error details:", JSON.stringify(userError, null, 2));

      // If user already exists, update instead
      if (userError.code === "23505") {
        const { error: updateError } = await supabaseAdmin
          .from("users")
          .update({
            restaurant_id: restaurantId,
            role: role === "staff" ? invitationRole || "waiter" : "restaurant_admin",
            name: name,
            avatar_url: user.imageUrl || null,
          })
          .eq("clerk_user_id", userId);

        if (updateError) {
          console.error("User update error:", updateError);
          return NextResponse.json(
            { error: "Failed to update user profile", details: updateError.message },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          { error: "Failed to create user profile", details: userError.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      role,
      restaurantId,
    });
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
