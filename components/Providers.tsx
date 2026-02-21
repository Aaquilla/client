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
	const { setCategories, setActive } = useCategories();
	const setCountries = useCountries((s) => s.setCountries);

	useEffect(() => {
		if (categories) {
			setCategories(categories);
			setActive(categories[0].id);
		}
		if (countries) setCountries(countries);
	}, [categories, countries, setCategories, setActive, setCountries]);

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
