"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Copied animation variants from FeaturedListings.tsx
// Consider moving these to a shared utils file if used elsewhere
const sectionVariants = {
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

const FeaturedListingsHeader: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<motion.div
				variants={logoVariants}
				initial="hidden" // Initial state for animation trigger
				whileInView="visible" // Animate when in view
				viewport={{ once: true }} // Trigger animation only once
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
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
				FEATURED PROPERTIES
			</motion.h2>
			<motion.p
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="text-zinc-600 text-base md:text-lg mt-8 max-w-2xl mx-auto text-center font-extralight leading-relaxed">
				Immerse yourself in our curated selection of exceptional
				properties. Each listing represents the finest in Lake Geneva area
				living, showcasing the natural beauty and sophisticated
				lifestyle of Lake Geneva area.
			</motion.p>
		</div>
	);
};

export default FeaturedListingsHeader;
