"use client";

import { useQuery } from "@tanstack/react-query";
import { useExtracted } from "next-intl";

import host from "@/lib";

const page = () => {
	const t = useExtracted("profile");
	useQuery({ queryKey: ["referrals"], queryFn: () => host.get("/users/me/referrals").then(({ data }) => data) });

	return (
		<div>
			<div>
				{t("Invite friends and get bonuses!")}
				<span>
					{t(
						"Get +50 miles and coffee after your friend makes their first purchase for an amount of 150 UAH or more.",
					)}
				</span>
			</div>
			<div></div>
		</div>
	);
};

export default page;
