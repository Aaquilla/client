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
		staleTime: 3 * 60 * 1000,
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
								<Image
									src={r.picture ? `${process.env.NEXT_PUBLIC_FILES_URL}/${r.picture}` : "/logo.png"}
									width={34}
									height={34}
									alt=""
									unoptimized={true}
								/>
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
