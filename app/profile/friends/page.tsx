"use client";

import { useQuery } from "@tanstack/react-query";
import { useExtracted } from "next-intl";
import Image from "next/image";

import { getReferrals } from "@/lib/referrals";
import { Content, Item, Items } from "./page.css";

const page = () => {
	const t = useExtracted("profile");
	const { data, isSuccess } = useQuery({
		queryKey: ["friends"],
		queryFn: async () => await getReferrals(),
		staleTime: 60000 * 3,
	});

	return (
		<Content>
			<div>
				<div className="info">{t("Invite friends and get bonuses!")}</div>
				<div>
					{t(
						"Get +50 miles and coffee after your friend makes their first purchase for an amount of 150 UAH or more.",
					)}
				</div>
			</div>
			<Items>
				{isSuccess &&
					data.map((r) => (
						<Item key={r.id}>
							<div className="image">
								{r.picture && (
									<Image src={r.picture} width={34} height={34} alt="" unoptimized={true} />
								)}
							</div>
							<div>{r.full_name}</div>
							<div className="status">{t("Waiting for the first purchase")}</div>
						</Item>
					))}
			</Items>
		</Content>
	);
};

export default page;
