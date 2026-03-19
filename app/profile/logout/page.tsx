"use client";

import { useEffect } from "react";

const page = () => {
	useEffect(() => {
		localStorage.clear();
		fetch("/api/logout", { credentials: "include" }).then(() => {
			window.location.replace("/");
		});
	}, []);
	return null;
};

export default page;
