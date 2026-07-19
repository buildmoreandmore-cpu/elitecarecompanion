"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const URGENCY_OPTIONS = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "Just exploring options for now",
];

const SHIFT_OPTIONS = ["Daytime", "Evening", "Overnight", "Live-in", "24/7", "As needed"];
const TRANSPORT_OPTIONS = ["Errands", "Appointments", "Outings", "None"];
const CARE_NEEDS_OPTIONS = [
  "Bathing / showering",
  "Dressing & grooming",
  "Toileting / incontinence",
  "Mobility & transfers",
  "Medication reminders",
  "Meal planning & prep",
  "Feeding assistance",
  "Light housekeeping",
  "Laundry",
  "Grocery shopping / errands",
  "Companionship",
  "Escort to appointments",
  "Exercise / walking",
  "Memory / cognitive support",
  "Overnight monitoring",
];
const PAYMENT_OPTIONS = ["Check", "Zelle", "Bank transfer / ACH", "Credit / debit card", "Other"];
const BILLING_OPTIONS = ["Weekly", "Every two weeks", "Monthly"];

function CheckboxGroup({
  name,
  options,
  cols3,
}: {
  name: string;
  options: string[];
  cols3?: boolean;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className={`help-opts${cols3 ? " cols-3" : ""}`}>
      {options.map((o) => (
        <label key={o} className={`opt${selected.includes(o) ? " on" : ""}`}>
          <input
            type="checkbox"
            name={name}
            value={o}
            checked={selected.includes(o)}
            onChange={(e) => {
              setSelected((prev) =>
                e.target.checked ? [...prev, o] : prev.filter((v) => v !== o)
              );
            }}
          />
          {o}
        </label>
      ))}
    </div>
  );
}

function RadioGroup({ name, options }: { name: string; options: string[] }) {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className="help-opts">
      {options.map((o) => (
        <label key={o} className={`opt${selected === o ? " on" : ""}`}>
          <input
            type="radio"
            name={name}
            value={o}
            checked={selected === o}
            onChange={() => setSelected(o)}
          />
          {o}
        </label>
      ))}
    </div>
  );
}

