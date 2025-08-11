"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/home/NavbarNew";

interface CommunityHeroProps {
	title: string;
	county: string;
	image: {
		url: string;
		alt: string;
	};
}

const CommunityHero = ({ title, county, image }: CommunityHeroProps) => {
	// Animation variants for text elements
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.5
			}
		}
	};

	const itemVariants = {
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

	const dividerVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: "6rem",
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeInOut"
			}
		}
	};

	return (
		<section className="relative h-screen w-full flex flex-col bg-[#121212]">
			<Navbar />

			{/* Background Image */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src={image.url}
						alt={image.alt || "Community background"}
						fill
						priority={true}
						className="object-cover"
						quality={90}
						sizes="100vw"
						style={{
							objectFit: "cover",
							transform: "translate3d(0, 0, 0)",
							backfaceVisibility: "hidden"
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
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
						className="text-4xl sm:text-5xl md:text-7xl font-light mb-4 tracking-tight"
						variants={itemVariants}>
						<span className="block font-light">{title}</span>
					</motion.h1>

					<motion.div
						className="h-[1px] bg-white w-12 mb-6"
						variants={dividerVariants}></motion.div>

					<motion.p
						className="text-lg md:text-xl mb-8 font-light max-w-3xl leading-relaxed"
						variants={itemVariants}>
						{county} County
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 w-full"
						variants={itemVariants}>
						<motion.button
							className="px-8 py-3 bg-white text-zinc-800 rounded-none text-sm tracking-widest font-light uppercase cursor-pointer w-full text-center sm:w-auto hover:bg-zinc-100 transition-colors"
							whileTap={{ scale: 0.98 }}>
							EXPLORE THIS COMMUNITY
						</motion.button>
						<motion.button
							className="px-8 py-3 bg-transparent border border-white text-white rounded-none text-sm tracking-widest font-light uppercase hover:bg-white/10 transition-colors duration-300 w-full text-center sm:w-auto"
							whileTap={{ scale: 0.98 }}>
							CONTACT US
						</motion.button>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll down indicator - hidden on mobile */}
			<motion.div
				className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
				initial={{ opacity: 0.8, y: 0 }}
				animate={{ opacity: 1, y: [0, 10, 0] }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: "loop"
				}}
				onClick={() => {
					window.scrollTo({
						top: window.innerHeight,
						behavior: "smooth"
					});
				}}>
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

export default CommunityHero;
