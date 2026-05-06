import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyInviteToken } from "@/lib/invite";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const payload = await verifyInviteToken(token);

  if (!payload) {
    return NextResponse.redirect(new URL("/invite/expired", request.url));
  }

  // Set the invite token in a cookie
  const cookieStore = await cookies();
  cookieStore.set("swipyeat_invite_token", token, {
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  // Redirect to sign-up
  return NextResponse.redirect(new URL("/sign-up", request.url));
}
