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
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M8 26c0-8 14-9 16 1 2-10 16-9 16-1 0 9-16 16-16 16S8 35 8 26Z" fill="#C99A3A" />
            <path d="M6 30c3-4 9-4 12 0" stroke="#1C4A57" strokeWidth="2.4" strokeLinecap="round" fill="none" />
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
