import { redirect } from "next/navigation";

const page = async () => {
	const url = new URL(`${process.env.BACKEND_URL}/users/auth/google`);
	url.searchParams.append("state", "http://localhost:3000");
	redirect(url.toString());
};

export default page;
