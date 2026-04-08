"use client";

import { useQuery } from "@tanstack/react-query";
import { useExtracted } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";

import { getReferrals } from "@/lib/referrals";
import { 
	Content, Item, Items, Header, HeaderInfo, InviteButton,
	ModalOverlay, ModalBox, ModalClose, ModalTitle, 
	LinkContainer, LinkInput, CopyButton // <-- ИСПРАВЛЕНО: LinkInput вернулся
} from "./page.css";

const FriendsPage = () => {
	const t = useExtracted("profile");

	const { data, isSuccess } = useQuery({
		queryKey: ["friends"],
		queryFn: async () => await getReferrals(),
		staleTime: 3 * 60 * 1000,
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	// Временная реферальная ссылка (для теста троеточия сделал длиннее)
	const referralLink = "https://hermes-shop.com/register/HERMES9F3A21";

	const handleCopy = () => {
		navigator.clipboard.writeText(referralLink);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	// Закрытие строго при клике по фону
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setIsModalOpen(false);
		}
	};

	return (
		<Content>
			<Header>
				<HeaderInfo>
					<div className="info">{t("Invite friends and get bonuses!")}</div>
					<div>
						{t(
							"Get +50 miles and coffee after your friend makes their first purchase for an amount of 150 UAH or more.",
						)}
					</div>
				</HeaderInfo>
				
				<InviteButton onClick={() => setIsModalOpen(true)} type="button">
					Запросити
				</InviteButton>
			</Header>

			<Items>
				{isSuccess &&
					data.map((r) => (
						<Item key={r.id}>
							<div className="image">
								<Image
									src={r.picture ? `${process.env.NEXT_PUBLIC_FILES_URL}/${r.picture}` : "/logo.png"}
									width={34}
									height={34}
									alt=""
									unoptimized={true}
								/>
							</div>
							<div>{r.full_name}</div>
							<div className="status">{t("Waiting for the first purchase")}</div>
						</Item>
					))}
			</Items>

			{isModalOpen && (
				<ModalOverlay onClick={handleOverlayClick}>
					<ModalBox onClick={(e) => e.stopPropagation()}>
						<ModalClose onClick={() => setIsModalOpen(false)} type="button">
							<X size={28} />
						</ModalClose>

						<ModalTitle>Запрошувальне посилання</ModalTitle>

						<LinkContainer>
							{/* === ИСПРАВЛЕНО: Вернули Input с value и readOnly, текст уходит в троеточие === */}
							<LinkInput 
								type="text" 
								value={referralLink} 
								readOnly 
							/>
							<CopyButton onClick={handleCopy} type="button">
								{isCopied ? "Скопійовано" : "Копіювати"}
							</CopyButton>
						</LinkContainer>
					</ModalBox>
				</ModalOverlay>
			)}
		</Content>
	);
};

export default FriendsPage;