"use client";

import { useEffect } from "react";

import host from "@/lib";

const page = () => {
	useEffect(() => {
		localStorage.clear();
		host.get("/users/auth/logout").then(() => {
			window.location.replace("/");
		});
	}, []);
	return null;
};

export default page;
