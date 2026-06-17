"use client";

import { useState } from "react";
import { addTimeEntry } from "@/app/portal/actions";
import { usd } from "@/lib/format";

type ClientOption = { id: string; fullName: string };

export default function HoursForm({
  clients,
  defaultDate,
  defaultRate,
}: {
  clients: ClientOption[];
  defaultDate: string;
  defaultRate?: number;
}) {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState(defaultRate ? String(defaultRate) : "");

  const amount = (parseFloat(hours) || 0) * (parseFloat(rate) || 0);

  return (
    <form action={addTimeEntry} className="pform">
      <div className="pform cols-3" style={{ gap: 16 }}>
        <div className="pfield">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" defaultValue={defaultDate} required />
        </div>
        <div className="pfield">
          <label htmlFor="hours">Hours</label>
          <input
            id="hours"
            name="hours"
            type="number"
            step="0.25"
            min="0"
            inputMode="decimal"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </div>
        <div className="pfield">
          <label htmlFor="rate">Rate ($/hr)</label>
          <input
            id="rate"
            name="rate"
            type="number"
            step="0.01"
            min="0"
            inputMode="decimal"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="pform cols-2" style={{ gap: 16 }}>
        <div className="pfield">
          <label htmlFor="clientId">Client</label>
          <select id="clientId" name="clientId" defaultValue="">
            <option value="">— No client / general —</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.fullName}
              </option>
            ))}
          </select>
        </div>
        <div className="pfield">
          <label htmlFor="description">Description</label>
          <input id="description" name="description" placeholder="e.g. Overnight shift, errands" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: "1.05rem", color: "var(--muted)" }}>
          Amount:{" "}
          <strong
            className="font-serif-d"
            style={{ color: "var(--teal)", fontSize: "1.4rem" }}
          >
            {usd(amount)}
          </strong>
        </div>
        <button type="submit" className="pbtn pbtn-teal">
          Log hours
        </button>
      </div>
    </form>
  );
}
