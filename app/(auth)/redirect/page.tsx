import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function RedirectPage() {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string | undefined;
  if(!role || !user) {
    redirect("/get-started");
  }

  if(role === "admin") {
    redirect("https://admin.swipyeat.com");
  } else if(role === "waiter" || role === "kitchen-staff") {
    redirect("/dashboard");
  }
  redirect("/get-started");
}