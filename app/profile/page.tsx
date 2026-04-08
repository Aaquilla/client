"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MapPin, Camera, X } from "lucide-react"; 
import { useExtracted } from "next-intl";
import Image from "next/image";
import type React from "react";
import { useState, useMemo } from "react";

import { getProfile, updateProfile } from "@/lib/user";
import { 
	AvatarSection, AvatarOverlay, Content, Form, FormLabel, FormSection, PassportHeader,
	ModalOverlay, ModalBox, ModalClose, ModalTitle, ModalButtons, CancelButton, ConfirmButton,
	StatusModalBox, StatusHeader, StatusTitleBlock, StatusBadge, TimelineWrapper, 
	TimelineLineBase, TimelineLineActive, TimelineNode, TimelineCircle, TimelineLabel,
	InfoCard, InfoCardTitle, InfoRow, BonusRow
} from "./page.css";

const ProfilePage = () => {
	const t = useExtracted("profile");
	const queryClient = useQueryClient();

	const { data, isSuccess } = useQuery({
		queryKey: ["profile"],
		queryFn: async () => await getProfile(),
	});

	// === СТАНИ ДЛЯ МОДАЛОК ===
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
	
	const [pendingData, setPendingData] = useState<FormData | null>(null);

	// Реальний статус користувача: "Турист" (Індекс 0)
	const userAchievedStatusIdx = 0; 

	// За замовчуванням відкриваємо слайдер на поточному статусі
	const [selectedStatusIdx, setSelectedStatusIdx] = useState(userAchievedStatusIdx);

	const mutation = useMutation({
		mutationFn: async (body: FormData) => await updateProfile(body),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["profile"] });
			setIsModalOpen(false); 
			setPendingData(null);
		},
	});

	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setPreviewUrl(URL.createObjectURL(file));
		}
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		setPendingData(formData);
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		setPendingData(null);
	};

	let currentAvatar = "/logo.png";
	if (previewUrl) {
		currentAvatar = previewUrl;
	} else if (data?.picture) {
		const baseUrl = process.env.NEXT_PUBLIC_FILES_URL || "";
		currentAvatar = baseUrl ? `${baseUrl}/${data.picture}` : `/${data.picture}`;
	}

	// === ВИПРАВЛЕНО: З масиву прибрано історію. Залишились тільки бонуси для табів ===
	const statuses = useMemo(() => [
		{ 
			label: "Турист", 
			miles: "0+",
			bonuses: [
				"Курс миль: 1 миля = 100 грн із чеку замовлення",
				"Бонус на день народження",
			] 
		},
		{ 
			label: "Дослідник", 
			miles: "50+",
			bonuses: [
				"Курс миль: 2 милі = 100 грн із чеку замовлення",
				"Персональні пропозиції",
				"Подвійні милі на товари “Країна Місяця”",
			] 
		},
		{ 
			label: "Мандрівник", 
			miles: "150+",
			bonuses: [
				"Курс миль: 3 милі = 100 грн із чеку замовлення",
				"Знижки на імпортні позиції",
				"Безкоштовна тижнева кава",
			] 
		},
		{ 
			label: "Посол\nГермеса", 
			miles: "300+",
			bonuses: [
				"Курс миль: 4 милі = 100 грн із чеку замовлення",
				"Персональні знижки на обрані категорії",
				"Участь у закритих подіях",
			] 
		},
	], []);

	// Розрахунок відсотка заповнення лінії таймлайну
	const progressPercentage = useMemo(() => {
		const totalNodes = statuses.length;
		if (totalNodes <= 1) return "0%";
		const percent = (userAchievedStatusIdx / (totalNodes - 1)) * 100;
		return `${percent}%`;
	}, [statuses, userAchievedStatusIdx]);

	return (
		<Content>
			{isSuccess && data && (
				<>
					<PassportHeader>
						<h2>{t("Hermes Traveler's Passport")}</h2>
						<div className="badges">
							<button type="button" onClick={() => setIsStatusModalOpen(true)}>
								Турист
							</button>
							<button type="button">
								<MapPin size={16} className="icon" />
								<span>50</span>
							</button>
						</div>
					</PassportHeader>

					<Form onSubmit={onSubmit}>
						<AvatarSection>
							<Image src={currentAvatar} fill style={{ objectFit: "cover", zIndex: 1 }} alt={t("Avatar")} loading="eager" sizes="280x280" unoptimized />
							<AvatarOverlay>
								<Camera size={32} style={{ marginBottom: "8px" }} />
								<span>Змінити</span>
							</AvatarOverlay>
							<input type="file" name="picture" accept="image/*" onChange={handleAvatarChange} />
						</AvatarSection>
						<FormSection>
							<FormLabel>{t("Full name")}<input type="text" name="full_name" defaultValue={data.full_name || ""} /></FormLabel>
							<FormLabel>{t("Email address")}<input type="email" name="email" defaultValue={data.email || ""} /></FormLabel>
							<FormLabel>{t("Phone number")}<input type="tel" name="phone_number" defaultValue={data.phone_number || ""} /></FormLabel>
							<button type="submit" disabled={mutation.isPending}>{mutation.isPending ? "Збереження..." : t("Save")}</button>
						</FormSection>
					</Form>

					{/* === МОДАЛЬНЕ ВІКНО РЕДАГУВАННЯ === */}
					{isModalOpen && (
						<ModalOverlay onClick={handleCancel}><ModalBox onClick={(e) => e.stopPropagation()}><ModalClose onClick={handleCancel} type="button"><X size={28} /></ModalClose><ModalTitle>Ви впевнені, що хочете змінити<br/>персональні дані?</ModalTitle><ModalButtons><CancelButton onClick={handleCancel} type="button">Скасувати</CancelButton><ConfirmButton onClick={() => mutation.mutate(pendingData!)} type="button" disabled={mutation.isPending}>{mutation.isPending ? "Збереження..." : "Змінити"}</ConfirmButton></ModalButtons></ModalBox></ModalOverlay>
					)}

					{/* === МОДАЛЬНЕ ВІКНО СТАТУСІВ (ТАБ-СЛАЙДЕР) === */}
					{isStatusModalOpen && (
						<ModalOverlay onClick={() => setIsStatusModalOpen(false)}>
							<StatusModalBox onClick={(e) => e.stopPropagation()}>
								<ModalClose onClick={() => setIsStatusModalOpen(false)} type="button">
									<X size={28} />
								</ModalClose>

								<StatusHeader>
									<StatusTitleBlock>
										<h3>Поточний статус</h3>
										<span>Отримано: 12.12.2025</span>
									</StatusTitleBlock>
									{/* Плашка справа підлаштовується під реальний статус юзера */}
									<StatusBadge>{statuses[userAchievedStatusIdx].label.replace('\n', ' ')}</StatusBadge>
								</StatusHeader>

								<TimelineWrapper>
									<TimelineLineBase />
									<TimelineLineActive $progress={progressPercentage} />
									
									{statuses.map((status, idx) => (
										<TimelineNode key={idx} onClick={() => setSelectedStatusIdx(idx)}>
											<TimelineCircle 
												$active={idx === selectedStatusIdx} 
												$achieved={idx <= userAchievedStatusIdx} 
											>
												{status.miles}
											</TimelineCircle>
											<TimelineLabel>
												{status.label}
											</TimelineLabel>
										</TimelineNode>
									))}
								</TimelineWrapper>

								{/* === ВИПРАВЛЕНО: Картка "Історія миль" тепер СТАТИЧНА === */}
								<InfoCard>
									<InfoCardTitle>Історія миль</InfoCardTitle>
									<InfoRow><span>Поточна кількість активних миль</span><span>10</span></InfoRow>
									<InfoRow><span>Всього накопичено за попередній рік</span><span>0</span></InfoRow>
									<InfoRow><span>Всього накопичено за поточний рік</span><span>10</span></InfoRow>
								</InfoCard>

								{/* Картка "Список бонусів" (ДИНАМІЧНА, змінюється при кліку) */}
								<InfoCard>
									<InfoCardTitle>
										Список бонусів статусу "{statuses[selectedStatusIdx].label.replace('\n', ' ')}"
									</InfoCardTitle>
									
									{statuses[selectedStatusIdx].bonuses.map((bonus, idx) => (
										<BonusRow key={idx}>{bonus}</BonusRow>
									))}
								</InfoCard>

							</StatusModalBox>
						</ModalOverlay>
					)}
				</>
			)}
		</Content>
	);
};

export default ProfilePage;