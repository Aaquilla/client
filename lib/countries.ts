import * as z from "zod";

const Country = z.object({
	id: z.number(),
	name: z.string(),
	image_url: z.string().nullable(),
});

export const getCountries = async (locale: string) => {
	const data = await fetch(`${process.env.BACKEND_URL}/countries`, {
		headers: { "Accept-Language": locale },
		next: { revalidate: 3600, tags: ["countries"] },
	});
	const json = await data.json();
	return z.array(Country).parse(json);
};
