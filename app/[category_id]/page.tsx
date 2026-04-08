"use client";

import { ArrowDownWideNarrow, Heart, Settings2, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

import { useCategories } from "@/store";
import {
	Actions,
	Badge,
	Bottom,
	Card,
	CartButton,
	CatalogActions,
	CatalogHeader,
	CatalogTitle,
	Content,
	FavoriteButton,
	FilterButton,
	ImageWrap,
	Info,
	Name,
	Price,
	ProductImage,
	Products,
	Rating,
	Stock,
	Sub,
} from "./page.css";

const products = Array.from({ length: 16 }).map((_, i) => ({
	id: i + 1,
	name: "Назва товару",
	price: "49.30 грн",
	calories: "175 ккал / 100 г",
	inStock: true,
	rating: "5/5",
	image: i % 3 === 0 ? "/images/slide1.png" : i % 3 === 1 ? "/images/slide2.png" : "/images/slide3.png",
	hasDiscount: i % 2 === 0,
}));

const page = ({ params }: { params: Promise<{ category_id: number }> }) => {
	const { category_id } = use(params);
	const { categoriesSet } = useCategories();

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Content>
			<CatalogHeader>
				<CatalogTitle>{mounted && (categoriesSet[category_id]?.name || "Категорія не знайдена")}</CatalogTitle>

				<CatalogActions>
					<FilterButton type="button">
						<Settings2 size={16} strokeWidth={2} />
						Фільтр
					</FilterButton>
					<FilterButton type="button">
						<ArrowDownWideNarrow size={16} strokeWidth={2} />
						Сортування
					</FilterButton>
				</CatalogActions>
			</CatalogHeader>

			<Products>
				{products.map((product) => (
					<Card key={product.id}>
						{product.hasDiscount && <Badge>- 15%</Badge>}

						<ImageWrap>
							<ProductImage>
								<Image
									src={product.image}
									alt={product.name}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
								/>
							</ProductImage>
						</ImageWrap>

						<Name>{product.name}</Name>

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
								<Price>{product.price}</Price>
								<Sub>{product.calories}</Sub>
							</Info>

							<Actions>
								<FavoriteButton as={Link} href="/heart" aria-label="Додати у вибране">
									<Heart size={20} strokeWidth={1.5} />
								</FavoriteButton>

								<CartButton as={Link} href="/basket" aria-label="Додати у кошик">
									<ShoppingBasket size={20} strokeWidth={1.5} />
								</CartButton>
							</Actions>
						</Bottom>
					</Card>
				))}
			</Products>
		</Content>
	);
};

export default page;
