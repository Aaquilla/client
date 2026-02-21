import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Category {
	id: number;
	name: string;
	image_url: string | null;
	categories: Category[];
}

interface CategoriesState {
	categories: Category[];
	active: number | null;
	activeSubCategories: Category[];

	setCategories: (categories: Category[]) => void;
	setActive: (active: number) => void;
}

export const useCategories = create<CategoriesState>()(
	devtools(
		(set) => ({
			categories: [],
			active: null,
			activeSubCategories: [],

			setCategories: (categories) => set(() => ({ categories })),
			setActive: (active) =>
				set((state) => ({
					active: state.categories.find((c) => c.id === active) ? active : null,
					activeSubCategories: state.categories.find((c) => c.id === active)?.categories ?? [],
				})),
		}),
		{ name: "CategoriesStore" },
	),
);
