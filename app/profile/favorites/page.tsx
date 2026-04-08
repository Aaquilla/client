"use client";

import { Heart } from "lucide-react";
import { useExtracted } from "next-intl";

import {
	EmptyState,
	FavoritesContainer,
	FavoritesGrid,
	ProductCard,
	ProductImage,
	ProductInfo,
	ProductPrice,
	ProductTitle,
} from "./page.css";

const FavoritesPage = () => {
	const t = useExtracted("profile");
	const favorites = [];
	const placeholderProducts = [
		{ id: 1, title: "Товар 1", price: "99.99" },
		{ id: 2, title: "Товар 2", price: "149.99" },
		{ id: 3, title: "Товар 3", price: "199.99" },
	];

	return (
		<FavoritesContainer>
			{favorites.length > 0 ? (
				<FavoritesGrid></FavoritesGrid>
			) : (
				<>
					<FavoritesGrid>
						{placeholderProducts.map((product) => (
							<ProductCard key={product.id}>
								<ProductImage>
									<Heart size={48} />
								</ProductImage>
								<ProductInfo>
									<ProductTitle>{product.title}</ProductTitle>
									<ProductPrice>{product.price} грн</ProductPrice>
								</ProductInfo>
							</ProductCard>
						))}
					</FavoritesGrid>
					<EmptyState>{t("No favorites yet")}</EmptyState>
				</>
			)}
		</FavoritesContainer>
	);
};

export default FavoritesPage;
