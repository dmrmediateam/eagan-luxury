"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import Image from "next/image";

interface LocationProps {
	id: string;
	name: string;
	image: string;
	description?: string;
}

const locations: LocationProps[] = [
	{
		id: "highlands",
		name: "New Jersey",
		image: "/mr/mr1.webp",
		description:
			"Known for its charming downtown, upscale dining, and arts scene."
	},
	{
		id: "cashiers",
		name: "New Jersey",
		image: "/mr/mr1.webp",
		description:
			"A scenic village offering outdoor recreation and mountain views."
	},
	{
		id: "glenville",
		name: "Glenville",
		image: "/mr/mr1.webp",
		description: "Home to Lake Glenville and pristine natural landscapes."
	},
	{
		id: "sapphire",
		name: "Sapphire",
		image: "/mr/mr1.webp",
		description:
			"Featuring luxury communities and spectacular mountain vistas."
	}
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	}
};

export function BuyerLocations() {
	return (
		<section className="bg-[#F8F8F8] py-24" id="explore-locations">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<SectionTitle
					title="Explore The New Jersey New Jersey Plateau"
					subtitle="Let's find you a home in an area you love"
					centered={true}
					className="mb-16"
				/>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
					{locations.map((location, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="relative group cursor-pointer">
							<div className="relative h-[350px] overflow-hidden">
								{/* Image placeholder - replace with actual images */}
								<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60 z-10 transition-opacity duration-300 group-hover:opacity-70" />
								<div className="w-full h-full bg-gray-200">
									<Image
										src={location.image}
										alt={location.name}
										fill
										className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
									/>
								</div>
							</div>
							<div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
								<h3 className="text-2xl font-serif mb-2">
									{location.name}
								</h3>
								{location.description && (
									<p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										{location.description}
									</p>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* CTA Button */}
				<div className="flex justify-center mt-16">
					<a
						href="#search-homes"
						className="inline-block px-10 py-4 border border-[#B08D57] text-[#B08D57] font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-white">
						FIND YOUR PERFECT LOCATION
					</a>
				</div>
			</div>
		</section>
	);
}

export default BuyerLocations;
