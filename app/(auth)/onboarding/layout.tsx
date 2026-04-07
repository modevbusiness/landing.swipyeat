import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  // Without proper JWT Custom Templates, middleware.ts cannot read unsafeMetadata natively.
  // currentUser() reaches out to Clerk APIs to get the real-time user object containing metadata.
  if (user?.unsafeMetadata?.onboardingCompleted) {
    redirect("/redirect");
  }

  return <>{children}</>;
}
