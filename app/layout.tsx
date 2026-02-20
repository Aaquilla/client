import clsx from "clsx";
import { getLocale } from "next-intl/server";
import { Montserrat_Alternates } from "next/font/google";

import Providers from "@/components/Providers";
import ServerProviders from "@/components/ServerProviders";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import TopBar from "@/components/TopBar/TopBar";
import { getCategories } from "@/lib/categories";
import { getCountries } from "@/lib/countries";
import { Main } from "./layout.css";

const montserrat = Montserrat_Alternates({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["cyrillic", "latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const categories = await getCategories();
	const countries = await getCountries();

	return (
		<html lang={locale}>
			<body className={clsx(montserrat.className)}>
				<StyledComponentsRegistry>
					<ServerProviders>
						<Providers categories={categories} countries={countries}>
							<Main>
								<TopBar />
								{children}
							</Main>
						</Providers>
					</ServerProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
