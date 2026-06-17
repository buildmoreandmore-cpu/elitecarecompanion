"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const HELP_OPTIONS = [
  "Overnight care",
  "Travel companion",
  "Daily personal care",
  "Just have questions",
];

export default function ContactForm() {
  const [help, setHelp] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ firstName: string; phone: string } | null>(
    null
  );
  const [error, setError] = useState("");

  const toggle = (value: string) =>
    setHelp((cur) =>
      cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]
    );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const who = (form.elements.namedItem("who") as HTMLInputElement).value.trim();

    if (!name || !phone) {
      setError("Please add your name and phone number so we can call you back.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, who, help }),
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
      <div className="formcard" id="form">
        <div style={{ textAlign: "center", padding: "30px 10px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#C99A3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 22px",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#163C47" strokeWidth="3">
              <path d="M5 12l4 4 10-10" />
            </svg>
          </div>
          <h2 style={{ fontSize: "1.7rem", marginBottom: 12 }}>
            Thank you, {done.firstName}.
          </h2>
          <p style={{ fontSize: "1.15rem", color: "#51605F", lineHeight: 1.6 }}>
            We&apos;ve received your request and a caring team member will call you
            shortly at <b style={{ color: "#1C4A57" }}>{done.phone}</b>.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#51605F", marginTop: 18 }}>
            Need to talk sooner? Call us anytime at{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              style={{ color: "#B07F1E", fontWeight: 700, whiteSpace: "nowrap" }}
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
    <div className="formcard" id="form">
      <h2>Tell us how we can help</h2>
      <p className="fc-sub">
        Fill in a few details and we&apos;ll call you back personally. It only takes
        a minute.
      </p>
      <form onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" placeholder="e.g. Margaret Smith" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Your phone number</label>
          <input type="tel" id="phone" name="phone" placeholder="(470) 000-0000" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="who">
            Who is the care for?{" "}
            <span style={{ fontWeight: 500, color: "var(--muted)" }}>(optional)</span>
          </label>
          <input type="text" id="who" name="who" placeholder="e.g. My husband" />
        </div>
        <div className="field">
          <label>What kind of help do you need?</label>
          <div className="help-opts">
            {HELP_OPTIONS.map((o) => (
              <label key={o} className={`opt${help.includes(o) ? " on" : ""}`}>
                <input
                  type="checkbox"
                  name="help"
                  value={o}
                  checked={help.includes(o)}
                  onChange={() => toggle(o)}
                />{" "}
                {o}
              </label>
            ))}
          </div>
        </div>
        {error && (
          <p style={{ color: "#B91C1C", fontWeight: 600, marginBottom: 12 }}>{error}</p>
        )}
        <button type="submit" className="btn btn-teal" disabled={submitting}>
          {submitting ? "Sending…" : "Request my free call →"}
        </button>
        <p className="reassure">
          No cost and no obligation.{" "}
          <b>A caring team member will call you back personally.</b>
        </p>
      </form>
    </div>
  );
}
