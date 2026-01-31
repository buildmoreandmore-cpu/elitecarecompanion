import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    const client = await prisma.client.findUnique({
      where: { accessToken: token },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        creditAnalysis: true,
        improvements: true,
        status: true,
        uploadedReports: {
          select: {
            id: true,
            fileName: true,
            bureau: true,
            uploadedAt: true,
          },
          orderBy: { uploadedAt: "desc" },
        },
      },
    });

    if (!client) {
      return NextResponse.json(
        { error: "Client not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(client);
  } catch (error) {
    console.error("Client fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch client data" },
      { status: 500 }
    );
  }
}
