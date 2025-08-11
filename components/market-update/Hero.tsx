"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/home/NavbarNew";
import { motion } from "framer-motion";
import Link from "next/link";
import { config } from "@/config";

// Custom smooth scroll function with adjustable duration
const smoothScrollTo = (targetPosition: number) => {
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	let startTime: number | null = null;

	// Calculate dynamic duration based on distance
	const absoluteDistance = Math.abs(distance);
	const dynamicDuration = Math.min(Math.max(500, absoluteDistance / 2), 1500);

	const scrollDuration = dynamicDuration;

	function animation(currentTime: number) {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / scrollDuration, 1);

		// Easing function: easeInOutQuad for smoother acceleration and deceleration
		const easeInOutQuad = (t: number) =>
			t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

		window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

		if (timeElapsed < scrollDuration) {
			requestAnimationFrame(animation);
		}
	}

	requestAnimationFrame(animation);
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
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
		width: "8rem",
		opacity: 0.8,
		transition: {
			duration: 1.2,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const Hero = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [videoReady, setVideoReady] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);
	const heroRef = useRef<HTMLElement>(null);

	// Use the next property from config (franz8507)
	const propertyVideo = config.properties.franz8507;

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

	const scrollToContent = () => {
		// Get hero height and scroll just past it
		if (heroRef.current) {
			const heroHeight = heroRef.current.offsetHeight;
			smoothScrollTo(heroHeight);
		}
	};

	return (
		<section
			ref={heroRef}
			id="hero"
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
						backgroundImage: `url(${propertyVideo.thumb})`,
						backgroundSize: "cover",
						backgroundPosition: "center center",
						width: "100%",
						height: "100%"
					}}>
					{/* Simple uniform darkening overlay */}
					<div className="absolute inset-0 bg-black/40"></div>
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
						<source src={propertyVideo.vid} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					{/* Simple uniform darkening overlay */}
					<div className="absolute inset-0 bg-black/40"></div>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 px-[5%] lg:px-[10%] xl:px-[15%] flex flex-col items-start justify-start w-full h-full text-white">
				<motion.div
					className="mt-auto mb-16 md:mb-24 w-full"
					variants={containerVariants}
					initial="hidden"
					animate="visible">
					<motion.h1
						className="text-2xl sm:text-3xl md:text-4xl mb-3 tracking-tight"
						variants={itemVariants}>
						Market Update
					</motion.h1>

					<motion.div
						className="h-[1px] bg-white mb-4 w-24"
						variants={dividerVariants}></motion.div>

					<motion.p
						className="text-sm md:text-base mb-1 font-light"
						variants={itemVariants}>
						Legendary Real Estate
					</motion.p>

					<motion.p
						className="text-sm md:text-base font-light text-white/80 mb-6"
						variants={itemVariants}>
						Lake Geneva area Real Estate Trends
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-3 w-full"
						variants={itemVariants}>
						<motion.button
							onClick={scrollToContent}
							className="px-6 sm:px-8 py-3 bg-transparent border border-white text-white rounded-none text-sm sm:text-base tracking-wider font-light uppercase cursor-pointer w-full text-center sm:w-auto"
							whileHover={
								{
									backgroundColor: "rgba(255, 255, 255, 0.1)",
									transition: { duration: 0.3 }
								} as const
							}
							whileTap={{ scale: 0.98 } as const}>
							Explore
						</motion.button>
						<motion.button
							onClick={() => {
								const contactSection =
									document.getElementById("contact");
								if (contactSection) {
									smoothScrollTo(contactSection.offsetTop);
								}
							}}
							className="px-6 sm:px-8 py-3 bg-white/10 sm:bg-transparent border sm:border-l border-white/30 text-white sm:text-white/80 rounded-none text-sm sm:text-base tracking-wider font-light uppercase hover:text-white transition-colors duration-300 w-full text-center sm:w-auto"
							whileHover={
								{
									x: 5,
									transition: { duration: 0.3 }
								} as const
							}
							whileTap={{ scale: 0.98 } as const}>
							<Link href="#contact" className="sm:ml-2">
								Contact Us
							</Link>
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
