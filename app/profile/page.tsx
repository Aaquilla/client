"use client";

import { useExtracted } from "next-intl";

import { Content } from "./page.css";

const page = () => {
	const t = useExtracted("profile");

	return (
		<Content>
			<div className="info">
				<div>{t("Hermes Traveler's Passport")}</div>
				<div></div>
			</div>
			<div></div>
		</Content>
	);
};

export default page;
