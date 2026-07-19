import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";
import { usd, fmtDate } from "@/lib/format";

const TEAL = "#131519";
const GOLD = "#2247DF";
const INK = "#131519";
const MUTED = "#565E68";
const LINE = "#DBDEE6";

const BUSINESS = {
  name: "Elite Care Companion",
  tagline: "In-Home Care · Metro Atlanta",
  phone: "(470) 840-0575",
  email: "elitecarecompanionllc@gmail.com",
};

const s = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontSize: 10.5,
    color: INK,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: TEAL,
    paddingBottom: 14,
    marginBottom: 22,
  },
  brand: { fontSize: 18, color: TEAL, fontFamily: "Helvetica-Bold" },
  brandSub: { fontSize: 9, color: GOLD, marginTop: 2, fontFamily: "Helvetica-Bold" },
  contactLine: { fontSize: 9, color: MUTED, textAlign: "right" },
  docTitle: { fontSize: 15, color: TEAL, fontFamily: "Helvetica-Bold", textAlign: "right" },
  docMeta: { fontSize: 9, color: MUTED, textAlign: "right", marginTop: 2 },
  sectionTitle: {
    fontSize: 11,
    color: GOLD,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 18,
    marginBottom: 8,
  },
  row: { flexDirection: "row", marginBottom: 4 },
  label: { width: 140, color: MUTED, fontFamily: "Helvetica-Bold" },
  val: { flex: 1, color: INK },
  summary: { color: INK, marginTop: 2 },
  note: {
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    paddingLeft: 10,
    marginBottom: 10,
  },
  noteHead: { fontSize: 9, color: MUTED, marginBottom: 2, fontFamily: "Helvetica-Bold" },
  noteBody: { color: INK },
  table: { marginTop: 6 },
  tHead: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: TEAL,
    paddingBottom: 5,
    marginBottom: 4,
  },
  tRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: LINE,
    paddingVertical: 5,
  },
  th: { fontSize: 9, color: TEAL, fontFamily: "Helvetica-Bold" },
  cDate: { width: "16%" },
  cDesc: { width: "44%" },
  cNum: { width: "13%", textAlign: "right" },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    borderTopWidth: 1.5,
    borderTopColor: TEAL,
    paddingTop: 8,
  },
  totalLabel: { fontSize: 12, color: MUTED, fontFamily: "Helvetica-Bold", marginRight: 18 },
  totalVal: { fontSize: 14, color: TEAL, fontFamily: "Helvetica-Bold" },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 48,
    right: 48,
    textAlign: "center",
    fontSize: 8.5,
    color: MUTED,
    borderTopWidth: 0.5,
    borderTopColor: LINE,
    paddingTop: 8,
  },
});

function Header({ title, meta }: { title: string; meta?: string }) {
  return (
    <View style={s.header}>
      <View>
        <Text style={s.brand}>{BUSINESS.name}</Text>
        <Text style={s.brandSub}>{BUSINESS.tagline}</Text>
        <Text style={[s.contactLine, { textAlign: "left", marginTop: 6 }]}>
          {BUSINESS.phone} · {BUSINESS.email}
        </Text>
      </View>
      <View>
        <Text style={s.docTitle}>{title}</Text>
        {meta ? <Text style={s.docMeta}>{meta}</Text> : null}
      </View>
    </View>
  );
}

function Field({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <View style={s.row}>
      <Text style={s.label}>{label}</Text>
      <Text style={s.val}>{value}</Text>
    </View>
  );
}

type ClientRecord = {
  fullName: string;
  dateOfBirth: Date | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  physician: string | null;
  primaryDiagnosis: string | null;
  emergencyName: string | null;
  emergencyPhone: string | null;
  emergencyRelation: string | null;
  careStartDate: Date | null;
  careSummary: string | null;
  notes: { id: string; noteDate: Date; author: string | null; body: string }[];
};

