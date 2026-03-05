import { Categories } from "@/types/categories";

export const getCategories = async (locale: string) => {
	const data = await fetch(`${process.env.BACKEND_URL}/categories?mode=tree`, {
		headers: { "Accept-Language": locale },
		next: { revalidate: 3600, tags: ["categories"] },
	});
	const json = await data.json();
	return Categories.parse(json);
};
