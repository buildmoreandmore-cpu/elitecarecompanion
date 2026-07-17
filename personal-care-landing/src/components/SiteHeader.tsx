import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, HOURS, NAV_LINKS } from "@/lib/site";

export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>In-home care for older men · Metro Atlanta</span>
          <div>
            Open {HOURS} &nbsp;·&nbsp;{" "}
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>

      <header className="masthead">
        <div className="wrap nav">
          <Link className="logo" href="/">
            Elite Care<em>For Men</em>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <Link className="btn" href="/#form">
            Request a call
          </Link>
        </div>
      </header>

      <div className="brass-rule" />
    </>
  );
}
