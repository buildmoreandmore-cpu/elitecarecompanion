import PortalShell from "@/components/PortalShell";
import CopyLinkButton from "@/components/CopyLinkButton";
import { sendIntakeInvite } from "@/app/portal/actions";

const FORM_URL = "https://www.elitecarecompanion.com/family-intake";

export default async function IntakePage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const params = await searchParams;

  return (
    <PortalShell active="intake">
      <h1 className="portal-h1">Family Intake</h1>
      <p className="portal-sub">
        Send families the intake form so they can tell us about him before you talk — his care
        needs, his routines, and the things that make him who he is.
      </p>

      <div className="pcard">
        <h2>Share the form link</h2>
        <p style={{ color: "var(--muted)", marginBottom: 14 }}>
          Text or email this directly, or use the invite below to send a branded email instead.
        </p>
        <CopyLinkButton url={FORM_URL} />
      </div>

      <div className="pcard">
        <h2>Email a family the form</h2>
        {params.sent === "1" && (
          <div
            style={{
              background: "rgba(28,74,87,.08)",
              color: "var(--teal)",
              borderRadius: 8,
              padding: "10px 12px",
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Sent! They&apos;ll get an email with a link to the intake form.
          </div>
        )}
        {params.error === "1" && (
          <div className="login-err">
            Couldn&apos;t send that invite. Check the email address and try again.
          </div>
        )}
        <form action={sendIntakeInvite} className="pform cols-2">
          <div className="pfield">
            <label htmlFor="familyName">Family contact name</label>
            <input id="familyName" name="familyName" required />
          </div>
          <div className="pfield">
            <label htmlFor="familyEmail">Family email</label>
            <input id="familyEmail" name="familyEmail" type="email" required />
          </div>
          <div className="pfield span-2">
            <button type="submit" className="pbtn pbtn-gold">
              Send intake invite
            </button>
          </div>
        </form>
      </div>
    </PortalShell>
  );
}
