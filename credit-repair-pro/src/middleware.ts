import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes - no auth needed
  const publicRoutes = ["/", "/services", "/contact", "/resources", "/login"];
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith("/client/")
  );

  // API routes that don't need auth
  const publicApiRoutes = ["/api/contact", "/api/client"];
  const isPublicApi = publicApiRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute || isPublicApi) {
    return NextResponse.next();
  }

  // Check for auth token on protected routes (dashboard)
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/admin")) {
    const token = request.cookies.get("auth_token")?.value;

    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
