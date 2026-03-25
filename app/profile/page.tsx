"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MapPin } from "lucide-react";
import { useExtracted } from "next-intl";
import Image from "next/image";
import type React from "react";

import { getProfile, updateProfile } from "@/lib/user";
import { AvatarSection, Content, Form, FormLabel, FormSection, PassportHeader } from "./page.css";

const ProfilePage = () => {
	const t = useExtracted("profile");

	const query = useQueryClient();
	const { data, isSuccess } = useQuery({
		queryKey: ["profile"],
		queryFn: async () => await getProfile(),
	});
	const mutation = useMutation({
		mutationFn: async (body: { full_name: string; email: string }) => await updateProfile(body),
		onSuccess: () => query.invalidateQueries({ queryKey: ["profile"] }),
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) URL.createObjectURL(file);
	};

	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const json = Object.fromEntries(formData.entries());

		mutation.mutate(json);
	};

	return (
		<Content>
			{isSuccess && (
				<>
					<PassportHeader>
						<h2>{t("Hermes Traveler's Passport")}</h2>
						<div className="badges">
							<button type="button">Турист</button>
							<button type="button">
								<MapPin size={16} className="icon" />
								<span>50</span>
							</button>
						</div>
					</PassportHeader>

					<Form onSubmit={onSubmit}>
						<AvatarSection>
							<Image src={"/logo.png"} fill alt={t("Avatar")} loading="eager" sizes="220x220" />
							<input type="file" onChange={handleFileChange} accept="image/*" />
						</AvatarSection>

						<FormSection>
							<FormLabel>
								{t("Full name")}
								<input type="text" name="full_name" defaultValue={data.full_name} />
							</FormLabel>

							<FormLabel>
								{t("Email address")}
								<input type="email" name="email" defaultValue={data.email} />
							</FormLabel>

							<FormLabel>
								{t("Phone number")}
								<input type="tel" name="phone_number" defaultValue={data.phone_number || ""} />
							</FormLabel>

							<button type="submit">{t("Save")}</button>
						</FormSection>
					</Form>
				</>
			)}
		</Content>
	);
};

export default ProfilePage;
