import z from "zod";

import { User } from "./users";

export const Referral = User.extend({});
export const Referrals = z.array(Referral);
