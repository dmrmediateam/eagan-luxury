"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/home/NavbarNew";

function isStaticImageData(
	image: string | StaticImageData
): image is StaticImageData {
	return typeof image !== "string" && "src" in image;
}

function isValidUrl(urlString?: string): boolean {
	if (!urlString) return false;
	try {
		new URL(urlString);
		return true;
	} catch {
		return false;
	}
}

interface PropertyHeroProps {
	title: string;
	price: string;
	address: string;
	image: StaticImageData | string;
	videoUrl?: string;
	videoFileUrl?: string;
	status?: "For Sale" | "Pending" | "Sold";
	representedSide?: "buyer" | "seller";
}

const PropertyHero = ({
	title,
	price,
	address,
	image,
	videoUrl,
	videoFileUrl,
	status = "For Sale",
	representedSide
}: PropertyHeroProps) => {
	const [videoReady, setVideoReady] = useState(false);
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [textVisible, setTextVisible] = useState(false);

	const videoRef = useRef<HTMLVideoElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);

	const activeVideoUrl = videoFileUrl || videoUrl;
	const hasValidVideo = isValidUrl(activeVideoUrl);

	const imageSource = isStaticImageData(image) ? image.src : image;
	const imageBlurData = isStaticImageData(image)
		? { placeholder: "blur" as const, blurDataURL: image.blurDataURL }
		: {};

	useEffect(() => {
		const videoElement = videoRef.current;
		if (hasValidVideo && videoElement) {
			videoElement.preload = "auto";
			const handleCanPlay = () => setVideoReady(true);

			if (videoElement.readyState >= 3) {
				handleCanPlay();
			} else {
				videoElement.addEventListener("canplay", handleCanPlay);
			}

			return () => {
				videoElement.removeEventListener("canplay", handleCanPlay);
			};
		}
	}, [hasValidVideo, activeVideoUrl]);

	useEffect(() => {
		if (hasValidVideo && videoReady && videoRef.current) {
			const videoElement = videoRef.current;
			const playVideo = () => {
				videoElement.play().catch((error: unknown) => {
					console.error("Error playing video:", error);
					setVideoLoaded(true);
				});
			};

			playVideo();

			const handleUserInteraction = () => {
				if (videoElement.paused) {
					playVideo();
				}
				document.removeEventListener(
					"touchstart",
					handleUserInteraction
				);
				document.removeEventListener("click", handleUserInteraction);
			};

			document.addEventListener("touchstart", handleUserInteraction);
			document.addEventListener("click", handleUserInteraction);

			const timer = setTimeout(() => {
				setVideoLoaded(true);
			}, 100);

			return () => {
				clearTimeout(timer);
				document.removeEventListener(
					"touchstart",
					handleUserInteraction
				);
				document.removeEventListener("click", handleUserInteraction);
			};
		}
	}, [hasValidVideo, videoReady]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setTextVisible(true);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.4 }
		}
	};
	const itemVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
		}
	};
	const dividerVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: "6rem",
			opacity: 1,
			transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 }
		}
	};

	const mediaContainerStyle =
		"absolute inset-0 transition-opacity duration-1000 ease-in-out";

	return (
		<section
			className="relative h-screen w-full flex flex-col bg-[#121212]"
			style={{ contain: "layout paint" }}>
			<Navbar />
			<div
				className="absolute inset-0 overflow-hidden bg-[#121212]"
				style={{ contain: "strict" }}>
				<div className="absolute inset-0 bg-gradient-to-r from-[#121212] to-[#1a1a1a] opacity-50" />

				<div
					className={`${mediaContainerStyle} ${videoLoaded && hasValidVideo ? "opacity-0" : "opacity-100"}`}>
					{imageSource ? (
						<Image
							src={imageSource}
							alt={`${title} - Property main image`}
							fill
							priority
							className="object-cover"
							quality={80}
							sizes="100vw"
							{...imageBlurData}
						/>
					) : (
						<div className="w-full h-full bg-gray-800" />
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
				</div>

				{hasValidVideo && (
					<div
						ref={videoContainerRef}
						className={`${mediaContainerStyle} ${videoLoaded ? "opacity-100" : "opacity-0"}`}>
						<video
							ref={videoRef}
							className="w-full h-full object-cover"
							playsInline
							muted
							loop
							preload="auto"
							poster={imageSource}>
							<source src={activeVideoUrl} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
					</div>
				)}
			</div>

			<div className="relative z-10 px-[5%] lg:px-[10%] xl:px-[15%] flex flex-col items-start justify-end w-full h-full text-white pb-16 md:pb-24">
				<motion.div
					className="w-full"
					variants={containerVariants}
					initial="hidden"
					animate={textVisible ? "visible" : "hidden"}>
					<div className="flex flex-wrap gap-3 mb-5">
						<motion.div
							className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md text-xs uppercase tracking-wider font-medium shadow-sm"
							variants={itemVariants}>
							{status}
						</motion.div>
						{representedSide && (
							<motion.div
								className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md text-xs uppercase tracking-wider font-medium shadow-sm"
								variants={itemVariants}>
								{status === "Sold"
									? `Represented ${representedSide === "buyer" ? "Buyer" : "Seller"}`
									: `Representing ${representedSide === "buyer" ? "Buyer" : "Seller"}`}
							</motion.div>
						)}
					</div>
					<motion.h1
						className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight leading-tight text-white drop-shadow-sm"
						variants={itemVariants}>
						{title}
					</motion.h1>
					<motion.div
						className="h-[1.5px] bg-white/40 mb-6 w-24"
						variants={dividerVariants}
					/>

					<motion.p
						className="text-xl md:text-2xl lg:text-3xl mb-2 font-extralight tracking-wide text-white"
						variants={itemVariants}>
						{price}
					</motion.p>
					<motion.p
						className="text-base md:text-lg text-white/80 mb-8 font-light tracking-wide"
						variants={itemVariants}>
						{address}
					</motion.p>
					<motion.div
						className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
						variants={itemVariants}>
						<button className="flex-1 px-6 py-3.5 bg-white/90 text-gray-900 rounded-none text-sm font-medium tracking-wide uppercase hover:bg-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md">
							Schedule Viewing
						</button>
						<button className="flex-1 px-6 py-3.5 bg-transparent border border-white/50 text-white rounded-none text-sm font-medium tracking-wide uppercase hover:bg-white/10 hover:border-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900">
							Contact Agent
						</button>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
				initial={{ opacity: 0 }}
				animate={{
					opacity: textVisible ? 0.7 : 0,
					y: textVisible ? [0, 8, 0] : 0
				}}
				transition={{
					opacity: { duration: 0.5, delay: 1.0 },
					y: {
						duration: 1.8,
						repeat: Infinity,
						repeatType: "loop",
						delay: 1.0
					}
				}}
				onClick={() =>
					window.scrollTo({
						top: window.innerHeight,
						behavior: "smooth"
					})
				}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="36"
					height="36"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="opacity-80 hover:opacity-100 transition-opacity">
					<path d="M12 5v14M5 12l7 7 7-7" />
				</svg>
			</motion.div>
		</section>
	);
};

export default PropertyHero;
