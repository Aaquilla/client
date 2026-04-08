"use client";

import styles from "../page.css";
import Link from "next/link";
import { ShoppingBasket, Heart, ArrowDownWideNarrow, Settings2 } from "lucide-react";

export default function CatalogPage() {
	return (
		<main style={styles.main}>
			{/* HEADER */}
			<div style={styles.catalogHeader}>
				<div>
					<h1 style={styles.catalogTitle}>
						Категорія 1
					</h1>
					<p style={styles.breadcrumbs}>Головна / Каталог / Категорія 1</p>
				</div>

				<div style={styles.catalogActions}>
					<button style={styles.filterBtn}>
						<Settings2 size={16} strokeWidth={2} style={{ marginRight: "6px" }} />
						Фільтр
					</button>
					<button style={styles.filterBtn}>
						<ArrowDownWideNarrow size={16} strokeWidth={2} style={{ marginRight: "6px" }} />
						Сортування
					</button>
				</div>
			</div>

			{/* PRODUCTS */}
			<div style={styles.products}>
				{Array.from({ length: 16 }).map((_, i) => (
					<div key={i} style={styles.card}>
						{/* BADGE */}
						{i % 2 === 0 && (
							<div style={styles.badge}>- 15%</div>
						)}

						<div style={styles.image}></div>

						<p style={styles.name}>
							Назва товару
						</p>

						<div style={styles.stock}>
							<span style={styles.dotGreen}></span>
							є в наявності
						</div>

						<div style={styles.ratingRow}>
							<span style={styles.stars}>★★★★★</span>
							<span>5/5</span>
						</div>

						<div style={styles.bottom}>
							<div>
								<div style={styles.price}>49.30 грн</div>
								<div style={styles.sub}>175 ккал / 100 г</div>
							</div>

							<div style={styles.actions}>
								<Link href="/heart" style={styles.favBtn}>
									<Heart size={20} strokeWidth={1.5} />
								</Link>

								<Link href="/basket" style={styles.cartBtn}>
									<ShoppingBasket size={20} strokeWidth={1.5} />
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}