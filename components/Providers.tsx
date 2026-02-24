"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { type DefaultTheme, ThemeProvider } from "styled-components";

import { type Category, type Country, useCategories, useCountries } from "@/store";
import GlobalStyle from "./GlobalStyle";

const queryClient = new QueryClient();
const defaultTheme: DefaultTheme = {
	colors: {
		primary: "#3b3028",
		secondary: "#d3d3d3",
	},
};

export default function Providers({
	children,
	categories,
	countries,
}: {
	children: React.ReactNode;
	categories: Category[];
	countries: Country[];
}) {
	const { categories: storeCategories, setCategories } = useCategories();
	const setCountries = useCountries((s) => s.setCountries);

	useEffect(() => {
		if (storeCategories.length !== 0) return;
		if (categories) setCategories(categories);
		if (countries) setCountries(countries);
	}, [storeCategories, categories, countries, setCategories, setCountries]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
