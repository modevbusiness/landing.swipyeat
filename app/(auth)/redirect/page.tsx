import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function RedirectPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Check if onboarding is completed
  const onboardingCompleted = user.unsafeMetadata?.onboardingCompleted;
  if (!onboardingCompleted) {
    redirect("/onboarding");
  }

  const role = user.unsafeMetadata?.role as string | undefined;

  if (!role) {
    redirect("/onboarding");
  }

  // Redirect based on role
  const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:3001";
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3002";

  switch (role) {
    case "restaurant_admin":
    case "manager":
      // Redirect to admin dashboard
      redirect(ADMIN_URL);
      break;

    case "staff":
    case "waiter":
    case "kitchen_staff":
      // Redirect to app
      redirect(APP_URL);
      break;

    default:
      redirect("/onboarding");
  }
}