export default function FamilyIntakeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ recipientName: string; familyName: string } | null>(
    null
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const recipientName = String(fd.get("recipientName") ?? "").trim();
    const familyName = String(fd.get("familyName") ?? "").trim();
    const familyPhone = String(fd.get("familyPhone") ?? "").trim();
    const familyEmail = String(fd.get("familyEmail") ?? "").trim();
    const acknowledge = fd.get("acknowledge") === "on";
    const signature = String(fd.get("signature") ?? "").trim();

    if (!recipientName || !familyName || !familyPhone || !familyEmail) {
      setError("Please fill in his name and your contact info so we can follow up.");
      return;
    }
    if (!acknowledge || !signature) {
      setError("Please check the private-pay acknowledgment and type your name to confirm.");
      return;
    }

    const payload: Record<string, string | string[]> = {};
    for (const [key, value] of fd.entries()) {
      if (key === "acknowledge") continue;
      const existing = payload[key];
      if (existing !== undefined) {
        payload[key] = Array.isArray(existing)
          ? [...existing, String(value)]
          : [String(existing), String(value)];
      } else {
        payload[key] = String(value);
      }
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/family-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone({ recipientName, familyName: familyName.split(" ")[0] });
    } catch {
      setError(
        "Something went wrong submitting the form. Please call us at " + PHONE_DISPLAY + "."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="formcard">
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
          <h2 style={{ marginBottom: 10 }}>Thank you, {done.familyName}.</h2>
          <p style={{ marginBottom: 12 }}>
            We&apos;ve received the intake information for {done.recipientName}. A team member
            will review it and call you to confirm next steps.
          </p>
          <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>
            Need to talk sooner? Call{" "}
            <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--cobalt)", fontWeight: 800 }}>
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="formcard" onSubmit={onSubmit} noValidate>
      <h2>Family Care Intake</h2>
      <p className="fc-sub">
        This helps us get to know him — his care needs, his routines, and the things that make
        him who he is. Please complete what you can; we&apos;ll review the rest together. There
        are no wrong answers.
      </p>

      <div className="intake-section">
        <h3>A. About Him</h3>
        <div className="intake-grid">
          <div className="field">
            <label htmlFor="recipientName">Full name</label>
            <input id="recipientName" name="recipientName" required />
          </div>
          <div className="field">
            <label htmlFor="preferredName">Preferred name / nickname</label>
            <input id="preferredName" name="preferredName" />
          </div>
          <div className="field">
            <label htmlFor="dob">Date of birth</label>
            <input id="dob" name="dob" type="date" />
          </div>
          <div className="field">
            <label htmlFor="primaryLanguage">Primary language</label>
            <input id="primaryLanguage" name="primaryLanguage" />
          </div>
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="homeAddress">Home address</label>
            <input id="homeAddress" name="homeAddress" />
          </div>
        </div>
      </div>

      <div className="intake-section">
        <h3>B. Your Info</h3>
        <div className="sub">The family contact / responsible party.</div>
        <div className="intake-grid">
          <div className="field">
            <label htmlFor="familyName">Your name</label>
            <input id="familyName" name="familyName" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="relationship">Relationship to him</label>
            <input id="relationship" name="relationship" />
          </div>
          <div className="field">
            <label htmlFor="familyPhone">Your phone</label>
            <input id="familyPhone" name="familyPhone" type="tel" required autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="familyEmail">Your email</label>
            <input id="familyEmail" name="familyEmail" type="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="bestContact">Best way &amp; time to reach you</label>
            <input id="bestContact" name="bestContact" />
          </div>
          <div className="field">
            <label htmlFor="emergencyContact">Emergency contact (if different)</label>
            <input id="emergencyContact" name="emergencyContact" />
          </div>
        </div>
      </div>

      <div className="intake-section">
        <h3>C. When Is Care Needed?</h3>
        <div className="sub">This is the part that helps us move fast for you.</div>
        <RadioGroup name="urgency" options={URGENCY_OPTIONS} />
        <div className="intake-grid" style={{ marginTop: 16 }}>
          <div className="field">
            <label htmlFor="startDate">Desired start date</label>
            <input id="startDate" name="startDate" type="date" />
          </div>
          <div className="field">
            <label htmlFor="hoursPerDay">Hours of care per day</label>
            <input id="hoursPerDay" name="hoursPerDay" />
          </div>
          <div className="field">
            <label htmlFor="daysPerWeek">Days per week</label>
            <input id="daysPerWeek" name="daysPerWeek" />
          </div>
          <div className="field">
            <label htmlFor="preferredTimes">Preferred hours / times of day</label>
            <input id="preferredTimes" name="preferredTimes" />
          </div>
        </div>
        <div className="field" style={{ marginTop: 16 }}>
          <label>Shift type</label>
          <CheckboxGroup name="shiftType" options={SHIFT_OPTIONS} cols3 />
        </div>
        <div className="field" style={{ marginTop: 16 }}>
          <label>Transportation needed</label>
          <CheckboxGroup name="transportation" options={TRANSPORT_OPTIONS} />
        </div>
      </div>

      <div className="intake-section">
        <h3>D. Daily Living &amp; Care Needs</h3>
        <div className="sub">Check everything the caregiver should help with.</div>
        <CheckboxGroup name="careNeeds" options={CARE_NEEDS_OPTIONS} cols3 />
        <div className="field" style={{ marginTop: 16 }}>
          <label htmlFor="otherTasks">Other tasks, special instructions, or things to avoid</label>
          <textarea id="otherTasks" name="otherTasks" />
        </div>
      </div>

      <div className="intake-section">
        <h3>E. Health Snapshot</h3>
        <div className="intake-grid">
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="diagnoses">Primary diagnoses / conditions</label>
            <textarea id="diagnoses" name="diagnoses" />
          </div>
          <div className="field">
            <label htmlFor="allergies">Allergies</label>
            <input id="allergies" name="allergies" />
          </div>
          <div className="field">
            <label htmlFor="dietaryRestrictions">Dietary restrictions</label>
            <input id="dietaryRestrictions" name="dietaryRestrictions" />
          </div>
          <div className="field">
            <label htmlFor="mobilityAids">Mobility aids (walker, wheelchair, etc.)</label>
            <input id="mobilityAids" name="mobilityAids" />
          </div>
          <div className="field">
            <label htmlFor="physician">Primary physician &amp; phone</label>
            <input id="physician" name="physician" />
          </div>
          <div className="field">
            <label htmlFor="pharmacy">Pharmacy</label>
            <input id="pharmacy" name="pharmacy" />
          </div>
          <div className="field">
            <label htmlFor="medications">Current medications</label>
            <textarea id="medications" name="medications" placeholder="List them, or let us know you'll provide a list before care begins" />
          </div>
        </div>
      </div>

      <div className="intake-section">
        <h3>F. Getting To Know Him</h3>
        <div className="sub">This is the part we treasure most. Tell us who he is.</div>
        <div className="intake-grid">
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="hobbies">Hobbies, interests &amp; things he enjoys</label>
            <textarea id="hobbies" name="hobbies" />
          </div>
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="routines">Daily routines &amp; rhythms (wake/sleep times, favorite parts of the day)</label>
            <textarea id="routines" name="routines" />
          </div>
          <div className="field">
            <label htmlFor="favoriteFoods">Favorite foods / meals</label>
            <input id="favoriteFoods" name="favoriteFoods" />
          </div>
          <div className="field">
            <label htmlFor="media">Music, shows, or movies he loves</label>
            <input id="media" name="media" />
          </div>
          <div className="field">
            <label htmlFor="faith">Faith / spiritual practices</label>
            <input id="faith" name="faith" />
          </div>
          <div className="field">
            <label htmlFor="career">Former career or life&apos;s work</label>
            <input id="career" name="career" />
          </div>
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="family">Family, pets &amp; important people</label>
            <input id="family" name="family" />
          </div>
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="temperament">Personality, temperament &amp; what helps him feel calm and happy</label>
            <textarea id="temperament" name="temperament" />
          </div>
          <div className="field" style={{ gridColumn: "1 / -1" }}>
            <label htmlFor="triggers">Topics, situations, or triggers to be gentle around</label>
            <textarea id="triggers" name="triggers" />
          </div>
        </div>
      </div>

      <div className="intake-section">
        <h3>G. Payment &amp; Billing</h3>
        <div className="field">
          <label>Preferred payment method</label>
          <CheckboxGroup name="paymentMethod" options={PAYMENT_OPTIONS} cols3 />
        </div>
        <div className="field" style={{ marginTop: 16 }}>
          <label>Billing frequency</label>
          <RadioGroup name="billingFrequency" options={BILLING_OPTIONS} />
        </div>
        <div className="intake-grid" style={{ marginTop: 16 }}>
          <div className="field">
            <label htmlFor="estimatedHours">Estimated weekly hours</label>
            <input id="estimatedHours" name="estimatedHours" />
          </div>
          <div className="field">
            <label htmlFor="billingEmail">Billing email for invoices / receipts</label>
            <input id="billingEmail" name="billingEmail" type="email" />
          </div>
        </div>
      </div>

      <div className="intake-section">
        <div className="pp-note">
          <h3>A Note on Payment &amp; Insurance (Private Pay)</h3>
          <p>
            Elite Care Companion is a <strong>private-pay</strong> home care provider. We do not
            bill or accept Medicare, Medicaid, or private health insurance.
          </p>
          <ul>
            <li>
              Most non-medical, in-home companion and personal care isn&apos;t covered by health
              insurance or Medicare in the first place — those programs are built around
              clinical/medical services, not day-to-day support.
            </li>
            <li>
              Private pay keeps you in control. Your family decides the hours, the tasks, and the
              caregiver match — not an insurance company&apos;s rules or limits.
            </li>
            <li>Simpler, transparent pricing with no surprise denials, claim delays, or reduced hours mid-care.</li>
            <li>It lets us focus our time on care rather than insurance billing and paperwork.</li>
          </ul>
          <p className="ltc">
            If you carry a long-term care (LTC) insurance policy, ask us — we&apos;re glad to
            provide detailed invoices and visit records you can submit to your LTC carrier for
            possible reimbursement.
          </p>
        </div>

        <label className="ack-row">
          <input type="checkbox" name="acknowledge" required />
          <span>
            I confirm the information above is accurate to the best of my knowledge, and I
            understand that Elite Care Companion is a private-pay provider that does not bill
            insurance.
          </span>
        </label>

        <div className="field" style={{ marginTop: 16 }}>
          <label htmlFor="signature">Type your full name to sign</label>
          <input id="signature" name="signature" required />
        </div>
      </div>

      {error && (
        <p style={{ color: "#B91C1C", fontWeight: 600, marginBottom: 12 }}>{error}</p>
      )}
      <button className="btn" type="submit" disabled={submitting} style={{ width: "100%" }}>
        {submitting ? "Submitting…" : "Submit intake form"}
      </button>
      <p className="reassure">
        Prefer to talk it through? Call{" "}
        <b>
          <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--cobalt)" }}>
            {PHONE_DISPLAY}
          </a>
        </b>{" "}
        anytime.
      </p>
    </form>
  );
}
