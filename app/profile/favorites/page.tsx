"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Heart, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getFavorites, removeFavorite } from "@/lib/favorites";
import {
	Actions,
	Badge,
	Bottom,
	CartButton,
	Content,
	FavoriteButton,
	ImageWrap,
	Info,
	ProductCard,
	ProductImage,
	ProductName,
	ProductPrice,
	Rating,
	Stock,
	Sub,
} from "./page.css";

const FavoritesPage = () => {
	const query = useQueryClient();
	const { data, isSuccess } = useQuery({
		queryKey: ["favorites"],
		queryFn: async () => await getFavorites(),
		staleTime: 3 * 60 * 1000,
	});
	const { mutate } = useMutation({
		mutationKey: ["favorites"],
		mutationFn: async (id: number) => await removeFavorite(id),
		onSuccess: () => query.invalidateQueries({ queryKey: ["favorites"] }),
	});

	return (
		<Content>
			{isSuccess &&
				data.map(({ product }) => (
					<ProductCard key={product.id}>
						<Badge>- 15%</Badge>

						<ImageWrap>
							<ProductImage>
								<Image
									src={
										product.picture
											? `${process.env.NEXT_PUBLIC_FILES_URL}/products/${product.id}/large/${product.picture}.webp`
											: "/logo.png"
									}
									alt={product.name}
									fill
									loading="eager"
									unoptimized
								/>
							</ProductImage>
						</ImageWrap>

						<ProductName>{product.name}</ProductName>

						<Stock>
							<span />
							{product.inStock ? "є в наявності" : "немає в наявності"}
						</Stock>

						<Rating>
							<u>★★★★★</u>
							<span>{product.rating}</span>
						</Rating>

						<Bottom>
							<Info>
								<ProductPrice>{product.price} грн</ProductPrice>
								<Sub>{product.weight} мл / 100 г</Sub>
							</Info>

							<Actions>
								<FavoriteButton
									type="button"
									aria-label="Видалити з вибраного"
									onClick={() => mutate(product.id)}
								>
									<Heart size={26} strokeWidth={1.5} fill="#e53935" />
								</FavoriteButton>

								<CartButton as={Link} href="/basket" aria-label="Додати у кошик">
									<ShoppingBasket size={20} strokeWidth={1.5} />
								</CartButton>
							</Actions>
						</Bottom>
					</ProductCard>
				))}
		</Content>
	);
};

export default FavoritesPage;
