"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCategories, useModals } from "@/store";
import { Categories, Category, Content, ContentWrapper, SubCategories, SubCategory } from "./Catalog.css";

const Catalog = () => {
	const pathname = usePathname();
	const router = useRouter();

	const { categories, active: activeCategory, activeSubCategories, setActive: setActiveCategory } = useCategories();

	const { catalog, basket } = useModals();

	useEffect(() => {
		const paths = pathname.split("/").filter((p) => p);
		if (paths.length !== 0 && Number.isFinite(Number(paths[0])) && Number(paths[0]) !== activeCategory) {
			setActiveCategory(Number(paths[0]));
		}
	}, [pathname, activeCategory, setActiveCategory]);

	return (
		<Content $active={catalog} $basket={basket}>
			<ContentWrapper>
				<Categories>
					{categories.map((category) => (
						<Category key={category.id} $active={activeCategory === category.id}>
							<button
								type="button"
								onClick={() => {
									setActiveCategory(category.id);
									router.push(`/${category.id}`);
								}}
							>
								{category.name}
							</button>
						</Category>
					))}
				</Categories>
				<SubCategories>
					{activeSubCategories.map((category) => (
						<SubCategory
							key={category.id}
							onClick={() => router.push(`/${category.category_id}/${category.id}`)}
							$active={pathname === `/${category.category_id}/${category.id}`}
						>
							{category.name}
						</SubCategory>
					))}
				</SubCategories>
			</ContentWrapper>
		</Content>
	);
};

export default Catalog;
