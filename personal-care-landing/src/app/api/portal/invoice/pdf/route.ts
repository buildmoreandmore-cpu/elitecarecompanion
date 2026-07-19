import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildInvoicePdf } from "@/lib/pdf";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get("clientId") || undefined;
  const scope = req.nextUrl.searchParams.get("scope") || "unbilled";

  let entries;
  try {
    entries = await prisma.timeEntry.findMany({
      where: {
        ...(clientId ? { clientId } : {}),
        ...(scope === "unbilled" ? { invoiced: false } : {}),
      },
      orderBy: { date: "asc" },
      include: { client: true },
    });
  } catch (err) {
    console.error("Invoice PDF: database unavailable", err);
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  if (entries.length === 0) {
    return NextResponse.json(
      { error: "No matching time entries to invoice." },
      { status: 400 }
    );
  }

  let billToName: string | null = null;
  let billToAddress: string | null = null;
  if (clientId) {
    const client = await prisma.client.findUnique({ where: { id: clientId } });
    billToName = client?.fullName ?? null;
    billToAddress = client?.address ?? null;
  }

  const invoiceNumber = `${new Date().getFullYear()}-${entries[0].id.slice(-6).toUpperCase()}`;

  const pdf = await buildInvoicePdf({
    entries: entries.map((e) => ({
      id: e.id,
      date: e.date,
      description: e.description,
      clientName: e.client?.fullName ?? null,
      hours: e.hours,
      rate: e.rate,
    })),
    billToName,
    billToAddress,
    invoiceNumber,
  });

  return new NextResponse(new Uint8Array(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="invoice-${invoiceNumber}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
