"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
	Loader2,
	ChevronLeft,
	ChevronRight,
	X,
	ChevronDown,
	ChevronUp
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

interface GalleryImage {
	thumbnailSrc: string;
	fullSrc: string;
	alt: string;
}

interface PropertyGalleryNewProps {
	images: GalleryImage[];
	className?: string;
}

// Animation variants for the grid container
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.15,
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

// Animation variants for individual grid items
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

// Animation for expanding images (used for images beyond the first 12)
const expandVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1],
			delay: i * 0.1 // Stagger effect
		}
	}),
	exit: {
		opacity: 0,
		y: -20,
		scale: 0.95,
		transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
	}
};

const imageVariants = {
	hover: {
		scale: 1.05,
		transition: {
			duration: 0.6,
			ease: [0.25, 1, 0.5, 1]
		}
	}
};

const lightboxVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const slideRightVariants = {
	enter: { x: 20, opacity: 0 },
	center: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
	},
	exit: {
		x: -20,
		opacity: 0,
		transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
	}
};

const slideLeftVariants = {
	enter: { x: -20, opacity: 0 },
	center: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
	},
	exit: {
		x: 20,
		opacity: 0,
		transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
	}
};

const thumbnailVariants = {
	initial: { opacity: 0.6, scale: 0.95 },
	active: {
		opacity: 1,
		scale: 1,
		borderColor: "rgba(255, 255, 255, 1)",
		boxShadow: "0 0 0 2px rgba(255, 255, 255, 1)"
	},
	hover: {
		opacity: 0.9,
		scale: 0.98,
		transition: { duration: 0.2 }
	}
};

