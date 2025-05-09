import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Position } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, position, startDate, endDate, image } = body;

    const recruit = await prisma.recruitPost.create({
      data: {
        title,
        description,
        position: position as Position,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        thumbnailUrl: image,
      },
    });

    return NextResponse.json(recruit);
  } catch (error) {
    console.error("Error creating recruit post:", error);
    return NextResponse.json(
      { error: "Failed to create recruit post" },
      { status: 500 }
    );
  }
}