export async function buildCareRecordPdf(client: ClientRecord): Promise<Buffer> {
  const emergency = [
    client.emergencyName,
    client.emergencyRelation ? `(${client.emergencyRelation})` : null,
    client.emergencyPhone,
  ]
    .filter(Boolean)
    .join(" ");

  const doc = (
    <Document title={`Care Record — ${client.fullName}`}>
      <Page size="LETTER" style={s.page}>
        <Header title="Care Record Summary" meta={`Prepared ${fmtDate(new Date())}`} />

        <Text style={s.sectionTitle}>Client Information</Text>
        <Field label="Full name" value={client.fullName} />
        <Field label="Date of birth" value={client.dateOfBirth ? fmtDate(client.dateOfBirth) : null} />
        <Field label="Home address" value={client.address} />
        <Field label="Phone" value={client.phone} />
        <Field label="Email" value={client.email} />
        <Field label="Care began" value={client.careStartDate ? fmtDate(client.careStartDate) : null} />

        <Text style={s.sectionTitle}>Medical &amp; Emergency Contacts</Text>
        <Field label="Primary physician" value={client.physician} />
        <Field label="Primary diagnosis" value={client.primaryDiagnosis} />
        <Field label="Emergency contact" value={emergency || null} />

        {client.careSummary ? (
          <>
            <Text style={s.sectionTitle}>Care Summary</Text>
            <Text style={s.summary}>{client.careSummary}</Text>
          </>
        ) : null}

        <Text style={s.sectionTitle}>Care Notes</Text>
        {client.notes.length === 0 ? (
          <Text style={{ color: MUTED }}>No notes recorded.</Text>
        ) : (
          client.notes.map((n) => (
            <View key={n.id} style={s.note} wrap={false}>
              <Text style={s.noteHead}>
                {fmtDate(n.noteDate)}
                {n.author ? ` · ${n.author}` : ""}
              </Text>
              <Text style={s.noteBody}>{n.body}</Text>
            </View>
          ))
        )}

        <Text style={s.footer}>
          {BUSINESS.name} · {BUSINESS.phone} · {BUSINESS.email} — This care record is
          provided for the family&apos;s personal records.
        </Text>
      </Page>
    </Document>
  );

  return renderToBuffer(doc);
}

type InvoiceEntry = {
  id: string;
  date: Date;
  description: string | null;
  clientName: string | null;
  hours: number;
  rate: number;
};

export async function buildInvoicePdf(opts: {
  entries: InvoiceEntry[];
  billToName?: string | null;
  billToAddress?: string | null;
  invoiceNumber: string;
}): Promise<Buffer> {
  const total = opts.entries.reduce((sum, e) => sum + e.hours * e.rate, 0);
  const totalHours = opts.entries.reduce((sum, e) => sum + e.hours, 0);

  const doc = (
    <Document title={`Invoice ${opts.invoiceNumber}`}>
      <Page size="LETTER" style={s.page}>
        <Header title="INVOICE" meta={`No. ${opts.invoiceNumber} · ${fmtDate(new Date())}`} />

        {opts.billToName ? (
          <>
            <Text style={s.sectionTitle}>Bill To</Text>
            <Text style={{ color: INK, fontFamily: "Helvetica-Bold" }}>{opts.billToName}</Text>
            {opts.billToAddress ? <Text style={{ color: MUTED }}>{opts.billToAddress}</Text> : null}
          </>
        ) : null}

        <Text style={s.sectionTitle}>Services</Text>
        <View style={s.table}>
          <View style={s.tHead}>
            <Text style={[s.th, s.cDate]}>Date</Text>
            <Text style={[s.th, s.cDesc]}>Description</Text>
            <Text style={[s.th, s.cNum]}>Hours</Text>
            <Text style={[s.th, s.cNum]}>Rate</Text>
            <Text style={[s.th, s.cNum]}>Amount</Text>
          </View>
          {opts.entries.map((e) => (
            <View key={e.id} style={s.tRow} wrap={false}>
              <Text style={s.cDate}>{fmtDate(e.date)}</Text>
              <Text style={s.cDesc}>
                {[e.clientName, e.description].filter(Boolean).join(" — ") || "Care services"}
              </Text>
              <Text style={s.cNum}>{e.hours.toFixed(2)}</Text>
              <Text style={s.cNum}>{usd(e.rate)}</Text>
              <Text style={s.cNum}>{usd(e.hours * e.rate)}</Text>
            </View>
          ))}
        </View>

        <View style={s.totalRow}>
          <Text style={s.totalLabel}>
            Total ({totalHours.toFixed(2)} hrs)
          </Text>
          <Text style={s.totalVal}>{usd(total)}</Text>
        </View>

        <Text style={[s.sectionTitle, { marginTop: 26 }]}>Payment</Text>
        <Text style={{ color: MUTED }}>
          Private pay. Please remit payment to {BUSINESS.name}. Questions about this
          invoice? Call {BUSINESS.phone} or email {BUSINESS.email}.
        </Text>

        <Text style={s.footer}>
          {BUSINESS.name} · {BUSINESS.phone} · {BUSINESS.email}
        </Text>
      </Page>
    </Document>
  );

  return renderToBuffer(doc);
}
