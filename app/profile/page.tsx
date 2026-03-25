"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MapPin } from "lucide-react";
import { useExtracted } from "next-intl";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

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

	const [values, setValues] = useState({ full_name: "", email: "", phone_number: "" });
	const onChange = <K extends keyof typeof values>(key: K, value: (typeof values)[K]) => {
		setValues((prev) => ({ ...prev, [key]: value }));
	};
	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutation.mutate(values);
	};

	useEffect(() => {
		if (!isSuccess) return;
		setValues({ full_name: data.full_name, email: data.email || "", phone_number: data.phone_number || "" });
	}, [data, isSuccess]);

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
								<input
									type="text"
									name="full_name"
									value={values.full_name}
									onChange={(e) => onChange("full_name", e.target.value)}
								/>
							</FormLabel>

							<FormLabel>
								{t("Email address")}
								<input
									type="email"
									name="email"
									value={values.email}
									onChange={(e) => onChange("email", e.target.value)}
								/>
							</FormLabel>

							<FormLabel>
								{t("Phone number")}
								<input
									type="tel"
									name="phone_number"
									value={values.phone_number}
									onChange={(e) => onChange("phone_number", e.target.value)}
								/>
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
