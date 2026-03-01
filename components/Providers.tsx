"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { type Category, type Country, useCategories, useCountries } from "@/store";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

const queryClient = new QueryClient();

export default function Providers({
	children,
	categories,
	countries,
}: {
	children: React.ReactNode;
	categories: Category[];
	countries: Country[];
}) {
	const { setCategories } = useCategories();
	const setCountries = useCountries((s) => s.setCountries);

	useEffect(() => {
		if (categories) setCategories(categories);
		if (countries) setCountries(countries);
	}, [categories, countries, setCategories, setCountries]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
