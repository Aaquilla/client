import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStore {
	accessToken: string;

	setAccessToken: (accessToken: string) => void;
}

export const useUser = create<UserStore>()(
	devtools(
		persist(
			(set) => ({
				accessToken: "",

				setAccessToken: (accessToken) => set(() => ({ accessToken })),
			}),
			{ name: "auth_info" },
		),
		{ name: "UserStore" },
	),
);