const PropertyGalleryNew = ({ images, className }: PropertyGalleryNewProps) => {
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(
		null
	);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [direction, setDirection] = useState<number>(0);
	const [isLightboxLoading, setIsLightboxLoading] = useState<boolean>(false);
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [showThumbnails, setShowThumbnails] = useState<boolean>(true);
	const initialDisplayCount = 12;
	const thumbnailsRef = useRef<HTMLDivElement>(null);

	const openLightbox = (image: GalleryImage, index: number) => {
		setSelectedImage(image);
		setCurrentIndex(index);
		setDirection(0);
		setIsLightboxLoading(true);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setSelectedImage(null);
		document.body.style.overflow = "";
	};

	const changeLightboxImage = (newIndex: number, newDirection: number) => {
		if (!images || images.length === 0) return;
		const validIndex = (newIndex + images.length) % images.length;
		setDirection(newDirection);
		setCurrentIndex(validIndex);
		setSelectedImage(images[validIndex]);
		setIsLightboxLoading(true);

		// Scroll the thumbnail into view
		if (thumbnailsRef.current) {
			const thumbnailElement = thumbnailsRef.current.children[validIndex];
			if (thumbnailElement) {
				thumbnailElement.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center"
				});
			}
		}
	};

  const nextImage = useCallback(
		(e?: React.MouseEvent) => {
			e?.stopPropagation();
			changeLightboxImage(currentIndex + 1, 1);
		},
    [currentIndex, images, changeLightboxImage]
	);

  const prevImage = useCallback(
		(e?: React.MouseEvent) => {
			e?.stopPropagation();
			changeLightboxImage(currentIndex - 1, -1);
		},
    [currentIndex, images, changeLightboxImage]
	);

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!selectedImage) return;
			if (e.key === "Escape") {
				closeLightbox();
			} else if (e.key === "ArrowRight") {
				nextImage();
			} else if (e.key === "ArrowLeft") {
				prevImage();
			} else if (e.key === "t") {
				setShowThumbnails((prev) => !prev);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [selectedImage, nextImage, prevImage]);

	// Handle swipe gestures for mobile
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (!touchStartX.current || !touchEndX.current) return;

		const diffX = touchStartX.current - touchEndX.current;
		const threshold = 50; // Minimum swipe distance

		if (diffX > threshold) {
			// Swiped left, go to next image
			nextImage();
		} else if (diffX < -threshold) {
			// Swiped right, go to previous image
			prevImage();
		}

		// Reset values
		touchStartX.current = null;
		touchEndX.current = null;
	};

	if (!images || images.length === 0) {
		return null;
	}

	const GridImageItem = React.memo(
		({
			image,
			index,
			onClick,
			isExpanding
		}: {
			image: GalleryImage;
			index: number;
			onClick: () => void;
			isExpanding?: boolean;
		}) => {
			const [isGridLoading, setIsGridLoading] = useState(true);

			return (
				<motion.div
					key={`image-${image.thumbnailSrc}-${index}`}
					className="relative aspect-[4/3] cursor-pointer overflow-hidden group bg-gray-200 shadow-sm"
					variants={isExpanding ? expandVariants : itemVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					onClick={onClick}
					whileHover={{
						y: -5,
						transition: { duration: 0.3, ease: "easeOut" }
					}}
					layout
					custom={index - initialDisplayCount} // For staggered animation
				>
					<motion.div
						className="w-full h-full"
						initial={{ scale: 1 }}
						whileHover="hover"
						variants={imageVariants}>
						<div
							className={cn(
								"relative w-full h-full",
								isGridLoading ? "animate-pulse" : ""
							)}>
							<Image
								src={image.thumbnailSrc}
								alt={image.alt}
								fill
								className={cn(
									"object-cover transition-opacity duration-500 ease-in-out",
									isGridLoading ? "opacity-0" : "opacity-100"
								)}
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								quality={50}
								priority={index < initialDisplayCount}
								loading={
									index >= initialDisplayCount
										? "lazy"
										: undefined
								}
								onLoad={() => setIsGridLoading(false)}
							/>
						</div>
					</motion.div>
					<motion.div
						className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
					/>
				</motion.div>
			);
		}
	);
	GridImageItem.displayName = "GridImageItem";

	return (
		<div className={cn("relative py-12 lg:py-24", className)}>
			<SectionTitle title="Property Gallery" className="mb-20" />
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ margin: "-50px" }}
				layout
				transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
				{/* First 12 images, always rendered with stable animation */}
				{images.slice(0, initialDisplayCount).map((image, index) => (
					<GridImageItem
						key={`grid-${image.thumbnailSrc}-${index}`}
						image={image}
						index={index}
						onClick={() => openLightbox(image, index)}
					/>
				))}
				{/* Additional images, animated only when expanded */}
				<AnimatePresence>
					{isExpanded &&
						images
							.slice(initialDisplayCount)
							.map((image, index) => (
								<GridImageItem
									key={`expanded-${image.thumbnailSrc}-${index}`}
									image={image}
									index={index + initialDisplayCount}
									onClick={() =>
										openLightbox(
											image,
											index + initialDisplayCount
										)
									}
									isExpanding
								/>
							))}
				</AnimatePresence>
			</motion.div>

			{/* Show More/Show Less Button with Gradient Overlay */}
			{images.length > initialDisplayCount && (
				<div className="relative mt-6">
					{!isExpanded && (
						<motion.div
							className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white dark:to-slate-900 pointer-events-none"
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						/>
					)}
					<motion.div
						className="flex justify-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}>
						<motion.button
							className="px-6 py-3 bg-transparent border border-zinc-800 text-zinc-800 dark:border-zinc-200 dark:text-zinc-200 rounded-md text-sm tracking-wider font-medium uppercase cursor-pointer transition-all duration-300 flex items-center gap-2 z-10 hover:bg-zinc-800 hover:text-white"
							onClick={() => setIsExpanded(!isExpanded)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							layout>
							<AnimatePresence mode="wait">
								{isExpanded ? (
									<motion.div
										key="show-less"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-2">
										<ChevronUp size={18} />
										Show Less
									</motion.div>
								) : (
									<motion.div
										key="show-more"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-2">
										<ChevronDown size={18} />
										Show More (
										{images.length -
											initialDisplayCount}{" "}
										more)
									</motion.div>
								)}
							</AnimatePresence>
						</motion.button>
					</motion.div>
				</div>
			)}

			{/* Lightbox */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						key="lightbox"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={lightboxVariants}
						className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md"
						onClick={closeLightbox}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						<motion.div
							className="relative w-[95vw] h-[80vh] md:h-[75vh] flex items-center justify-center"
							onClick={(e) => e.stopPropagation()}
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							transition={{
								duration: 0.3,
								ease: [0.16, 1, 0.3, 1]
							}}>
							<AnimatePresence>
								{isLightboxLoading && (
									<motion.div
										key="lightbox-loader"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="absolute inset-0 flex items-center justify-center z-10">
										<Loader2 className="w-12 h-12 text-white animate-spin" />
									</motion.div>
								)}
							</AnimatePresence>
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={currentIndex}
									className="relative w-full h-full"
									initial="enter"
									animate="center"
									exit="exit"
									variants={
										direction >= 0
											? slideRightVariants
											: slideLeftVariants
									}
									transition={{
										x: {
											type: "spring",
											stiffness: 300,
											damping: 30
										},
										opacity: { duration: 0.2 }
									}}>
									<div
										className={cn(
											"relative w-full h-full",
											isLightboxLoading
												? "opacity-0"
												: "opacity-100 transition-opacity duration-300"
										)}>
										<Image
											src={selectedImage.fullSrc}
											alt={selectedImage.alt}
											fill
											className="object-contain"
											sizes="95vw"
											quality={85}
											priority
											onLoad={() =>
												setIsLightboxLoading(false)
											}
										/>
									</div>
								</motion.div>
							</AnimatePresence>
							{images.length > 1 && (
								<>
									<motion.button
										className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full text-white z-20 transition-all duration-200"
										onClick={prevImage}
										initial={{ scale: 1 }}
										whileTap={{ scale: 0.95 }}
										transition={{ duration: 0.2 }}>
										<ChevronLeft size={24} />
									</motion.button>
									<motion.button
										className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full text-white z-20 transition-all duration-200"
										onClick={nextImage}
										initial={{ scale: 1 }}
										whileTap={{ scale: 0.95 }}
										transition={{ duration: 0.2 }}>
										<ChevronRight size={24} />
									</motion.button>
								</>
							)}
							<motion.button
								className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full text-white z-20 transition-all duration-200"
								onClick={closeLightbox}
								initial={{ scale: 1 }}
								whileHover={{ rotate: 90 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.3 }}>
								<X size={24} />
							</motion.button>

							{/* Thumbnail toggle button */}
							{images.length > 1 && (
								<motion.button
									className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-20 transition-colors"
									onClick={(e) => {
										e.stopPropagation();
										setShowThumbnails(!showThumbnails);
									}}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.2 }}>
									{showThumbnails ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<rect
												x="3"
												y="3"
												width="18"
												height="18"
												rx="2"
												ry="2"
											/>
											<rect
												x="7"
												y="7"
												width="3"
												height="3"
											/>
											<rect
												x="14"
												y="7"
												width="3"
												height="3"
											/>
											<rect
												x="7"
												y="14"
												width="3"
												height="3"
											/>
											<rect
												x="14"
												y="14"
												width="3"
												height="3"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<rect
												x="3"
												y="3"
												width="18"
												height="18"
												rx="2"
												ry="2"
											/>
											<line
												x1="8"
												y1="12"
												x2="16"
												y2="12"
											/>
											<line
												x1="8"
												y1="7"
												x2="16"
												y2="7"
											/>
											<line
												x1="8"
												y1="17"
												x2="16"
												y2="17"
											/>
										</svg>
									)}
								</motion.button>
							)}

							<div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-md z-20">
								{currentIndex + 1} / {images.length}
							</div>
						</motion.div>

						{/* Thumbnails section */}
						<AnimatePresence>
							{showThumbnails && images.length > 1 && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{ duration: 0.3 }}
									className="w-full mt-2 md:mt-4 px-4 z-[999]"
									onClick={(e) => e.stopPropagation()}>
									<div
										ref={thumbnailsRef}
										className="flex items-center gap-2 overflow-x-auto pb-4 max-w-[95vw] mx-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black/30">
										{images.map((img, idx) => (
											<motion.div
												key={`thumb-${img.thumbnailSrc}-${idx}`}
												className={cn(
													"relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-300",
													currentIndex === idx
														? "border-white"
														: "border-transparent"
												)}
												variants={thumbnailVariants}
												initial="initial"
												animate={
													currentIndex === idx
														? "active"
														: "initial"
												}
												whileHover="hover"
												onClick={() => {
													changeLightboxImage(
														idx,
														idx > currentIndex
															? 1
															: -1
													);
												}}>
												<Image
													src={img.thumbnailSrc}
													alt={`Thumbnail ${idx + 1}`}
													fill
													className="object-cover"
													sizes="80px"
													quality={30}
												/>
												{currentIndex === idx && (
													<div className="absolute inset-0 bg-white/10" />
												)}
											</motion.div>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PropertyGalleryNew;
