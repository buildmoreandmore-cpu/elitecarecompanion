import PortalShell from "@/components/PortalShell";
import HoursForm from "@/components/HoursForm";
import { prisma } from "@/lib/prisma";
import { usd, fmtDate, inputDate } from "@/lib/format";
import { deleteTimeEntry, toggleInvoiced } from "../actions";

export const dynamic = "force-dynamic";

type TimeEntry = Awaited<ReturnType<typeof prisma.timeEntry.findMany<{ include: { client: true } }>>>;
type ClientOption = Awaited<
  ReturnType<typeof prisma.client.findMany<{ select: { id: true; fullName: true } }>>
>;

export default async function TimePage() {
  let entries: TimeEntry = [];
  let clients: ClientOption = [];
  let dbUnavailable = false;

  try {
    [entries, clients] = await Promise.all([
      prisma.timeEntry.findMany({
        orderBy: { date: "desc" },
        include: { client: true },
      }),
      prisma.client.findMany({
        where: { active: true },
        orderBy: { fullName: "asc" },
        select: { id: true, fullName: true },
      }),
    ]);
  } catch (err) {
    console.error("Time page: database unavailable", err);
    dbUnavailable = true;
  }

  const total = entries.reduce((s, e) => s + e.hours * e.rate, 0);
  const unbilled = entries
    .filter((e) => !e.invoiced)
    .reduce((s, e) => s + e.hours * e.rate, 0);
  const totalHours = entries.reduce((s, e) => s + e.hours, 0);

  return (
    <PortalShell active="time">
      <h1 className="portal-h1">Hours &amp; Invoices</h1>
      <p className="portal-sub">
        Log your hours and rate — the amount owed is calculated for you. Generate an
        invoice PDF to send with your bill.
      </p>

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
          Hours data isn&apos;t available right now — the database isn&apos;t connected.
        </div>
      )}

      <div className="stat-grid">
        <div className="stat">
          <div className="label">Total hours</div>
          <div className="value">{totalHours.toFixed(1)}</div>
        </div>
        <div className="stat">
          <div className="label">Total billed value</div>
          <div className="value">{usd(total)}</div>
        </div>
        <div className="stat">
          <div className="label">Unbilled</div>
          <div className="value">{usd(unbilled)}</div>
        </div>
      </div>

      <div className="pcard">
        <h2>Log hours</h2>
        <HoursForm clients={clients} defaultDate={inputDate(new Date())} />
      </div>

      <div className="pcard">
        <h2>Generate an invoice</h2>
        <p className="portal-sub" style={{ marginBottom: 16 }}>
          Creates a printable PDF invoice. Choose a client (or all clients) and
          whether to include only unbilled hours.
        </p>
        <form
          method="get"
          action="/api/portal/invoice/pdf"
          target="_blank"
          className="pform cols-3"
          style={{ alignItems: "end" }}
        >
          <div className="pfield">
            <label htmlFor="inv-client">Client</label>
            <select id="inv-client" name="clientId" defaultValue="">
              <option value="">All clients</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.fullName}
                </option>
              ))}
            </select>
          </div>
          <div className="pfield">
            <label htmlFor="inv-scope">Include</label>
            <select id="inv-scope" name="scope" defaultValue="unbilled">
              <option value="unbilled">Only unbilled hours</option>
              <option value="all">All hours</option>
            </select>
          </div>
          <div className="pfield">
            <button type="submit" className="pbtn pbtn-gold">
              Download invoice PDF
            </button>
          </div>
        </form>
      </div>

      <div className="pcard">
        <h2>All time entries</h2>
        {entries.length === 0 ? (
          <div className="empty">No hours logged yet.</div>
        ) : (
          <table className="ptable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Client / description</th>
                <th className="num">Hours</th>
                <th className="num">Rate</th>
                <th className="num">Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id}>
                  <td>{fmtDate(e.date)}</td>
                  <td>
                    {e.client?.fullName ?? "General"}
                    {e.description ? (
                      <span style={{ color: "var(--muted)", display: "block", fontSize: ".86rem" }}>
                        {e.description}
                      </span>
                    ) : null}
                  </td>
                  <td className="num">{e.hours.toFixed(2)}</td>
                  <td className="num">{usd(e.rate)}</td>
                  <td className="num">{usd(e.hours * e.rate)}</td>
                  <td>
                    <form action={toggleInvoiced}>
                      <input type="hidden" name="id" value={e.id} />
                      <input type="hidden" name="invoiced" value={(!e.invoiced).toString()} />
                      <button
                        type="submit"
                        className={`pill ${e.invoiced ? "pill-done" : "pill-open"}`}
                        style={{ border: "none", cursor: "pointer", fontFamily: "inherit" }}
                        title="Click to toggle"
                      >
                        {e.invoiced ? "Invoiced" : "Unbilled"}
                      </button>
                    </form>
                  </td>
                  <td className="num">
                    <form action={deleteTimeEntry}>
                      <input type="hidden" name="id" value={e.id} />
                      <button type="submit" className="pbtn-danger">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Total</td>
                <td className="num">{usd(total)}</td>
                <td colSpan={2}></td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </PortalShell>
  );
}
