import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore {
	accessToken: string;

	setAccessToken: (accessToken: string) => void;
}

export const useUser = create<UserStore>()(
	devtools(
		(set) => ({
			accessToken: "",

			setAccessToken: (accessToken) => set(() => ({ accessToken })),
		}),
		{ name: "UserStore" },
	),
);
