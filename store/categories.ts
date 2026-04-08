import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Category {
	id: number;
	name: string;
	picture: string | null;
	category_id: number | null;
}

interface CategoriesStore {
	categories: Category[];
	categoriesSet: Record<number, Category>;

	active: number | null;
	activeSubCategories: Category[];

	setCategories: (categories: Category[]) => void;
	setActive: (active: number | null) => void;
}

export const useCategories = create<CategoriesStore>()(
	devtools(
		(set) => ({
			categories: [],
			categoriesSet: {},

			active: null,
			activeSubCategories: [],

			setCategories: (categories) =>
				set(() => {
					const categoriesSet = Object.fromEntries(categories.map((c) => [c.id, c]));
					const category = categories.length !== 0 ? categories[0] : null;
					return {
						categories,
						categoriesSet,

						active: category ? category.id : null,
						activeSubCategories: category ? categories.filter((c) => c.category_id === category.id) : [],
					};
				}),
			setActive: (active) =>
				set((state) => ({
					active: active && state.categoriesSet[active] ? active : state.active,
					activeSubCategories: state.categories.filter((c) => c.category_id === active),
				})),
		}),
		{ name: "CategoriesStore" },
	),
);
