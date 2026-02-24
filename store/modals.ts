import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalsState {
	catalog: boolean;
	basket: boolean;

	setCatalog: (catalog: boolean) => void;
	setBasket: (basket: boolean) => void;
}

export const useModals = create<ModalsState>()(
	devtools(
		(set) => ({
			catalog: false,
			basket: false,
			setCatalog: (catalog) => set(() => ({ catalog })),
			setBasket: (basket) => set(() => ({ basket })),
		}),
		{ name: "ModalsStore" },
	),
);
