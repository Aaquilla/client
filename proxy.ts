import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	const session = (await cookies()).get("session_id");
	if (!session) return NextResponse.redirect(new URL("/login", request.url));
	else {
		const headers = new Headers(request.headers);
		headers.set("x-current-path", request.nextUrl.pathname);
		return NextResponse.next({ headers });
	}
}

export const config = {
	matcher: [
		{
			source: "/profile/:path*",
			locale: false,
		},
	],
};
