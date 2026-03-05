import { Countries } from "@/types/countries";

export const getCountries = async (locale: string) => {
	const data = await fetch(`${process.env.BACKEND_URL}/countries`, {
		headers: { "Accept-Language": locale },
		next: { revalidate: 3600, tags: ["countries"] },
	});
	const json = await data.json();
	return Countries.parse(json);
};
