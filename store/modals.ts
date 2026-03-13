import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalsStore {
	catalog: boolean;

	setCatalog: (catalog: boolean) => void;
}

export const useModals = create<ModalsStore>()(
	devtools(
		(set) => ({
			catalog: false,
			setCatalog: (catalog) => set(() => ({ catalog })),
		}),
		{ name: "ModalsStore" },
	),
);
