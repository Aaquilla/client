import z from "zod";

export const Category = z.object({
	id: z.number(),
	name: z.string(),
	picture: z.string().nullable(),
	category_id: z.number().nullable(),
});

export const Categories = z.array(Category);
