import { url } from "inspector";
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //finding the actual path you are in

  const path = request.nextUrl.pathname; //the current path of the user

  const isPublicPath = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

//protecting the routes
export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup"],
};
