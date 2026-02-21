import * as z from "zod";

export const Category: z.ZodType<any> = z.lazy(() =>
	z.object({
		id: z.number(),
		name: z.string(),
		image_url: z.string().nullable(),
		categories: z.array(Category),
	}),
);

export const getCategories = async () => {
	const data = await fetch(`${process.env.BACKEND_URL}/categories?mode=tree`);
	const json = await data.json();
	return z.array(Category).parse(json);
};
