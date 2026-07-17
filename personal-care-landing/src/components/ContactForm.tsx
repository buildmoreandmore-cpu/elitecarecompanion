"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const NEED_OPTIONS = [
  "Lifting & transfers",
  "Workout & mobility support",
  "Daily routine help",
  "Overnight care",
  "Company & errands",
  "Just have questions",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ firstName: string; phone: string } | null>(
    null
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const need = (form.elements.namedItem("need") as HTMLSelectElement).value;

    if (!name || !phone) {
      setError("Please add your name and phone number so we can call you back.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, who: "", help: [need] }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone({ firstName: name.split(" ")[0], phone });
    } catch {
      setError(
        "Something went wrong sending your request. Please call us at " +
          PHONE_DISPLAY +
          "."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="ticket" id="form">
        <div style={{ textAlign: "center", padding: "20px 6px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "var(--cobalt)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
              <path d="M5 12l4 4 10-10" />
            </svg>
          </div>
          <h3 style={{ marginBottom: 10 }}>Thank you, {done.firstName}.</h3>
          <p style={{ marginBottom: 12 }}>
            We&apos;ve got your request. A team member will call you back the same
            day at <b style={{ color: "var(--ink)" }}>{done.phone}</b>.
          </p>
          <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>
            Need to talk sooner? Call{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              style={{ color: "var(--cobalt)", fontWeight: 800, whiteSpace: "nowrap" }}
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="ticket" id="form" onSubmit={onSubmit} noValidate>
      <h3>Tell us about him.</h3>
      <p>
        Three quick fields and we&apos;ll call you back personally. No cost, no
        pressure.
      </p>
      <div className="field">
        <label htmlFor="f-name">Your name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Your phone number</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="f-need">What does he need most?</label>
        <select id="f-need" name="need" defaultValue={NEED_OPTIONS[0]}>
          {NEED_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      {error && (
        <p style={{ color: "#B91C1C", fontWeight: 600, marginBottom: 12 }}>{error}</p>
      )}
      <button className="btn" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Request my call back"}
      </button>
      <p className="fine">A team member calls you back the same day.</p>
    </form>
  );
}
