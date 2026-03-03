"use client";

import { useQuery } from "@tanstack/react-query";
import { useExtracted } from "next-intl";
import Image from "next/image";

import host from "@/lib";
import { Content, Item, Items } from "./page.css";

const page = () => {
	const t = useExtracted("profile");
	const { data, isSuccess } = useQuery({
		queryKey: ["friends"],
		queryFn: () => host.get("/users/me/referrals").then(({ data }) => data),
		staleTime: 360000,
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
					data.map((u: any) => (
						<Item key={u.id}>
							<div className="image">
								{u.image_url && (
									<Image src={u.image_url} width={34} height={34} alt="" unoptimized={true} />
								)}
							</div>
							<div>{u.full_name}</div>
							<div className="status">Очікує першу покупку</div>
						</Item>
					))}
			</Items>
		</Content>
	);
};

export default page;
