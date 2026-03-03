import axios from "axios";

import { useUser } from "@/store/user";

const host = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });
host.interceptors.request.use(
	(config) => {
		const { accessToken } = useUser.getState();
		if (!accessToken) return Promise.reject("no_access_token");
		config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
host.interceptors.response.use(
	(response) => response,
	({ response }) => {
		console.log(response);
		return Promise.reject(error);
	},
);

export default host;
