import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const waitlist = await prisma.recruitWaitlist.findMany({
      include: {
        user: true,
      },
    });

    return NextResponse.json(waitlist);
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json(
      { error: "Failed to fetch waitlist" },
      { status: 500 }
    );
  }
}
