import Link from "next/link";
import PortalShell from "@/components/PortalShell";
import { prisma } from "@/lib/prisma";
import { fmtDate } from "@/lib/format";
import { createClient } from "../actions";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const clients = await prisma.client.findMany({
    orderBy: { fullName: "asc" },
    include: { _count: { select: { notes: true, timeEntries: true } } },
  });

  return (
    <PortalShell active="clients">
      <h1 className="portal-h1">Clients</h1>
      <p className="portal-sub">
        Keep each person&apos;s details and case notes in one place. Open a client to
        add notes or export a care record.
      </p>

      <div className="pcard">
        <h2>
          {clients.length} {clients.length === 1 ? "client" : "clients"}
        </h2>
        {clients.length === 0 ? (
          <div className="empty">No clients yet. Add your first one below.</div>
        ) : (
          clients.map((c) => (
            <Link key={c.id} href={`/portal/clients/${c.id}`} className="client-row">
              <span>
                <span className="cr-name">{c.fullName}</span>
                <span className="cr-meta" style={{ display: "block" }}>
                  {c.phone ? `${c.phone} · ` : ""}
                  {c._count.notes} {c._count.notes === 1 ? "note" : "notes"} ·{" "}
                  {c._count.timeEntries} time entries
                  {c.careStartDate ? ` · since ${fmtDate(c.careStartDate)}` : ""}
                </span>
              </span>
              <span style={{ color: "var(--gold-d)", fontWeight: 700 }}>Open →</span>
            </Link>
          ))
        )}
      </div>

      <div className="pcard">
        <h2>Add a client</h2>
        <form action={createClient} className="pform cols-2">
          <div className="pfield span-2">
            <label htmlFor="fullName">Full legal name *</label>
            <input id="fullName" name="fullName" required placeholder="e.g. Margaret A. Smith" />
          </div>
          <div className="pfield">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input id="dateOfBirth" name="dateOfBirth" type="date" />
          </div>
          <div className="pfield">
            <label htmlFor="careStartDate">Care start date</label>
            <input id="careStartDate" name="careStartDate" type="date" />
          </div>
          <div className="pfield span-2">
            <label htmlFor="address">Home address</label>
            <input id="address" name="address" placeholder="Street, City, GA ZIP" />
          </div>
          <div className="pfield">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" />
          </div>
          <div className="pfield">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="pfield">
            <label htmlFor="physician">Primary physician</label>
            <input id="physician" name="physician" />
          </div>
          <div className="pfield">
            <label htmlFor="primaryDiagnosis">Primary diagnosis / conditions</label>
            <input id="primaryDiagnosis" name="primaryDiagnosis" />
          </div>
          <div className="pfield">
            <label htmlFor="emergencyName">Emergency contact name</label>
            <input id="emergencyName" name="emergencyName" />
          </div>
          <div className="pfield">
            <label htmlFor="emergencyRelation">Relationship</label>
            <input id="emergencyRelation" name="emergencyRelation" placeholder="e.g. Daughter" />
          </div>
          <div className="pfield">
            <label htmlFor="emergencyPhone">Emergency contact phone</label>
            <input id="emergencyPhone" name="emergencyPhone" />
          </div>
          <div className="pfield span-2">
            <label htmlFor="careSummary">Care summary</label>
            <textarea
              id="careSummary"
              name="careSummary"
              placeholder="Overview of the care provided, routines, preferences, mobility, dietary needs…"
            />
          </div>
          <div className="pfield span-2">
            <button type="submit" className="pbtn pbtn-teal">
              Add client
            </button>
          </div>
        </form>
      </div>
    </PortalShell>
  );
}
