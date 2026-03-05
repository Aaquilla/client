import z from "zod";

export const User = z.object({
	id: z.number(),
	full_name: z.string(),
	image_url: z.string().nullable(),
	email: z.string().optional(),
	phone_number: z.string().optional(),
});
