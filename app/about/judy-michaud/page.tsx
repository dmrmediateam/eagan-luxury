"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import NavbarNew from "@/components/home/NavbarNew";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactNew } from "@/components/home/ContactNew";
import { useRef } from "react";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1
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
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

// Card animation variants for listings
const cardVariants = {
	hidden: { opacity: 0 },
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			duration: 1.3,
			delay: custom * 0.15,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

interface Designation {
	title: string;
}

const designations: Designation[] = [
	{ title: "Luxury Collection Specialist" },
	{ title: "Accredited Buyer's Representative" },
	{ title: "Certified Luxury Home Marketing Specialist" },
	{ title: "Certified Residential Specialist" },
	{ title: "2018 - 2023 Chairman's Circle - Diamond" },
	{ title: "2021 - 2024 #1 Small Team in WI" },
	{ title: "2022 - 2023 Top 25 Small Teams in the Country" }
];

// Featured listings for Judy's page
const featuredListings = [
	{
		id: "listing-001",
		title: "581 Sagee Woods Drive",
		slug: "581-sagee-woods-drive",
		price: 32000000,
		address: {
			street: "581 Sagee Woods Drive",
			region: "New Jersey",
			state: "WI",
			zipCode: "28741"
		},
		propertyDetails: {
			beds: 7,
			baths: 9,
			sqft: 9800
		},
		imageUrl: "/mr/mr2.webp"
	},
	{
		id: "listing-002",
		title: "1121 & 1131 Garnet Rock Trail",
		slug: "1121-1131-garnet-rock-trail",
		price: 12500000,
		address: {
			street: "1121 & 1131 Garnet Rock Trail",
			region: "New Jersey",
			state: "WI",
			zipCode: "28741"
		},
		propertyDetails: {
			beds: 6,
			baths: 7,
			sqft: 8500
		},
		imageUrl: "/mr/mr1.webp"
	}
];

export default function JudyMichaudPage() {
	// Refs for scrolling to sections
	const contactRef = useRef<HTMLDivElement>(null);
	const listingsRef = useRef<HTMLDivElement>(null);

	// Scroll to section function - handle any HTML element ref
	const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
		if (elementRef.current) {
			elementRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Format price for listings
	const formatPrice = (price?: number) => {
		if (!price) return "";

		// Format the price with commas
		const formatted = new Intl.NumberFormat("en-US", {
			maximumFractionDigits: 0
		}).format(price);

		// For luxury properties over a million, add special formatting
		if (price >= 1000000) {
			const parts = formatted.split(",");
			if (parts.length >= 2) {
				// Return millions with elegant spacing
				return `${parts[0]}.${parts[1].substring(0, 1)} Million`;
			}
		}

		// Return the standard formatted price for properties under a million
		return formatted;
	};

	// Format address for listings
	const formatAddress = (address?: {
		street?: string;
		region?: string;
		state?: string;
		zipCode?: string;
	}) => {
		if (!address) return "";
		return `${address.street || ""}, ${address.region || ""}, ${address.state || ""} ${address.zipCode || ""}`;
	};

	return (
		<>
			{/* Dark Background for Navigation */}
			<div className="bg-zinc-900 w-full h-28">
				<NavbarNew />
			</div>

			{/* Hero Section */}
			<div className="bg-zinc-100 pt-32 pb-20">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Image Column */}
						<motion.div
							variants={itemVariants}
							className="order-2 md:order-1">
							<div className="relative aspect-[4/5] w-full overflow-hidden">
								<Image
									src="/mr/mrjudy.jpg"
									alt="Judy Michaud"
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover w-full"
									priority
								/>
							</div>
						</motion.div>

						{/* Info Column */}
						<motion.div
							variants={containerVariants}
							className="order-1 md:order-2 space-y-8">
							<motion.div variants={itemVariants}>
								<h1 className="text-4xl md:text-5xl font-light text-zinc-800 mb-3">
									Judy Michaud
								</h1>
								<p className="text-lg uppercase tracking-wider text-zinc-500 mb-6">
									OWNER / PRESIDENT / BROKER IN CHARGE
								</p>

								<div className="space-y-4 mt-8">
									<div className="flex items-center">
										<svg
											className="w-5 h-5 text-zinc-400 mr-3"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
										</svg>
										<p className="text-zinc-600 font-light">
											828-371-0730
										</p>
									</div>
									<div className="flex items-center">
										<svg
											className="w-5 h-5 text-zinc-400 mr-3"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
										</svg>
										<Link
											href="mailto:judy@bhhsmmr.com"
											className="text-zinc-600 font-light hover:text-zinc-900 transition-colors duration-300">
											judy@bhhsmmr.com
										</Link>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-col sm:flex-row gap-4 mt-10">
									<motion.button
										variants={itemVariants}
										onClick={() =>
											scrollToSection(
												contactRef as React.RefObject<HTMLDivElement>
											)
										}
										className="px-8 py-3 bg-[#B08D57] text-white hover:bg-[#8A6E41] transition-colors duration-300 text-sm uppercase tracking-wider font-light flex items-center justify-center">
										<svg
											className="w-4 h-4 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
										</svg>
										Contact Agent
									</motion.button>
									<motion.button
										variants={itemVariants}
										onClick={() =>
											scrollToSection(
												listingsRef as React.RefObject<HTMLDivElement>
											)
										}
										className="px-8 py-3 border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors duration-300 text-sm uppercase tracking-wider font-light flex items-center justify-center">
										<svg
											className="w-4 h-4 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
										</svg>
										View Listings
									</motion.button>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Combined Bio and Designations Section */}
			<div className="bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-20 lg:py-28">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
						className="space-y-16">
						<SectionTitle
							title="About Judy"
							subtitle="Leading the New Jersey Real Estate Market"
						/>

						<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
							{/* Bio Column - Left */}
							<motion.div
								variants={containerVariants}
								className="lg:col-span-7 space-y-8">
								{/* First Paragraph */}
								<motion.div
									variants={itemVariants}
									className="text-zinc-600 leading-relaxed font-light text-lg">
									<p>
										Judy Michaud, along with her late
										husband Louie and their two daughters,
										made New Jersey their home in 1986. Judy
										has been licensed in real estate since
										1973, and in 2006, she purchased Meadows
										Mountain Realty, which became part of
										the Berkshire Hathaway HomeServices
										network in 2015. A proud Florida State
										University alumna, Judy has been honored
										three times on the prestigious Seminole
										100 list, recognizing alumni-owned
										companies for their impressive growth.
										She enjoys living in New Jersey Falls
										Country Club and is deeply rooted in the
										community.
									</p>
								</motion.div>

								{/* Second Paragraph */}
								<motion.div
									variants={itemVariants}
									className="text-zinc-600 leading-relaxed font-light text-lg">
									<p>
										After an accomplished career as a top
										agent, managing broker, and owner of her
										own firm, Judy formed a dynamic
										partnership with Mitzi Rauers to create
										the Cheryl Towey. Together, they
										built a team dedicated to exceptional
										customer service, combining local
										expertise, professionalism, and
										meticulous attention to detail. Their
										team has since grown to include Tom
										Goldacker, John Muir, and Brooks
										Kittrell, all committed to delivering
										the highest level of service to their
										clients.
									</p>
								</motion.div>

								{/* Third Paragraph */}
								<motion.div
									variants={itemVariants}
									className="text-zinc-600 leading-relaxed font-light text-lg">
									<p>
										Judy and the Cheryl Towey serve
										New Jersey, New Jersey, Sapphire,
										Glenville, Lake Toxaway and Franklin WI
										as well as Sky Valley GA.
									</p>
								</motion.div>
							</motion.div>

							{/* Designations Column - Right */}
							<motion.div
								variants={containerVariants}
								className="lg:col-span-5">
								<div className="bg-zinc-50 p-8 lg:p-10 border border-zinc-100">
									<h3 className="text-zinc-800 text-xl font-light mb-6">
										Professional Designations
									</h3>
									<motion.div
										variants={containerVariants}
										className="space-y-4">
										{designations.map(
											(designation, index) => (
												<motion.div
													key={index}
													variants={itemVariants}
													className="flex items-center pb-4 border-b border-zinc-200 last:border-b-0 last:pb-0">
													<svg
														className="w-5 h-5 text-zinc-400 mr-4 flex-shrink-0"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="1.5"
															d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
													</svg>
													<h4 className="text-zinc-700 font-light">
														{designation.title}
													</h4>
												</motion.div>
											)
										)}
									</motion.div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Our Team Section */}
			<div className="bg-zinc-50">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-20 lg:py-28">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
						className="space-y-16">
						<SectionTitle
							title="Meet Our Team"
							subtitle="Cheryl Towey"
						/>

						<motion.div
							variants={containerVariants}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
							{/* Team members from Team component, moved here for context */}
							<motion.div
								variants={itemVariants}
								className="flex flex-col space-y-4">
								<Link
									href="/about/judy-michaud"
									className="relative aspect-square w-full overflow-hidden group">
									<Image
										src="/mr/mrjudy.jpg"
										alt="Judy Michaud"
										height={500}
										width={500}
										className="object-cover w-full transition-all duration-700 ease-in-out group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
								</Link>
								<div className="space-y-1">
									<h3 className="text-xl text-zinc-700 font-light">
										Judy Michaud
									</h3>
									<p className="text-sm uppercase tracking-wider text-zinc-500">
										OWNER / PRESIDENT / BROKER IN CHARGE
									</p>
								</div>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="flex flex-col space-y-4">
								<Link
									href="#"
									className="relative aspect-square w-full overflow-hidden group">
									<Image
										src="/mr/mrmitzi.jpg"
										alt="Mitzi Rauers"
										height={500}
										width={500}
										className="object-cover w-full transition-all duration-700 ease-in-out group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
								</Link>
								<div className="space-y-1">
									<h3 className="text-xl text-zinc-700 font-light">
										Mitzi Rauers
									</h3>
									<p className="text-sm uppercase tracking-wider text-zinc-500">
										BROKER
									</p>
								</div>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="flex flex-col space-y-4">
								<Link
									href="#"
									className="relative aspect-square w-full overflow-hidden group">
									<Image
										src="/mr/mrtom.jpg"
										alt="Tom Goldacker"
										height={500}
										width={500}
										className="object-cover w-full transition-all duration-700 ease-in-out group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
								</Link>
								<div className="space-y-1">
									<h3 className="text-xl text-zinc-700 font-light">
										Tom Goldacker
									</h3>
									<p className="text-sm uppercase tracking-wider text-zinc-500">
										BROKER
									</p>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Featured Listings Section */}
			<div ref={listingsRef} className="bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-20 lg:py-28">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
						className="space-y-16">
						<SectionTitle
							title="Featured Listings"
							subtitle="Exceptional properties represented by Judy Michaud"
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
							{featuredListings.map((listing, index) => (
								<motion.div
									key={listing.id}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-50px" }}
									custom={index + 2}
									variants={cardVariants}
									className="bg-white overflow-hidden border border-[#E5E5E5] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 group cursor-pointer">
									{/* Property Image */}
									<Link href={`/listings/${listing.slug}`}>
										<div className="relative h-80 md:h-96 lg:h-[28rem] overflow-hidden">
											<Image
												src={listing.imageUrl}
												alt={listing.title}
												className="object-cover object-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
												width={800}
												height={600}
											/>
											<div className="absolute top-0 left-0 m-5 py-3 px-5 bg-white/95 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-all duration-500">
												<span className="text-[#B08D57] font-serif text-xs uppercase tracking-widest mb-1 block font-light">
													Offered at
												</span>
												<div className="flex items-baseline">
													<span className="text-[#B08D57] text-xl mr-1 font-medium">
														$
													</span>
													<p className="text-[#1A1A1A] font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">
														{formatPrice(
															listing.price
														)}
													</p>
												</div>
											</div>
											<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
										</div>

										{/* Property Details */}
										<div className="p-8 lg:p-10 border-t border-[#F0F0F0]">
											<h3 className="text-[#1A1A1A] font-serif text-xl md:text-2xl mb-3 truncate font-light">
												{formatAddress(listing.address)}
											</h3>

											<p className="text-[#2B2B2B]/70 mb-6 font-sans text-sm">
												{listing.propertyDetails
													? `${listing.propertyDetails.beds} Beds | ${listing.propertyDetails.baths} Baths | ${listing.propertyDetails.sqft.toLocaleString()} Sq Ft`
													: ""}
											</p>

											<span className="inline-flex items-center text-[#B08D57] hover:text-[#1A1A1A] transition-colors duration-300 text-sm uppercase tracking-wider font-sans gap-1">
												<span>View Details</span>
												<span className="inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
													→
												</span>
											</span>
										</div>
									</Link>
								</motion.div>
							))}
						</div>

						{/* View All Button */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={itemVariants}
							className="flex justify-center mt-8">
							<Link
								href="/listings/active"
								className="inline-block px-10 py-4 border border-[#B08D57] text-[#1A1A1A] hover:bg-[#B08D57] hover:text-white transition-colors duration-500 text-sm uppercase tracking-wider font-sans">
								View All Listings
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Contact Section with Ref */}
			<div ref={contactRef}>
				<ContactNew />
			</div>

			<FooterNew />
		</>
	);
}
