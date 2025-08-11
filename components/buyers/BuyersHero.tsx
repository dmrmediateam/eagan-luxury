"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/home/NavbarNew";
import { motion } from "framer-motion";

// Animation variants for text elements with improved luxury timing
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.6
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.2,
			ease: [0.16, 1, 0.3, 1] // Luxury smooth ease
		}
	}
};

const dividerVariants = {
	hidden: { width: 0, opacity: 0 },
	visible: {
		width: "120px",
		opacity: 1,
		transition: {
			duration: 1,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const BuyersHero = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [videoReady, setVideoReady] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);

	// Set background color on document body to prevent white flash
	useEffect(() => {
		// Save original background color
		const originalBgColor = document.body.style.backgroundColor;

		// Set dark background color to prevent white flash
		document.body.style.backgroundColor = "#121212";

		// Restore original background on unmount
		return () => {
			document.body.style.backgroundColor = originalBgColor;
		};
	}, []);

	// Effect to ensure video and image are positioned identically
	useEffect(() => {
		const syncPositioning = () => {
			if (
				videoRef.current &&
				videoContainerRef.current &&
				imageContainerRef.current
			) {
				// Ensure both containers have identical dimensions and positioning
				const containerStyle = {
					width: "100%",
					height: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					overflow: "hidden"
				};

				// Apply unified styles to both containers
				Object.assign(videoContainerRef.current.style, containerStyle);
				Object.assign(imageContainerRef.current.style, containerStyle);
			}
		};

		syncPositioning();

		// Also sync on resize to maintain consistency
		window.addEventListener("resize", syncPositioning);
		return () => window.removeEventListener("resize", syncPositioning);
	}, []);

	useEffect(() => {
		const videoElement = videoRef.current;

		if (videoElement) {
			// Preload the video
			videoElement.preload = "auto";

			const handleCanPlay = () => {
				// Mark video as ready to play
				setVideoReady(true);
			};

			// Check if video is already loaded
			if (videoElement.readyState >= 3) {
				handleCanPlay();
			} else {
				videoElement.addEventListener("canplay", handleCanPlay);
			}

			return () => {
				videoElement.removeEventListener("canplay", handleCanPlay);
			};
		}
	}, []);

	// Separate effect to handle the transition once video is ready
	useEffect(() => {
		if (videoReady && videoRef.current) {
			// For iOS, we need to ensure video plays on user interaction
			const playVideo = () => {
				if (videoRef.current) {
					videoRef.current.play().catch((error: unknown) => {
						console.error("Error playing video:", error);
						// If autoplay fails, we'll still show the video element
						// and let the poster image display
						setVideoLoaded(true);
					});
				}
			};

			// Try to play the video
			playVideo();

			// Add a click event listener to the document to play video on first interaction
			// This helps with iOS restrictions
			const handleUserInteraction = () => {
				playVideo();
				document.removeEventListener(
					"touchstart",
					handleUserInteraction
				);
				document.removeEventListener("click", handleUserInteraction);
			};

			document.addEventListener("touchstart", handleUserInteraction);
			document.addEventListener("click", handleUserInteraction);

			// Use a longer delay for the transition to ensure the video is fully rendered
			// before showing it, which helps create a more seamless transition
			setTimeout(() => {
				setVideoLoaded(true);
			}, 100);

			return () => {
				document.removeEventListener(
					"touchstart",
					handleUserInteraction
				);
				document.removeEventListener("click", handleUserInteraction);
			};
		}
	}, [videoReady]);

	// Placeholder background style - darker to prevent white flash
	const placeholderStyle = {
		background: "linear-gradient(to right, #121212, #1a1a1a)"
	};

	return (
		<section
			id="buyers-hero"
			className="relative h-[60vh] md:h-[70vh] w-full flex flex-col bg-[#121212]">
			<Navbar />

			{/* Video Background with Thumbnail */}
			<div
				className="absolute inset-0 overflow-hidden"
				style={placeholderStyle}>
				{/* Thumbnail Image (shown until video loads) */}
				<div
					ref={imageContainerRef}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						videoLoaded ? "opacity-0" : "opacity-100"
					}`}
					style={{
						backgroundSize: "cover",
						backgroundPosition: "center center",
						width: "100%",
						height: "100%"
					}}>
					{/* Improved gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
				</div>

				{/* Video (hidden until loaded) */}
				<div
					ref={videoContainerRef}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						videoLoaded ? "opacity-100" : "opacity-0"
					}`}>
					<video
						ref={videoRef}
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						data-webkit-playsinline="true"
						data-x5-playsinline="true"
						style={{
							position: "absolute",
							width: "100%",
							height: "100%",
							objectFit: "cover"
						}}>
						<source
							src="https://redesign-media.s3.eu-north-1.amazonaws.com/michaud-rauer/581sagee.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					{/* Improved gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 px-[5%] lg:px-[10%] xl:px-[15%] flex flex-col items-start justify-start w-full h-full text-white">
				<motion.div
					className="mt-auto mb-16 md:mb-24 w-full max-w-4xl"
					variants={containerVariants}
					initial="hidden"
					animate="visible">
					<motion.h1
						className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight font-serif font-light"
						variants={itemVariants}>
						Your Dream Home Is Here
					</motion.h1>

					<motion.div
						className="h-[1.5px] bg-[#B08D57] mb-6 w-24"
						variants={dividerVariants}></motion.div>

					<motion.p
						className="text-xl md:text-2xl mb-2 font-light font-serif tracking-wide"
						variants={itemVariants}>
						Let&apos;s find it together
					</motion.p>

					<motion.p
						className="text-base md:text-lg text-white/80 mb-8 tracking-wide font-light max-w-2xl"
						variants={itemVariants}>
						From our first meeting to the keys in your hand,
						we&apos;re with you every step of the way.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-6 w-full"
						variants={itemVariants}>
						<a
							href="#search-homes"
							className="px-10 py-4 border border-white text-white text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">
							Search for Homes
						</a>
						<a
							href="#sell-too"
							className="px-10 py-4 border border-[#B08D57] text-[#B08D57] text-base tracking-widest uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-white hover:shadow-[0_10px_25px_rgba(176,141,87,0.3)]">
							Need to Sell, Too?
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default BuyersHero;
