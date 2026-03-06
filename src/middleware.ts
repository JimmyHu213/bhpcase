import { NextRequest, NextResponse } from "next/server";
import { verifyAuthToken, COOKIE_NAME } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to the login page and auth API endpoints without a token
  if (
    pathname === "/admin" ||
    pathname === "/admin/login" ||
    pathname === "/api/admin/login" ||
    pathname === "/api/admin/logout"
  ) {
    return NextResponse.next();
  }

  // All other /admin/* and /api/admin/* routes require auth
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Try to get AUTH_SECRET - use process.env as it works in Workers middleware
  const authSecret = process.env.AUTH_SECRET;
  if (!authSecret) {
    console.error("AUTH_SECRET not configured");
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  const valid = await verifyAuthToken(token, authSecret);
  if (!valid) {
    const response = NextResponse.redirect(new URL("/admin", request.url));
    response.cookies.set(COOKIE_NAME, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path+", "/api/admin/:path*"],
};
