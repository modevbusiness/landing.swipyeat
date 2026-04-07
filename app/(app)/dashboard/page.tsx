import { redirect } from "next/navigation";

export default function Dashboard() {
  // When users click dashboard in the landing, redirect them to their appropriate app
  redirect("/redirect");
}