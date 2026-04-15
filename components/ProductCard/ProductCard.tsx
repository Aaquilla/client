"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { removeFavorite } from "@/lib/favorites";
import type { ProductType } from "@/types/products";
import {
	Actions,
	Badge,
	Bottom,
	Buttons,
	CartButton,
	Content,
	FavoriteButton,
	ImageWrap,
	ProductImage,
	ProductName,
	ProductPrice,
	Rating,
	Stock,
	Sub,
	Top,
} from "./ProductCard.css";

const ProductCard = (product: ProductType) => {
	const query = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ["favorites"],
		mutationFn: async (id: number) => await removeFavorite(id),
		onSuccess: () => query.invalidateQueries({ queryKey: ["favorites"] }),
	});

	return (
		<Content>
			<Badge>- 15%</Badge>

			<Top>
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
			</Top>

			<Bottom>
				<Stock>
					<div className="indicator"></div>
					<div>немає в наявності</div>
				</Stock>

				<Rating>★★★★★</Rating>

				<Buttons>
					<div>
						<ProductPrice>{product.price} грн</ProductPrice>
						<Sub>{product.weight} мл / 100 г</Sub>
					</div>
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
				</Buttons>
			</Bottom>
		</Content>
	);
};

export default ProductCard;
