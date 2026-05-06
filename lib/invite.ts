import { jwtVerify } from "jose";

export interface InviteTokenPayload {
  email: string;
  role: string;
  restaurantId: string;
}

export async function verifyInviteToken(token: string): Promise<InviteTokenPayload | null> {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is not configured");
      return null;
    }

    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey);

    return payload as unknown as InviteTokenPayload;
  } catch (error) {
    console.error("Invite token verification error:", error);
    return null;
  }
}
