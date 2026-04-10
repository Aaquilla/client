"use client";

import React, { useState } from "react";
import { useExtracted } from "next-intl";
import { X } from "lucide-react";

import FriendsList from "@/components/FriendsList/FriendsList";
import { 
	Content, Header, HeaderInfo, InviteButton,
	ModalOverlay, ModalBox, ModalClose, ModalTitle, 
	LinkContainer, LinkInput, CopyButton 
} from "./page.css";

const FriendsPage = () => {
	// Используем контекст "profile", как в остальных частях личного кабинета
	const t = useExtracted("profile");

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const referralLink = "https://hermes-shop.com/register/HERMES9F3A21";

	const handleCopy = () => {
		navigator.clipboard.writeText(referralLink);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

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
					{/* Текст кнопки "Запросити" */}
					{t("Invite")}
				</InviteButton>
			</Header>

			<FriendsList />

			{isModalOpen && (
				<ModalOverlay onClick={handleOverlayClick}>
					<ModalBox onClick={(e) => e.stopPropagation()}>
						<ModalClose onClick={() => setIsModalOpen(false)} type="button">
							<X size={28} />
						</ModalClose>

						{/* Заголовок модалки */}
						<ModalTitle>{t("Invitation link")}</ModalTitle>

						<LinkContainer>
							<LinkInput 
								type="text" 
								value={referralLink} 
								readOnly 
							/>
							<CopyButton onClick={handleCopy} type="button">
								{/* Динамический текст кнопки копирования */}
								{isCopied ? t("Copied") : t("Copy")}
							</CopyButton>
						</LinkContainer>
					</ModalBox>
				</ModalOverlay>
			)}
		</Content>
	);
};

export default FriendsPage;