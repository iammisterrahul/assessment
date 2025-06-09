import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const user = true;
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: "/edit-profile",
};
