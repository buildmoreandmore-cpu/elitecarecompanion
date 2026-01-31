import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const letters = await prisma.disputeLetter.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        client: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        template: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(letters);
  } catch (error) {
    console.error("Failed to fetch letters:", error);
    return NextResponse.json(
      { error: "Failed to fetch letters" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { clientId, templateId, bureau, accountName, accountNumber, disputeReason } =
      await request.json();

    if (!clientId || !templateId || !bureau || !disputeReason) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get client info
    const client = await prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }

    // Get template
    const template = await prisma.letterTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 });
    }

    // Generate letter content by replacing placeholders
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const bureauAddresses: Record<string, string> = {
      EQUIFAX:
        "Equifax Information Services LLC\nP.O. Box 740256\nAtlanta, GA 30374",
      EXPERIAN: "Experian\nP.O. Box 4500\nAllen, TX 75013",
      TRANSUNION:
        "TransUnion LLC\nConsumer Dispute Center\nP.O. Box 2000\nChester, PA 19016",
    };

    let content = template.content
      .replace(/\[DATE\]/g, today)
      .replace(/\[CLIENT_NAME\]/g, `${client.firstName} ${client.lastName}`)
      .replace(/\[CLIENT_ADDRESS\]/g, "[Client Address]")
      .replace(/\[CLIENT_PHONE\]/g, client.phone || "[Phone]")
      .replace(/\[CLIENT_EMAIL\]/g, client.email)
      .replace(/\[CLIENT_SIGNATURE\]/g, `${client.firstName} ${client.lastName}`)
      .replace(/\[LAST_4_SSN\]/g, "[XXXX]")
      .replace(/\[DOB\]/g, "[Date of Birth]")
      .replace(/\[BUREAU_NAME\]/g, bureau)
      .replace(/\[BUREAU_ADDRESS\]/g, bureauAddresses[bureau] || "[Bureau Address]")
      .replace(/\[ACCOUNT_NAME\]/g, accountName || "[Account Name]")
      .replace(/\[ACCOUNT_NUMBER\]/g, accountNumber || "[Account Number]")
      .replace(/\[DISPUTE_REASON\]/g, disputeReason)
      .replace(/\[EXPLANATION\]/g, disputeReason)
      .replace(/\[CREDITOR_NAME\]/g, accountName || "[Creditor Name]")
      .replace(/\[CREDITOR_ADDRESS\]/g, "[Creditor Address]")
      .replace(/\[COLLECTOR_NAME\]/g, accountName || "[Collector Name]")
      .replace(/\[COLLECTOR_ADDRESS\]/g, "[Collector Address]")
      .replace(/\[COLLECTOR\/CREDITOR_NAME\]/g, accountName || "[Name]")
      .replace(/\[ADDRESS\]/g, "[Address]")
      .replace(/\[ORIGINAL_CREDITOR\]/g, "[Original Creditor]")
      .replace(/\[CLAIMED_BALANCE\]/g, "[Balance]")
      .replace(/\[SETTLEMENT_AMOUNT\]/g, "[Settlement Amount]")
      .replace(/\[AMOUNT\]/g, "[Amount]")
      .replace(/\[LATE_PAYMENT_DATES\]/g, "[Late Payment Dates]")
      .replace(/\[GOAL\]/g, "[Financial Goal]")
      .replace(/\[RECIPIENT\]/g, accountName || "[Recipient]")
      .replace(/\[INQUIRY_COMPANY\]/g, accountName || "[Company Name]")
      .replace(/\[INQUIRY_DATE\]/g, "[Inquiry Date]")
      .replace(/\[POLICE_REPORT_NUMBER\]/g, "[Police Report #]")
      .replace(/\[STATE\]/g, "[State]");

    const letter = await prisma.disputeLetter.create({
      data: {
        clientId,
        templateId,
        bureau: bureau as "EQUIFAX" | "EXPERIAN" | "TRANSUNION",
        accountName: accountName || null,
        accountNumber: accountNumber || null,
        disputeReason,
        content,
        status: "DRAFT",
      },
      include: {
        client: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        template: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(letter, { status: 201 });
  } catch (error) {
    console.error("Failed to generate letter:", error);
    return NextResponse.json(
      { error: "Failed to generate letter" },
      { status: 500 }
    );
  }
}
