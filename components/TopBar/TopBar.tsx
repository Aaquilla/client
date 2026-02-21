"use client";

import { ChevronDown, ChevronUp, CircleUserRound, LayoutGrid, ShoppingBasket } from "lucide-react";
import { useExtracted, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { setLocaleCookie } from "@/app/actions";
import { type Locale, locales, localesDisplay } from "@/i18n";
import { useCategories } from "@/store";
import { Catalog, Categories, Category, SubCategories, SubCategory } from "./Catalogs.css";
import { LocaleSelector } from "./LocaleSelector.css";
import { Bar, Center, Content, Left, Logo, Right } from "./TopBar.css";

const TopBar = () => {
	const t = useExtracted("navigation");
	const { categories, active: activeCategory, activeSubCategories, setActive: setActiveCategory } = useCategories();
	const [catalogActive, setCatalogActive] = useState<boolean>(false);

	const locale = useLocale() as Locale;
	const [selected, setSelected] = useState<Locale>(locale);
	const [localeActive, setLocaleActive] = useState<boolean>(false);

	const onChange = async (locale: Locale) => {
		setLocaleActive(false);
		setSelected(locale);
		setLocaleCookie(locale);
	};

	return (
		<Content>
			<Bar>
				<Left>
					<Logo>
						<Image fill src="/logo.png" sizes="60px 60px, 40px 40px" alt="logo" loading="eager" />
					</Logo>
					<button type="button" onClick={() => setCatalogActive(!catalogActive)}>
						<LayoutGrid size={20} strokeWidth={1} absoluteStrokeWidth />
						{t("Catalog")}
					</button>
				</Left>
				<Center>
					<input type="text" placeholder={t("Find your treasure...")} />
					<button type="button">{t("Search")}</button>
				</Center>
				<Right>
					<button type="button" aria-label={t("Basket")}>
						<ShoppingBasket size={25} strokeWidth={1} absoluteStrokeWidth />
					</button>
					<button type="button" aria-label={t("Profile")}>
						<CircleUserRound size={25} strokeWidth={1} absoluteStrokeWidth />
					</button>
					<button
						type="button"
						aria-label={t("Change locale")}
						onClick={() => setLocaleActive(!localeActive)}
					>
						{localesDisplay[selected][0]}
						{localeActive ? (
							<ChevronUp size={20} strokeWidth={1} absoluteStrokeWidth />
						) : (
							<ChevronDown size={20} strokeWidth={1} absoluteStrokeWidth />
						)}
					</button>
					<LocaleSelector $active={localeActive}>
						{locales.map((l) => (
							<li key={l}>
								<button type="button" onClick={() => onChange(l)}>
									{localesDisplay[l][1]}
								</button>
							</li>
						))}
					</LocaleSelector>
				</Right>
			</Bar>
			<Catalog $active={catalogActive}>
				<Categories>
					{categories.map((category) => (
						<Category key={category.id} $active={activeCategory === category.id}>
							<button type="button" onClick={() => setActiveCategory(category.id)}>
								{category.name}
							</button>
						</Category>
					))}
				</Categories>
				<SubCategories>
					{activeSubCategories.map((category) => (
						<SubCategory key={category.id}>{category.name}</SubCategory>
					))}
				</SubCategories>
			</Catalog>
		</Content>
	);
};

export default TopBar;
