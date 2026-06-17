"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import {
  COOKIE_NAME,
  createSessionToken,
  SESSION_MAX_AGE,
} from "@/lib/auth";

function parseDate(value: FormDataEntryValue | null): Date | null {
  if (!value) return null;
  const s = String(value).trim();
  if (!s) return null;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

function str(value: FormDataEntryValue | null): string | null {
  if (value == null) return null;
  const s = String(value).trim();
  return s === "" ? null : s;
}

// ---------- auth ----------
export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/portal");
  const expected = process.env.PORTAL_PASSWORD;

  if (!expected || password !== expected) {
    redirect("/portal/login?error=1");
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  redirect(next.startsWith("/portal") ? next : "/portal");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/portal/login");
}

// ---------- clients ----------
export async function createClient(formData: FormData) {
  const fullName = str(formData.get("fullName"));
  if (!fullName) return;

  const client = await prisma.client.create({
    data: {
      fullName,
      dateOfBirth: parseDate(formData.get("dateOfBirth")),
      address: str(formData.get("address")),
      phone: str(formData.get("phone")),
      email: str(formData.get("email")),
      physician: str(formData.get("physician")),
      primaryDiagnosis: str(formData.get("primaryDiagnosis")),
      emergencyName: str(formData.get("emergencyName")),
      emergencyPhone: str(formData.get("emergencyPhone")),
      emergencyRelation: str(formData.get("emergencyRelation")),
      careStartDate: parseDate(formData.get("careStartDate")),
      careSummary: str(formData.get("careSummary")),
    },
  });

  revalidatePath("/portal/clients");
  redirect(`/portal/clients/${client.id}`);
}

export async function updateClient(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await prisma.client.update({
    where: { id },
    data: {
      fullName: str(formData.get("fullName")) ?? undefined,
      dateOfBirth: parseDate(formData.get("dateOfBirth")),
      address: str(formData.get("address")),
      phone: str(formData.get("phone")),
      email: str(formData.get("email")),
      physician: str(formData.get("physician")),
      primaryDiagnosis: str(formData.get("primaryDiagnosis")),
      emergencyName: str(formData.get("emergencyName")),
      emergencyPhone: str(formData.get("emergencyPhone")),
      emergencyRelation: str(formData.get("emergencyRelation")),
      careStartDate: parseDate(formData.get("careStartDate")),
      careSummary: str(formData.get("careSummary")),
    },
  });

  revalidatePath(`/portal/clients/${id}`);
  redirect(`/portal/clients/${id}`);
}

export async function deleteClient(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  await prisma.client.delete({ where: { id } });
  revalidatePath("/portal/clients");
  redirect("/portal/clients");
}

// ---------- case notes ----------
export async function addNote(formData: FormData) {
  const clientId = String(formData.get("clientId") ?? "");
  const body = str(formData.get("body"));
  if (!clientId || !body) return;

  await prisma.caseNote.create({
    data: {
      clientId,
      body,
      author: str(formData.get("author")),
      noteDate: parseDate(formData.get("noteDate")) ?? new Date(),
    },
  });

  revalidatePath(`/portal/clients/${clientId}`);
}

export async function deleteNote(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const clientId = String(formData.get("clientId") ?? "");
  if (!id) return;
  await prisma.caseNote.delete({ where: { id } });
  revalidatePath(`/portal/clients/${clientId}`);
}

// ---------- time entries ----------
export async function addTimeEntry(formData: FormData) {
  const hours = parseFloat(String(formData.get("hours") ?? ""));
  const rate = parseFloat(String(formData.get("rate") ?? ""));
  if (isNaN(hours) || isNaN(rate)) return;

  await prisma.timeEntry.create({
    data: {
      date: parseDate(formData.get("date")) ?? new Date(),
      hours,
      rate,
      description: str(formData.get("description")),
      clientId: str(formData.get("clientId")),
    },
  });

  revalidatePath("/portal/time");
  revalidatePath("/portal");
}

export async function deleteTimeEntry(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  await prisma.timeEntry.delete({ where: { id } });
  revalidatePath("/portal/time");
  revalidatePath("/portal");
}

export async function toggleInvoiced(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const invoiced = String(formData.get("invoiced") ?? "") === "true";
  if (!id) return;
  await prisma.timeEntry.update({ where: { id }, data: { invoiced } });
  revalidatePath("/portal/time");
}
