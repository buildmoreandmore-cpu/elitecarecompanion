import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildCareRecordPdf } from "@/lib/pdf";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  let client;
  try {
    client = await prisma.client.findUnique({
      where: { id },
      include: { notes: { orderBy: { noteDate: "desc" } } },
    });
  } catch (err) {
    console.error("Care record PDF: database unavailable", err);
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  if (!client) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  const pdf = await buildCareRecordPdf(client);
  const safeName = client.fullName.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

  return new NextResponse(new Uint8Array(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="care-record-${safeName}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
