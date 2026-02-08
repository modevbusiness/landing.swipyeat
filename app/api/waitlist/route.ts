import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
    const { email } = await request.json();
    const supabase = await createClient();
    const { error } = await supabase.from("waitlist").insert({ email });
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Successfully added to waitlist" }, { status: 200 });
}