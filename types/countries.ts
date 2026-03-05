import z from "zod";

export const Country = z.object({
	id: z.number(),
	name: z.string(),
	image_url: z.string().nullable(),
});

export const Countries = z.array(Country);
