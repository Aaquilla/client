"use client";

import { useState } from "react";
import styles from "./page.css";
import Link from "next/link";
import { ShoppingBasket, Heart } from "lucide-react";

export default function Home() {
	const slides = [
		"/images/slide1.png",
		"/images/slide2.png",
		"/images/slide3.png",
	];

	const [current, setCurrent] = useState(0);

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	return (
		<main style={styles.main}>
			{/* HERO */}
			<section style={styles.hero}>
				<div
					style={{
						...styles.slide,
						backgroundImage: `url(${slides[current]})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
				</div>

				<div style={styles.controls}>
					<button style={styles.arrowBtn} onClick={prevSlide}>
						{"<"}
					</button>

					<div style={styles.dots}>
						{slides.map((_, i) => (
							<span
								key={i}
								style={i === current ? styles.dotActive : styles.dot}
							></span>
						))}
					</div>

					<button style={styles.arrowBtn} onClick={nextSlide}>
						{">"}
					</button>
				</div>
			</section>

			{/* ПОПУЛЯРНІ КАТЕГОРІЇ */}
			<section style={styles.section}>
				<div style={styles.header}>
					<h2 style={styles.title}>Популярні категорії</h2>
					<a style={styles.link}>Переглянути всі →</a>
				</div>

				<div style={styles.categories}>
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} style={styles.category}>
							<div style={styles.circle}></div>
							<p>Категорія</p>
						</div>
					))}
				</div>
			</section>

			{/* КРАЇНИ */}
			<section style={styles.section}>
				<h2 style={styles.title}>Країни місяця</h2>

				<div style={styles.mapBlock}>
					<div style={styles.sideCircle}></div>

					<div style={styles.centerCountry}>
						<h3>ФРАНЦІЯ</h3>
						<p>Опис країни</p>
					</div>

					<div style={styles.sideCircle}></div>
				</div>

				<div style={styles.tickets}>
					{[1, 2, 3].map((i) => (
						<div key={i} style={styles.ticket}>
							✈ Київ → Париж
							<p>Пропозиція</p>
						</div>
					))}
				</div>
			</section>

			{/* КУЛІНАРІЯ */}
			<section style={styles.section}>
				<div style={styles.header}>
					<h2 style={styles.title}>Спробувати кулінарію світу</h2>
					<a style={styles.link}>Переглянути всі →</a>
				</div>

				<div style={styles.categories}>
					{["Італія", "Франція", "Японія", "Корея", "Китай", "Іспанія"].map(
						(name, i) => (
							<div key={i} style={styles.category}>
								<div style={styles.circle}></div>
								<p>{name}</p>
							</div>
						)
					)}
				</div>
			</section>

			{/* ТОВАРНІ БЛОКИ */}
			{[
				"Новинки",
				"Знижки місяця",
				"Товари з найвищим рейтингом",
				"Хіт продажів",
			].map((title, sectionIndex) => (
				<section key={sectionIndex} style={styles.section}>
					<div style={styles.header}>
						<h2 style={styles.title}>{title}</h2>
						<a style={styles.link}>Переглянути всі →</a>
					</div>

					<div style={styles.products}>
						{Array.from({ length: 4 }).map((_, i) => (
							<div key={i} style={styles.card}>
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
										<div style={styles.price}>219 грн</div>
										<div style={styles.sub}>395 ккал / 100 г</div>
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
				</section>
			))}
		</main>
	);
}