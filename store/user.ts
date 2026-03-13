import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
	fullName: string;
	email: string;
	phoneNumber: string;
	imageUrl: string;
}

interface UserStore {
	accessToken: string | null;
	user: User | null;

	setAccessToken: (accessToken: string) => void;
	setUser: (user: User) => void;
}

export const useUser = create<UserStore>()(
	devtools(
		persist(
			(set) => ({
				accessToken: null,
				user: null,

				setAccessToken: (accessToken) => set(() => ({ accessToken })),
				setUser: (user) => set(() => ({ user })),
			}),
			{ name: "auth_info" },
		),
		{ name: "UserStore" },
	),
);
