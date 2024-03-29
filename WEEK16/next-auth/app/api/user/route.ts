import { NEXT_AUTH_CONFIG } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    return NextResponse.json({
        session
    })
}