"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function isStaticImageData(
	image: string | StaticImageData
): image is StaticImageData {
	return typeof image !== "string" && "src" in image;
}

function isValidUrl(urlString: string): boolean {
	try {
		new URL(urlString);
		return true;
	} catch {
		return false;
	}
}

interface PropertyHeroNewProps {
	title: string;
	price: string;
	address: string;
	image: StaticImageData | string;
	video?: string;
	status?: "For Sale" | "Pending" | "Sold";
}

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const dividerVariants = {
	hidden: { width: 0, opacity: 0 },
	visible: {
		width: "6rem",
		opacity: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
	}
};

const PropertyHeroNew = ({
	title,
	price,
	address,
	image,
	video,
	status = "For Sale"
}: PropertyHeroNewProps) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const [imageError, setImageError] = useState(false);

	const hasValidVideo = video && isValidUrl(video);
	const imageSource = isStaticImageData(image) ? image.src : image;
	const imageBlurData = isStaticImageData(image)
		? { placeholder: "blur" as const, blurDataURL: image.blurDataURL }
		: { placeholder: "empty" as const };

	// Handle image load with animation optimization
	const handleImageLoad = () => {
		requestAnimationFrame(() => {
			setIsImageLoaded(true);
		});
	};

	const handleImageError = () => {
		setImageError(true);
	};

	// Video playback logic - add after image loads
	useEffect(() => {
		if (hasValidVideo && isImageLoaded) {
			const videoElement = document.getElementById(
				"propertyVideo"
			) as HTMLVideoElement;
			if (videoElement) {
				videoElement.addEventListener("loadeddata", () => {
					videoElement
						.play()
						.then(() => {
							setShowVideo(true);
						})
						.catch(() => {
							// Show image if autoplay fails
							console.warn("Video autoplay prevented by browser");
						});
				});

				videoElement.load();
			}
		}
	}, [hasValidVideo, isImageLoaded]);

	// Get appropriate status badge color
	const getStatusBadgeClass = () => {
		switch (status) {
			case "Sold":
				return "bg-zinc-700/90 text-white";
			case "Pending":
				return "bg-amber-500/90 text-white";
			case "For Sale":
			default:
				return "bg-emerald-600/90 text-white";
		}
	};

	return (
		<section className="relative h-screen w-full bg-zinc-100 overflow-hidden">
			{/* Media background */}
			<div className="absolute inset-0 bg-zinc-900">
				{/* Persistent placeholder */}
				<div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-800" />

				{/* Media Layer */}
				<AnimatePresence mode="wait">
					{!hasValidVideo || !showVideo ? (
						<motion.div
							key="static-image"
							className="absolute inset-0"
							initial={{ opacity: 0 }}
							animate={
								isImageLoaded ? { opacity: 1 } : { opacity: 0 }
							}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1]
							}}>
							{!imageError && imageSource ? (
								<Image
									src={imageSource}
									alt={`${title} - Property main image`}
									fill
									priority
									className="object-cover"
									quality={90}
									onLoad={handleImageLoad}
									onError={handleImageError}
									sizes="100vw"
									{...imageBlurData}
									style={{
										objectFit: "cover",
										objectPosition: "center"
									}}
								/>
							) : (
								<div className="w-full h-full bg-zinc-800 flex items-center justify-center">
									<p className="text-white text-lg">
										Image not available
									</p>
								</div>
							)}
							<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
						</motion.div>
					) : (
						<motion.div
							key="video"
							className="absolute inset-0"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1]
							}}>
							<video
								id="propertyVideo"
								className="w-full h-full object-cover"
								playsInline
								muted
								loop
								preload="metadata"
								poster={imageSource}>
								<source src={video} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Content overlay */}
			<div className="absolute inset-0 z-10 flex items-center justify-center">
				<motion.div
					className="relative z-10 px-[5%] pt-24 md:pt-0 flex flex-col items-center justify-center w-full h-full text-white"
					variants={containerVariants}
					initial="hidden"
					animate={isImageLoaded ? "visible" : "hidden"}>
					<motion.div
						variants={itemVariants}
						className={`px-4 py-2 mb-4 text-sm font-medium ${getStatusBadgeClass()}`}>
						{status}
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="text-4xl md:text-5xl lg:text-6xl text-center font-light mb-4 max-w-4xl tracking-wider">
						{title}
					</motion.h1>

					<motion.div
						variants={dividerVariants}
						className="h-[1px] bg-white/60 mb-6"
					/>

					<motion.div
						variants={itemVariants}
						className="text-xl md:text-2xl text-center text-white/90 font-extralight mb-2">
						{price}
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="text-base md:text-lg text-center text-white/80 font-extralight">
						{address}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PropertyHeroNew;
