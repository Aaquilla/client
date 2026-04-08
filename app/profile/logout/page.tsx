"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";
import host from "@/lib";

import {
	ModalOverlay,
	ModalBox,
	ModalClose,
	ModalTitle,
	ModalButtons,
	CancelButton,
	ConfirmButton,
} from "./page.css";

const LogoutPage = () => {
	const router = useRouter();
	const [isPending, setIsPending] = useState(false);

	const handleConfirm = async () => {
		setIsPending(true);
		
		try {
			// Сначала стучимся на бэкенд
			await host.get("/users/auth/logout");
		} catch (error) {
			console.error("Помилка при виході", error);
		} finally {
			// И ТОЛЬКО ПОТОМ чистим кэш и мгновенно уходим на главную.
			// Так React не успеет "испугаться" отсутствия данных и упасть.
			localStorage.clear();
			window.location.replace("/");
		}
	};

	const handleCancel = () => {
		// Безопасный возврат назад. Если история сломалась, просто кидаем в профиль
		if (window.history.length > 2) {
			router.back();
		} else {
			router.push("/profile"); // Если твой путь профиля называется иначе - поправь тут
		}
	};

	return (
		<ModalOverlay>
			<ModalBox>
				<ModalClose onClick={handleCancel} type="button" disabled={isPending}>
					<X size={28} />
				</ModalClose>

				<ModalTitle>
					Ви впевнені, що хочете вийти з<br />
					акаунту?
				</ModalTitle>

				<ModalButtons>
					<CancelButton onClick={handleCancel} type="button" disabled={isPending}>
						Скасувати
					</CancelButton>
					<ConfirmButton onClick={handleConfirm} type="button" disabled={isPending}>
						{isPending ? "Вихід..." : "Вийти"}
					</ConfirmButton>
				</ModalButtons>
			</ModalBox>
		</ModalOverlay>
	);
};

export default LogoutPage;