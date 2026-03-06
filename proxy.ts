import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
	matcher: [
		{
			source: "/profile/:path*",
			locale: false,
			missing: [{ type: "cookie", key: "session_id" }],
		},
	],
};
