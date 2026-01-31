import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const token = formData.get("token") as string;
    const bureau = formData.get("bureau") as string;
    const notes = formData.get("notes") as string;
    const files = formData.getAll("files") as File[];

    if (!token) {
      return NextResponse.json(
        { error: "Access token is required" },
        { status: 400 }
      );
    }

    // Find client by token
    const client = await prisma.client.findUnique({
      where: { accessToken: token },
    });

    if (!client) {
      return NextResponse.json(
        { error: "Invalid access token" },
        { status: 404 }
      );
    }

    const uploadedReports = [];

    // Handle file uploads
    if (files.length > 0) {
      const uploadDir = path.join(process.cwd(), "uploads", client.id);
      await mkdir(uploadDir, { recursive: true });

      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) {
          // 10MB limit
          continue;
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const ext = path.extname(file.name);
        const fileName = `${uuidv4()}${ext}`;
        const filePath = path.join(uploadDir, fileName);

        await writeFile(filePath, buffer);

        const report = await prisma.creditReportUpload.create({
          data: {
            clientId: client.id,
            fileName: file.name,
            fileUrl: `/uploads/${client.id}/${fileName}`,
            fileType: ext.replace(".", "").toUpperCase(),
            bureau: bureau && bureau !== "" ? (bureau as "EQUIFAX" | "EXPERIAN" | "TRANSUNION" | "OTHER") : null,
            notes: notes || null,
          },
        });

        uploadedReports.push(report);
      }
    }

    // If only notes were provided (no files), create a text-based record
    if (files.length === 0 && notes && notes.trim()) {
      const report = await prisma.creditReportUpload.create({
        data: {
          clientId: client.id,
          fileName: "Text Notes",
          fileUrl: "",
          fileType: "TEXT",
          bureau: bureau && bureau !== "" ? (bureau as "EQUIFAX" | "EXPERIAN" | "TRANSUNION" | "OTHER") : null,
          notes: notes,
        },
      });
      uploadedReports.push(report);
    }

    // Update client status if this is their first upload
    if (client.status === "PENDING") {
      await prisma.client.update({
        where: { id: client.id },
        data: { status: "IN_REVIEW" },
      });
    }

    return NextResponse.json({
      success: true,
      uploads: uploadedReports,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    );
  }
}
