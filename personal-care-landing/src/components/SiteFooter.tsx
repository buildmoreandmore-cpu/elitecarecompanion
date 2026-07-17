import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot">
        <div>
          <div className="brand">Elite Care · For Men</div>
          <p>
            Strong, experienced male caregivers for older men across metro
            Atlanta. Private pay, no long-term contracts.
          </p>
          <a
            className="bignum"
            href={`tel:${PHONE_TEL}`}
            style={{ marginTop: 14, display: "inline-block" }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <h4>Our Care</h4>
          <Link href="/companion-care">Company &amp; errands</Link>
          <Link href="/personal-care">Personal care</Link>
          <Link href="/24-hour-care">24-hour &amp; overnight</Link>
          <Link href="/dementia-care">Memory care</Link>
          <Link href="/#form">Request a call</Link>
        </div>
        <div>
          <h4>Areas We Serve</h4>
          <Link href="/buckhead-home-care">Buckhead</Link>
          <Link href="/sandy-springs-home-care">Sandy Springs</Link>
          <Link href="/brookhaven-home-care">Brookhaven</Link>
          <Link href="/druid-hills-home-care">Druid Hills</Link>
          <Link href="/alpharetta-home-care">Alpharetta</Link>
        </div>
      </div>
      <div className="foot-base">
        <span>© 2026 Elite Care Companion · Metro Atlanta, GA</span>
        <span>
          Private pay home care · Not a medical provider ·{" "}
          <Link href="/portal" style={{ color: "rgba(236,233,226,.55)" }}>
            Staff login
          </Link>
        </span>
      </div>
    </footer>
  );
}
