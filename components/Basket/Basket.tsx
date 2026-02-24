"use client";

import { useModals } from "@/store";
import { Content, ContentWrapper } from "./Basket.css";

const Basket = () => {
	const { basket } = useModals();
	return (
		<Content $active={basket}>
			<ContentWrapper></ContentWrapper>
		</Content>
	);
};

export default Basket;
