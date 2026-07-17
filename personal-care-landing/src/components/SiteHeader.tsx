import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, HOURS, NAV_LINKS } from "@/lib/site";

export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>In-home care for men · Metro Atlanta</span>
          <div>
            Open {HOURS} &nbsp;·&nbsp;{" "}
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>

      <header className="masthead">
        <div className="wrap nav">
          <Link className="logo" href="/">
            <span className="logo-mark" aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
                <rect width="64" height="64" rx="14" fill="#2247DF" />
                <g fill="#FFFFFF">
                  <rect x="21" y="16" width="8" height="32" />
                  <rect x="21" y="16" width="23" height="8" />
                  <rect x="21" y="28" width="17" height="7" />
                  <rect x="21" y="40" width="23" height="8" />
                </g>
                <rect
                  x="45.5"
                  y="45.5"
                  width="7"
                  height="7"
                  rx="1.5"
                  transform="rotate(45 49 49)"
                  fill="#5C7BFF"
                />
              </svg>
            </span>
            <span className="logo-text">
              <span className="disp">Elite Care</span>
              <em>For Men</em>
            </span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <Link className="btn" href="/#form">
            Request a call <span className="arr">→</span>
          </Link>
        </div>
      </header>
    </>
  );
}
