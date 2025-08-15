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
			delayChildren: 0.8
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

interface HeroProps {
	name?: string;
	title?: string;
	location?: string;
}

const Hero = ({
	/* name = "Legendary Real Estate",
	title = "Luxury Real Estate Agents",
	location = "Napa & Sonoma, California" */
}: HeroProps = {}) => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoContainerRef = useRef<HTMLDivElement>(null);

	// Set background color on document body to prevent white flash
	useEffect(() => {
		// Save original background color
		const originalBgColor = document.body.style.backgroundColor;

		// Set dark background color to prevent white flash
		document.body.style.backgroundColor = "#000000";

		// Restore original background on unmount
		return () => {
			document.body.style.backgroundColor = originalBgColor;
		};
	}, []);

	// Handle video load event
	const handleVideoLoad = () => {
		setVideoLoaded(true);
	};

	// Placeholder background style - darker to prevent white flash
	const placeholderStyle = {
		background: "linear-gradient(to right, #000000, #1A1A1A)"
	};

	// Function to scroll to a section by ID
	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			{/* Transparent Navbar */}
			<div className="absolute top-0 left-0 right-0 z-40">
				<Navbar />
			</div>

			{/* Hero section (no longer fixed) */}
			<section
				id="hero"
				className="relative w-full h-screen bg-weichert-charcoal z-0">
				{/* Video Background */}
				<div
					className="absolute inset-0 overflow-hidden"
					style={!videoLoaded ? placeholderStyle : undefined}>
					{/* S3 Video */}
					<div ref={videoContainerRef} className="absolute inset-0">
						<video
							ref={videoRef}
							autoPlay
							muted
							loop
							playsInline
							onLoadedData={handleVideoLoad}
							className="absolute w-full h-full object-cover scale-110"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								objectFit: "cover",
								objectPosition: "center center"
							}}>
							<source
								src="https://redesign-media.s3.eu-north-1.amazonaws.com/michaud-rauer/581sagee.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						{/* Improved video overlay with more sophisticated gradient - using red tint */}
						<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-weichert-red/10 to-black/80"></div>
					</div>
				</div>

				{/* Content positioned at bottom with refined margins */}
				<div className="absolute inset-0 flex items-end z-30">
					<div className="mx-[5%] xl:mx-[10%] 2xl:mx-[15%] pb-28 md:pb-36 w-full max-w-4xl">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							className="relative">
							<motion.div className="space-y-6">
								<motion.h1
									variants={itemVariants}
									className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light font-serif tracking-tight leading-tight">
									Cheryl Towey
								</motion.h1>

								<motion.div
									variants={dividerVariants}
									className="h-[2px] bg-white w-20"></motion.div>
							</motion.div>

							<motion.div className="space-y-4 mt-8">
								<motion.p
									variants={itemVariants}
									className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 tracking-wide font-serif">
									Weichert Realtors
								</motion.p>

								<motion.p
									variants={itemVariants}
									className="text-lg md:text-xl text-white/90 font-light tracking-wide">
									Serving New Jersey: Hackettstown • Andover • Byram • Blairstown • Chester • Washington
								</motion.p>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="flex flex-col sm:flex-row gap-8 pt-12 md:pt-16">
								<button
									onClick={() =>
										scrollToSection("our-listings")
									}
									className="px-10 py-4 bg-secondary border-2 border-secondary text-[#222223] font-sans text-base tracking-widest uppercase transition-all duration-300 hover:bg-secondary-dark hover:border-secondary-dark hover:shadow-[0_10px_25px_rgba(255,215,0,0.4)]">
									View Listings
								</button>
								<button
									onClick={() => scrollToSection("contact")}
									className="px-10 py-4 border-2 border-white text-white bg-transparent font-sans text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#222223] hover:shadow-[0_10px_25px_rgba(255,215,0,0.3)]">
									Contact Us
								</button>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
