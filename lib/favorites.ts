import { Favorites } from "@/types/favorites";
import { authHost } from ".";

export const getFavorites = async () => {
	const { data } = await authHost.get("/users/me/favorites");
	return Favorites.parse(data);
};

export const removeFavorite = async (id: number) => {
	await authHost.delete(`/users/me/favorites/${id}`);
};
