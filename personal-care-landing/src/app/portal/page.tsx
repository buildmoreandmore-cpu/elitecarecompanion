import Link from "next/link";
import PortalShell from "@/components/PortalShell";
import { prisma } from "@/lib/prisma";
import { usd, fmtDate } from "@/lib/format";

export const dynamic = "force-dynamic";

type Entry = Awaited<ReturnType<typeof prisma.timeEntry.findMany<{ include: { client: true } }>>>;
type Note = Awaited<ReturnType<typeof prisma.caseNote.findMany<{ include: { client: true } }>>>;

export default async function Dashboard() {
  let clientCount = 0;
  let entries: Entry = [];
  let recentNotes: Note = [];
  let dbUnavailable = false;

  try {
    [clientCount, entries, recentNotes] = await Promise.all([
      prisma.client.count({ where: { active: true } }),
      prisma.timeEntry.findMany({
        orderBy: { date: "desc" },
        include: { client: true },
      }),
      prisma.caseNote.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        include: { client: true },
      }),
    ]);
  } catch (err) {
    console.error("Dashboard: database unavailable", err);
    dbUnavailable = true;
  }

  const totalHours = entries.reduce((s, e) => s + e.hours, 0);
  const outstanding = entries
    .filter((e) => !e.invoiced)
    .reduce((s, e) => s + e.hours * e.rate, 0);
  const recentEntries = entries.slice(0, 5);

  return (
    <PortalShell active="dashboard">
      <h1 className="portal-h1">Dashboard</h1>
      <p className="portal-sub">A quick look at your clients, hours, and what&apos;s owed.</p>

      {dbUnavailable && (
        <div
          style={{
            background: "rgba(19,21,25,.06)",
            color: "var(--ink)",
            borderRadius: 10,
            padding: "14px 16px",
            fontWeight: 600,
            marginBottom: 22,
          }}
        >
          Client and hours data isn&apos;t available right now. Family Intake still works
          fine — this only affects Clients, Hours &amp; Invoices.
        </div>
      )}

      <div className="stat-grid">
        <div className="stat">
          <div className="label">Active clients</div>
          <div className="value">{clientCount}</div>
          <div className="meta">
            <Link href="/portal/clients" style={{ color: "var(--gold-d)", fontWeight: 600 }}>
              Manage clients →
            </Link>
          </div>
        </div>
        <div className="stat">
          <div className="label">Hours logged</div>
          <div className="value">{totalHours.toFixed(1)}</div>
          <div className="meta">{entries.length} time entries</div>
        </div>
        <div className="stat">
          <div className="label">Outstanding (unbilled)</div>
          <div className="value">{usd(outstanding)}</div>
          <div className="meta">
            <Link href="/portal/time" style={{ color: "var(--gold-d)", fontWeight: 600 }}>
              Create invoice →
            </Link>
          </div>
        </div>
      </div>

      <div className="pcard">
        <h2>Recent hours</h2>
        {recentEntries.length === 0 ? (
          <div className="empty">
            No hours logged yet.{" "}
            <Link href="/portal/time" style={{ color: "var(--gold-d)", fontWeight: 600 }}>
              Add your first entry
            </Link>
            .
          </div>
        ) : (
          <table className="ptable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Client</th>
                <th className="num">Hours</th>
                <th className="num">Rate</th>
                <th className="num">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentEntries.map((e) => (
                <tr key={e.id}>
                  <td>{fmtDate(e.date)}</td>
                  <td>{e.client?.fullName ?? e.description ?? "—"}</td>
                  <td className="num">{e.hours.toFixed(2)}</td>
                  <td className="num">{usd(e.rate)}</td>
                  <td className="num">{usd(e.hours * e.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="pcard">
        <h2>Recent case notes</h2>
        {recentNotes.length === 0 ? (
          <div className="empty">No notes yet. Open a client to start a case note.</div>
        ) : (
          recentNotes.map((n) => (
            <div className="note" key={n.id}>
              <div className="n-head">
                <Link
                  href={`/portal/clients/${n.clientId}`}
                  style={{ color: "var(--teal)", fontWeight: 700 }}
                >
                  {n.client.fullName}
                </Link>
                <span>{fmtDate(n.noteDate)}</span>
              </div>
              <div className="n-body">{n.body}</div>
            </div>
          ))
        )}
      </div>
    </PortalShell>
  );
}
