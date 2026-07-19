import Link from "next/link";
import { logout } from "@/app/portal/actions";

const LINKS = [
  { href: "/portal", label: "Dashboard", key: "dashboard" },
  { href: "/portal/clients", label: "Clients", key: "clients" },
  { href: "/portal/time", label: "Hours & Invoices", key: "time" },
  { href: "/portal/intake", label: "Family Intake", key: "intake" },
];

export default function PortalShell({
  active,
  children,
}: {
  active?: "dashboard" | "clients" | "time" | "intake";
  children: React.ReactNode;
}) {
  return (
    <div className="portal">
      <header className="portal-bar">
        <Link href="/portal" className="pb-brand">
          Elite Care Companion
          <small>Employee Portal</small>
        </Link>
        <nav className="portal-nav">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={active === l.key ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <form action={logout} style={{ display: "inline" }}>
            <button type="submit" className="portal-logout">
              Sign out
            </button>
          </form>
        </nav>
      </header>
      <main className="portal-main">{children}</main>
    </div>
  );
}
