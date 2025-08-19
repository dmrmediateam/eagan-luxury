"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Navbar from "@/components/home/NavbarNew";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactNew } from "@/components/home/ContactNew";
import CityPropertiesView from "@/components/properties/CityPropertiesView";
import { getAllServiceAreas } from "@/lib/cheryl-service-areas";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2
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
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const cities = [
	{
		name: "Hackettstown",
		description: "A charming town in Warren County known for its historic downtown, excellent schools, and family-friendly atmosphere. Perfect for those seeking a suburban lifestyle with easy access to major highways.",
		highlights: ["Historic Downtown", "Excellent Schools", "Family-Friendly", "Easy Commuting"],
		image: "/mr/mrg.jpg",
		slug: "hackettstown"
	},
	{
		name: "Andover",
		description: "A picturesque borough in Sussex County offering rural charm with modern conveniences. Known for its beautiful landscapes, outdoor recreation opportunities, and tight-knit community.",
		highlights: ["Rural Charm", "Outdoor Recreation", "Tight-Knit Community", "Beautiful Landscapes"],
		image: "/mr/mrg.jpg",
		slug: "andover"
	},
	{
		name: "Byram",
		description: "A township in Sussex County featuring a mix of residential areas and natural beauty. Home to Lake Musconetcong and offering excellent recreational opportunities for outdoor enthusiasts.",
		highlights: ["Lake Musconetcong", "Outdoor Recreation", "Residential Areas", "Natural Beauty"],
		image: "/mr/mrg.jpg",
		slug: "byram"
	},
	{
		name: "Blairstown",
		description: "A historic township in Warren County known for its colonial architecture, excellent schools, and peaceful country setting. Perfect for those seeking a quiet, rural lifestyle.",
		highlights: ["Historic Architecture", "Excellent Schools", "Rural Setting", "Peaceful Lifestyle"],
		image: "/mr/mrg.jpg",
		slug: "blairstown"
	},
	{
		name: "Chester",
		description: "A borough in Morris County offering a perfect blend of small-town charm and modern amenities. Known for its excellent schools, shopping, and convenient location.",
		highlights: ["Small-Town Charm", "Modern Amenities", "Excellent Schools", "Convenient Location"],
		image: "/mr/mrg.jpg",
		slug: "chester"
	}
];

export default function CitiesPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />

			{/* Hero Section */}
			<section className="relative h-[60vh] bg-[#222223]">
				<div className="absolute inset-0">
					<Image
						src="/mr/mrg.jpg"
						alt="New Jersey Cities"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/50"></div>
				</div>
				<div className="relative z-10 h-full flex items-center">
					<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] w-full">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							className="text-white max-w-4xl">
							<motion.h1
								variants={itemVariants}
								className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4">
								Cities We Serve
							</motion.h1>
							<motion.div
								variants={itemVariants}
								className="h-[1.5px] bg-secondary mb-6 w-24"></motion.div>
							<motion.p
								variants={itemVariants}
								className="text-xl md:text-2xl text-white/80 mb-8">
								Discover the beautiful communities where Cheryl Towey helps families find their perfect homes in New Jersey
							</motion.p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Cities Section */}
			<section className="py-24">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="space-y-16">
						
						<SectionTitle 
							title="Our Top Cities" 
							subtitle="Cheryl specializes in these New Jersey communities, helping families find their perfect homes" 
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{cities.map((city) => (
								<motion.div
									key={city.name}
									variants={itemVariants}
									className="group cursor-pointer"
								>
									<Link href={`/cities/${city.slug}`}>
										<div className="bg-white border border-[#E5E5E5] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden">
											{/* City Image */}
											<div className="relative h-64 overflow-hidden">
												<Image
													src={city.image}
													alt={city.name}
													fill
													className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
												<div className="absolute bottom-4 left-4">
													<h3 className="text-2xl font-serif font-medium text-white mb-1">{city.name}</h3>
												</div>
											</div>

											{/* City Content */}
											<div className="p-6">
												<p className="text-[#222223]/80 leading-relaxed mb-4">
													{city.description}
												</p>
												
												{/* Highlights */}
												<div className="space-y-2">
													<h4 className="text-sm font-medium text-[#222223] uppercase tracking-wider">Highlights</h4>
													<div className="flex flex-wrap gap-2">
														{city.highlights.map((highlight, idx) => (
															<span
																key={idx}
																className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
															>
																{highlight}
															</span>
														))}
													</div>
												</div>

												{/* Learn More Button */}
												<div className="mt-6 pt-4 border-t border-[#E5E5E5]">
													<span className="text-secondary font-sans text-sm tracking-wider uppercase group-hover:underline transition-all duration-300">
														Learn More →
													</span>
												</div>
											</div>
										</div>
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Properties Search Section */}
			<section className="py-24 bg-gray-50">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
						className="text-center mb-16">
						<motion.h2
							variants={itemVariants}
							className="text-4xl lg:text-5xl font-serif font-light text-[#222223] mb-6">
							Search Properties by City
						</motion.h2>
						<motion.p
							variants={itemVariants}
							className="text-lg text-[#222223]/70 max-w-3xl mx-auto">
							Find your perfect home in any of our service areas. Use the search below to explore available properties by city.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={itemVariants}>
						<CityPropertiesView
							showSearch={true}
							title=""
							subtitle=""
							variant="compact"
						/>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<div id="contact">
				<ContactNew />
			</div>

			<FooterNew />
		</div>
	);
}
