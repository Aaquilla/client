import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Category {
	id: number;
	name: string;
	image_url: string | null;
	category_id: number | null;
	categories: Category[];
}

interface CategoriesStore {
	categories: Category[];
	active: number | null;
	activeSubCategories: Category[];

	setCategories: (categories: Category[]) => void;
	setActive: (active: number) => void;
}

export const useCategories = create<CategoriesStore>()(
	devtools(
		(set) => ({
			categories: [],
			active: null,
			activeSubCategories: [],

			setCategories: (categories) =>
				set(() => {
					const category = categories.length !== 0 ? categories[0] : null;
					return {
						categories,
						active: category ? category.id : null,
						activeSubCategories: category ? category.categories : [],
					};
				}),
			setActive: (active) =>
				set((state) => ({
					active: state.categories.find((c) => c.id === active) ? active : null,
					activeSubCategories: state.categories.find((c) => c.id === active)?.categories ?? [],
				})),
		}),
		{ name: "CategoriesStore" },
	),
);
