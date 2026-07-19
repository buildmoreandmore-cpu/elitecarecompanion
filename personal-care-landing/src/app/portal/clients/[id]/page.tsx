import Link from "next/link";
import { notFound } from "next/navigation";
import PortalShell from "@/components/PortalShell";
import { prisma } from "@/lib/prisma";
import { fmtDate, inputDate, usd } from "@/lib/format";
import {
  updateClient,
  deleteClient,
  addNote,
  deleteNote,
} from "../../actions";

export const dynamic = "force-dynamic";

export default async function ClientDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let client;
  try {
    client = await prisma.client.findUnique({
      where: { id },
      include: {
        notes: { orderBy: { noteDate: "desc" } },
        timeEntries: { orderBy: { date: "desc" } },
      },
    });
  } catch (err) {
    console.error("Client detail: database unavailable", err);
    return (
      <PortalShell active="clients">
        <h1 className="portal-h1">Client unavailable</h1>
        <div
          style={{
            background: "rgba(19,21,25,.06)",
            color: "var(--ink)",
            borderRadius: 10,
            padding: "14px 16px",
            fontWeight: 600,
          }}
        >
          Client data isn&apos;t available right now — the database isn&apos;t connected.
        </div>
        <p className="portal-sub" style={{ marginTop: 18 }}>
          <Link href="/portal/clients" style={{ color: "var(--gold-d)", fontWeight: 700 }}>
            ← Back to clients
          </Link>
        </p>
      </PortalShell>
    );
  }

  if (!client) notFound();

  const hours = client.timeEntries.reduce((s, e) => s + e.hours, 0);
  const owed = client.timeEntries
    .filter((e) => !e.invoiced)
    .reduce((s, e) => s + e.hours * e.rate, 0);

  return (
    <PortalShell active="clients">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <Link href="/portal/clients" style={{ color: "var(--gold-d)", fontWeight: 600, fontSize: ".92rem" }}>
            ← All clients
          </Link>
          <h1 className="portal-h1" style={{ marginTop: 6 }}>
            {client.fullName}
          </h1>
          <p className="portal-sub" style={{ marginBottom: 0 }}>
            {hours.toFixed(1)} hours logged · {usd(owed)} unbilled ·{" "}
            {client.notes.length} case {client.notes.length === 1 ? "note" : "notes"}
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            className="pbtn pbtn-gold"
            href={`/api/portal/clients/${client.id}/pdf`}
            target="_blank"
            rel="noopener"
          >
            Download care record (PDF)
          </a>
        </div>
      </div>

      {/* case notes */}
      <div className="pcard">
        <h2>Case notes</h2>
        <form action={addNote} className="pform" style={{ marginBottom: 18 }}>
          <input type="hidden" name="clientId" value={client.id} />
          <div className="pform cols-2" style={{ gap: 16 }}>
            <div className="pfield">
              <label htmlFor="noteDate">Date</label>
              <input id="noteDate" name="noteDate" type="date" defaultValue={inputDate(new Date())} />
            </div>
            <div className="pfield">
              <label htmlFor="author">Caregiver</label>
              <input id="author" name="author" placeholder="Your name" />
            </div>
          </div>
          <div className="pfield">
            <label htmlFor="body">Note</label>
            <textarea
              id="body"
              name="body"
              required
              placeholder="What happened during the visit — mood, meals, medication reminders, mobility, anything the family should know…"
            />
          </div>
          <div className="pfield">
            <button type="submit" className="pbtn pbtn-teal">
              Add note
            </button>
          </div>
        </form>

        {client.notes.length === 0 ? (
          <div className="empty">No case notes yet.</div>
        ) : (
          client.notes.map((n) => (
            <div className="note" key={n.id}>
              <div className="n-head">
                <span>
                  <strong style={{ color: "var(--teal)" }}>{fmtDate(n.noteDate)}</strong>
                  {n.author ? ` · ${n.author}` : ""}
                </span>
                <form action={deleteNote}>
                  <input type="hidden" name="id" value={n.id} />
                  <input type="hidden" name="clientId" value={client.id} />
                  <button type="submit" className="pbtn-danger">
                    Delete
                  </button>
                </form>
              </div>
              <div className="n-body">{n.body}</div>
            </div>
          ))
        )}
      </div>

      {/* time entries for this client */}
      <div className="pcard">
        <h2>Hours for this client</h2>
        {client.timeEntries.length === 0 ? (
          <div className="empty">
            No hours logged for {client.fullName.split(" ")[0]} yet.{" "}
            <Link href="/portal/time" style={{ color: "var(--gold-d)", fontWeight: 600 }}>
              Add hours
            </Link>
            .
          </div>
        ) : (
          <table className="ptable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th className="num">Hours</th>
                <th className="num">Rate</th>
                <th className="num">Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {client.timeEntries.map((e) => (
                <tr key={e.id}>
                  <td>{fmtDate(e.date)}</td>
                  <td>{e.description ?? "—"}</td>
                  <td className="num">{e.hours.toFixed(2)}</td>
                  <td className="num">{usd(e.rate)}</td>
                  <td className="num">{usd(e.hours * e.rate)}</td>
                  <td>
                    <span className={`pill ${e.invoiced ? "pill-done" : "pill-open"}`}>
                      {e.invoiced ? "Invoiced" : "Unbilled"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* edit details */}
      <div className="pcard">
        <h2>Client details</h2>
        <form action={updateClient} className="pform cols-2">
          <input type="hidden" name="id" value={client.id} />
          <div className="pfield span-2">
            <label htmlFor="fullName">Full legal name</label>
            <input id="fullName" name="fullName" defaultValue={client.fullName} required />
          </div>
          <div className="pfield">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input id="dateOfBirth" name="dateOfBirth" type="date" defaultValue={inputDate(client.dateOfBirth)} />
          </div>
          <div className="pfield">
            <label htmlFor="careStartDate">Care start date</label>
            <input id="careStartDate" name="careStartDate" type="date" defaultValue={inputDate(client.careStartDate)} />
          </div>
          <div className="pfield span-2">
            <label htmlFor="address">Home address</label>
            <input id="address" name="address" defaultValue={client.address ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" defaultValue={client.phone ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" defaultValue={client.email ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="physician">Primary physician</label>
            <input id="physician" name="physician" defaultValue={client.physician ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="primaryDiagnosis">Primary diagnosis / conditions</label>
            <input id="primaryDiagnosis" name="primaryDiagnosis" defaultValue={client.primaryDiagnosis ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="emergencyName">Emergency contact name</label>
            <input id="emergencyName" name="emergencyName" defaultValue={client.emergencyName ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="emergencyRelation">Relationship</label>
            <input id="emergencyRelation" name="emergencyRelation" defaultValue={client.emergencyRelation ?? ""} />
          </div>
          <div className="pfield">
            <label htmlFor="emergencyPhone">Emergency contact phone</label>
            <input id="emergencyPhone" name="emergencyPhone" defaultValue={client.emergencyPhone ?? ""} />
          </div>
          <div className="pfield span-2">
            <label htmlFor="careSummary">Care summary</label>
            <textarea id="careSummary" name="careSummary" defaultValue={client.careSummary ?? ""} />
          </div>
          <div className="pfield span-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
            <button type="submit" className="pbtn pbtn-teal">
              Save changes
            </button>
          </div>
        </form>
      </div>

      {/* delete */}
      <div className="pcard" style={{ borderColor: "rgba(185,28,28,.25)" }}>
        <h2 style={{ color: "#B91C1C" }}>Remove client</h2>
        <p className="portal-sub" style={{ marginBottom: 14 }}>
          This permanently deletes {client.fullName} and all of their case notes. Time
          entries are kept but unlinked.
        </p>
        <form action={deleteClient}>
          <input type="hidden" name="id" value={client.id} />
          <button type="submit" className="pbtn pbtn-wire" style={{ borderColor: "#B91C1C", color: "#B91C1C" }}>
            Delete this client
          </button>
        </form>
      </div>
    </PortalShell>
  );
}
