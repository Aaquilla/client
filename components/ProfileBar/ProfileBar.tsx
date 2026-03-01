"use client";

import { Coffee, Heart, History, LogOut, MapPin, User } from "lucide-react";
import { useExtracted } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { Content, Item, Items } from "./ProfileBar.css";

const ProfileBar = () => {
	const t = useExtracted("profile");
	const pathname = usePathname();
	const router = useRouter();

	const items = [
		{ href: "/profile", Icon: User, label: t("Profile") },
		{ href: "/profile/favorites", Icon: Heart, label: t("Favorites") },
		{ href: "/profile/orders", Icon: History, label: t("Orders") },
		{ href: "/profile/countries", Icon: MapPin, label: t("Countries") },
		{ href: "/profile/coffee", Icon: Coffee, label: t("Coffee") },
		{ href: "/profile/logout", Icon: LogOut, label: t("Logout") },
	];

	return (
		<Content>
			<Items>
				{items.map(({ href, Icon, label }) => (
					<Item key={href} $active={pathname === href}>
						<button type="button" onClick={() => router.push(href)}>
							<Icon />
							{label}
						</button>
					</Item>
				))}
			</Items>
		</Content>
	);
};

export default ProfileBar;
