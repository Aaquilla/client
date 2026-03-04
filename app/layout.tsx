import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Montserrat_Alternates } from "next/font/google";

import Basket from "@/components/Basket/Basket";
import Catalog from "@/components/Catalog/Catalogs";
import Providers from "@/components/Providers";
import ServerProviders from "@/components/ServerProviders";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import TopBar from "@/components/TopBar/TopBar";
import { getCategories } from "@/lib/categories";
import { getCountries } from "@/lib/countries";
import { Main } from "./layout.css";

export const metadata: Metadata = {
	title: "Shop",
};

const montserrat = Montserrat_Alternates({
	weight: ["400", "500"],
	subsets: ["cyrillic", "latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();

	const categories = await getCategories(locale);
	const countries = await getCountries(locale);

	return (
		<html lang={locale}>
			<body className={montserrat.className}>
				<StyledComponentsRegistry>
					<ServerProviders>
						<Providers categories={categories} countries={countries}>
							<Main>
								<TopBar />
								<Catalog />
								<Basket />
								{children}
							</Main>
						</Providers>
					</ServerProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
