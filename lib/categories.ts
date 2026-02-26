import * as z from "zod";

export const Category: z.ZodType<any> = z.lazy(() =>
	z.object({
		id: z.number(),
		name: z.string(),
		image_url: z.string().nullable(),
		category_id: z.number().nullable(),
		categories: z.array(Category),
	}),
);

export const getCategories = async (locale: string) => {
	const data = await fetch(`${process.env.BACKEND_URL}/categories?mode=tree`, {
		headers: { "Accept-Language": locale },
		next: { revalidate: 3600, tags: ["categories"] },
	});
	const json = await data.json();
	return z.array(Category).parse(json);
};
