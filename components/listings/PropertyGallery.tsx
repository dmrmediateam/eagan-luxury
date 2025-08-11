"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PropertyGalleryProps {
	images: string[];
}

// Animation variants
const logoVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const headingVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	// Memoized navigation functions
	const openModal = useCallback((index: number) => {
		setSelectedImage(index);
		document.body.style.overflow = "hidden";
	}, []);

	const closeModal = useCallback(() => {
		setSelectedImage(null);
		document.body.style.overflow = "auto";
	}, []);

	const nextImage = useCallback(() => {
		if (selectedImage !== null) {
			setSelectedImage((prev: number | null) => {
				// Since we know prev is not null due to the guard, we can safely cast or use a default
				return prev !== null
					? (prev + 1) % images.length
					: selectedImage;
			});
		}
	}, [selectedImage, images.length]);

	const prevImage = useCallback(() => {
		if (selectedImage !== null) {
			setSelectedImage((prev: number | null) => {
				// Since we know prev is not null due to the guard, we can safely cast or use a default
				return prev !== null
					? (prev - 1 + images.length) % images.length
					: selectedImage;
			});
		}
	}, [selectedImage, images.length]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedImage === null) return;

			switch (e.key) {
				case "ArrowRight":
					nextImage();
					break;
				case "ArrowLeft":
					prevImage();
					break;
				case "Escape":
					closeModal();
					break;
				default:
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown, { passive: true });
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedImage, nextImage, prevImage, closeModal]);

	if (!images || images.length === 0) return null;

	// Grid layout
	const getGridClass = (index: number) => {
		const patterns = [
			"md:col-span-8 md:row-span-2 h-[400px] md:h-[600px]",
			"md:col-span-4 md:row-span-1 h-[280px] md:h-[290px]",
			"md:col-span-4 md:row-span-1 h-[280px] md:h-[290px]",
			"md:col-span-5 md:row-span-1 h-[300px] md:h-[350px]",
			"md:col-span-3 md:row-span-1 h-[200px] md:h-[350px]",
			"md:col-span-4 md:row-span-1 h-[250px] md:h-[350px]",
			"md:col-span-3 md:row-span-1 h-[220px] md:h-[300px]",
			"md:col-span-6 md:row-span-1 h-[300px] md:h-[300px]",
			"md:col-span-3 md:row-span-1 h-[220px] md:h-[300px]"
		];
		return patterns[index % patterns.length];
	};

	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					<div className="flex flex-col items-center justify-center">
						<motion.div
							variants={logoVariants}
							className="mb-8 w-16 h-16">
							<Image
								src="/logos/keylogo.png"
								alt="Key Icon"
								width={64}
								height={64}
								className="w-full h-full object-contain"
							/>
						</motion.div>
						<motion.h2
							variants={headingVariants}
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							PROPERTY GALLERY
						</motion.h2>
					</div>

					{/* Staggered Grid Gallery */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{images.map((image, index) => (
							<motion.div
								key={`gallery-${index}`}
								className={`relative overflow-hidden ${getGridClass(index)}`}
								variants={itemVariants}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
								onClick={() => openModal(index)}>
								<div className="relative h-full w-full cursor-pointer group">
									<Image
										src={image}
										alt={`Property image ${index + 1}`}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
										loading={index < 3 ? "eager" : "lazy"}
										quality={80}
										placeholder="blur"
										blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahAQAI/QNHMh1yLwAAAABJRU5ErkJggg=="
										decoding="async"
									/>
									<div className="absolute inset-0 bg-black/10 transition-all duration-300 ease-in-out group-hover:bg-black/0" />
									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="bg-white/90 p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-zinc-700">
												<circle cx="11" cy="11" r="8" />
												<line
													x1="21"
													y1="21"
													x2="16.65"
													y2="16.65"
												/>
												<line
													x1="11"
													y1="8"
													x2="11"
													y2="14"
												/>
												<line
													x1="8"
													y1="11"
													x2="14"
													y2="11"
												/>
											</svg>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>

			{/* Fullscreen Image Modal */}
			<AnimatePresence>
				{selectedImage !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
						onClick={closeModal}>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="relative w-[90vw] h-[90vh] max-w-7xl"
							onClick={(e) => e.stopPropagation()}>
							<Image
								src={images[selectedImage]}
								alt={`Property image ${selectedImage + 1}`}
								fill
								className="object-contain"
								sizes="90vw"
								quality={90}
								priority={false}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahAQAI/QNHMh1yLwAAAABJRU5ErkJggg=="
								decoding="async"
							/>
							<button
								className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors duration-300"
								onClick={closeModal}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<button
								className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-300"
								onClick={(e) => {
									e.stopPropagation();
									prevImage();
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button
								className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-300"
								onClick={(e) => {
									e.stopPropagation();
									nextImage();
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
							<div className="absolute top-4 left-4 bg-black/50 px-3 py-2 rounded text-white text-sm font-light">
								{selectedImage + 1}/{images.length}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PropertyGallery;
