import { Referrals } from "@/types/referrals";
import { authHost } from ".";

export const getReferrals = async () => {
	const { data } = await authHost.get(`/users/me/referrals`);
	return Referrals.parse(data);
};
