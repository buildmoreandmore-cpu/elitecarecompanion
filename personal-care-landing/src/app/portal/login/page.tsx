import { login } from "../actions";

export const metadata = {
  title: "Employee Login · Elite Care Companion",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="brand-mark">
          <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
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
        </div>
        <h1>Elite Care Companion</h1>
        <p className="sub">Employee portal — please sign in</p>

        {error && <div className="login-err">Incorrect password. Please try again.</div>}

        <form action={login} className="pform">
          <input type="hidden" name="next" value={next ?? "/portal"} />
          <div className="pfield">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              autoFocus
              required
            />
          </div>
          <button type="submit" className="pbtn pbtn-teal">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
