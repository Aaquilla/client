"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Image as ImageIcon, Trash2, X } from "lucide-react";
import { useExtracted } from "next-intl";
import Image from "next/image";
import type React from "react";
import { useRef, useState } from "react";

import { GalleryContainer, GalleryGrid, GalleryItem, GallerySection, ModalBackdrop, ModalContent, NoPhotos, UploadArea } from "./page.css";

interface GalleryImage {
	id: string;
	url: string;
}

const GalleryPage = () => {
	const t = useExtracted("profile");
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			const newImages = Array.from(files).map((file) => ({
				id: Date.now() + Math.random().toString(),
				url: URL.createObjectURL(file),
			}));
			setImages((prev) => [...prev, ...newImages]);
		}
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleDeleteImage = (id: string) => {
		setImages((prev) => prev.filter((img) => img.id !== id));
	};

	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<GalleryContainer>
			<GallerySection>
				<h2>{t("Photo Gallery")}</h2>

				<UploadArea onClick={handleUploadClick}>
					<input
						ref={fileInputRef}
						type="file"
						multiple
						accept="image/*"
						onChange={handleImageUpload}
						hidden
					/>
					<ImageIcon size={40} />
					<span>{t("Add Photos")}</span>
				</UploadArea>

				{images.length > 0 ? (
					<GalleryGrid>
						{images.map((image) => (
							<GalleryItem key={image.id}>
								<Image
									src={image.url}
									alt="Gallery photo"
									width={200}
									height={200}
									style={{ objectFit: "cover" }}
									unoptimized
								/>
								<button
									onClick={() => handleDeleteImage(image.id)}
									className="delete-btn"
									type="button"
								>
									<Trash2 size={18} />
								</button>
								<button
									onClick={() => setSelectedImage(image)}
									className="view-btn"
									type="button"
								>
									View
								</button>
							</GalleryItem>
						))}
					</GalleryGrid>
				) : (
					<NoPhotos>{t("No photos yet")}</NoPhotos>
				)}
			</GallerySection>

			{selectedImage && (
				<ModalBackdrop onClick={() => setSelectedImage(null)}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<button
							className="close-btn"
							onClick={() => setSelectedImage(null)}
							type="button"
						>
							<X size={24} />
						</button>
						<Image
							src={selectedImage.url}
							alt="Full size gallery photo"
							width={600}
							height={600}
							style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
							unoptimized
						/>
					</ModalContent>
				</ModalBackdrop>
			)}
		</GalleryContainer>
	);
};

export default GalleryPage;
