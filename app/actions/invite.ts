"use server";

import { cookies } from "next/headers";
import { verifyInviteToken } from "@/lib/invite";
import { currentUser } from "@clerk/nextjs/server";

export async function checkInviteAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("swipyeat_invite_token")?.value;

  if (!token) return null;

  const payload = await verifyInviteToken(token);
  if (!payload) return null;

  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  const emailMatch = userEmail?.toLowerCase() === payload.email.toLowerCase();

  return {
    ...payload,
    emailMatch,
    userEmail,
    token
  };
}

export async function clearInviteCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("swipyeat_invite_token");
}
