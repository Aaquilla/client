import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

import { localesDisplay } from "./index";

export default getRequestConfig(async () => {
	const cookieLocale = (await cookies()).get("locale");
	const headerLocale = (await headers()).get("accept-language");

	let locale = cookieLocale ? cookieLocale.value : headerLocale ? headerLocale.split(/[;,]/)[0] : "uk-UA";
	if (![...Object.keys(localesDisplay)].includes(locale)) {
		locale = "uk-UA";
	}
	const messages = (await import(`../messages/${locale}.po`)).default;

	return {
		locale,
		messages,
	};
});
