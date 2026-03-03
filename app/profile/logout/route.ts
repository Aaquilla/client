import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const cookiesStore = await cookies();
	cookiesStore.delete("session_id");
	return NextResponse.redirect(new URL("/login", request.url));
}
