import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, NAV_LINKS } from "@/lib/site";

export default function SiteHeader() {
  return (
    <>
      <div className="callbar">
        Private, in-home care across metro Atlanta — call{" "}
        <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> to speak with a real
        person today.
      </div>

      <nav>
        <Link className="brand" href="/">
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M8 26c0-8 14-9 16 1 2-10 16-9 16-1 0 9-16 16-16 16S8 35 8 26Z" fill="#C99A3A" />
            <path d="M6 30c3-4 9-4 12 0" stroke="#1C4A57" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </svg>
          <span className="name">
            Elite Care Companion
            <small>In-Home Care · Atlanta</small>
          </span>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>

        <a className="nav-phone" href={`tel:${PHONE_TEL}`}>
          <span className="lbl">
            Call us today
            <br />
            8am – 8pm, 7 days
          </span>
          <span className="num">{PHONE_DISPLAY}</span>
        </a>
      </nav>
    </>
  );
}
