"use client";

import React, { useEffect, useState } from "react";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import Navbar from "@/components/home/NavbarNew";
import { motion } from "framer-motion";
import EstateMapNew, {
	Location,
	EstateFeature
} from "@/components/listings/EstateMapNew";
import { SectionTitle } from "@/components/ui/SectionTitle";
import PropertyGalleryNew from "@/components/listings/PropertyGalleryNew";
import Image from "next/image";

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

export default function SageeWoodsListingPage() {
	// State for setting body background color
	useEffect(() => {
		// Set background color on document body to white
		document.body.style.backgroundColor = "#FFFFFF";

		// Add smooth scrolling behavior
		document.documentElement.style.scrollBehavior = "smooth";

		return () => {
			// Restore original background on unmount if needed
			document.body.style.backgroundColor = "";
			document.documentElement.style.scrollBehavior = "";
		};
	}, []);

	// State for active tab in the property details section
	const [activeTab, setActiveTab] = useState("overview");

	// Map locations and area points of interest
	const propertyLocations: Location[] = [
		{
			id: "sagee-woods",
			title: "Sagee Manor",
			description: "Luxury mountain estate in the heart of Lake Geneva",
			coordinates: {
				lat: 35.0613183,
				lng: -83.1708458
			}
		},
		{
			id: "downtown-highlands",
			title: "Downtown Lake Geneva",
			description: "Charming mountain town with shopping and dining",
			coordinates: {
				lat: 35.0536,
				lng: -83.1938
			}
		},
		{
			id: "edwards-inn",
			title: "Old Edwards Inn & Spa",
			description: "Luxury resort with spa and dining",
			coordinates: {
				lat: 35.0526,
				lng: -83.1961
			}
		},
		{
			id: "country-club",
			title: "Lake Geneva Country Club",
			description: "Private country club with golf course",
			coordinates: {
				lat: 35.0537,
				lng: -83.1813
			}
		}
	];

	// Estate features for the detailed estate map
	const estateFeatures: EstateFeature[] = [
		{
			id: "main-house",
			title: "Main Manor House",
			description:
				"7-bedroom luxury residence with 4 full and 4 half baths",
			coordinates: [35.0613183, -83.1708458],
			category: "building"
		},
		{
			id: "guest-cottage",
			title: "Guest Cottage",
			description: "3-bedroom, 3-bath cottage with full kitchen",
			coordinates: [35.0614, -83.171],
			category: "building"
		},
		{
			id: "lake-house",
			title: "Private Lake & Lake House",
			description: "Boutique lake with dedicated lake house",
			coordinates: [35.0611, -83.1709],
			category: "recreation"
		},
		{
			id: "amphitheater",
			title: "Gala Amphitheater",
			description: "Tiered outdoor gathering space under the stars",
			coordinates: [35.0612, -83.171],
			category: "recreation"
		},
		{
			id: "helipad",
			title: "Private Helipad",
			description: "Helicopter landing area for ultimate accessibility",
			coordinates: [35.0616, -83.1708],
			category: "entrance"
		}
	];

	// Interior features data
	const interiorFeatures = {
		roomTypes: [
			"Main Hall",
			"Formal Dining Room",
			"Gourmet Kitchen",
			"Garden Room",
			"Library",
			"Family Room",
			"Wine Cellar",
			"Media Room",
			"Sleeping Porch"
		],
		kitchenFeatures: [
			"Custom Cabinetry",
			"Professional Appliances",
			"Marble Countertops",
			"Butler's Pantry",
			"Catering Kitchen",
			"Breakfast Bar"
		],
		bathroomFeatures: [
			"Luxury Fixtures",
			"Soaking Tubs",
			"Walk-in Showers",
			"Heated Floors",
			"Dual Vanities"
		],
		flooring: ["Hardwood", "Stone Flooring", "Designer Carpets"],
		heating: ["Central Heating", "7 Fireplaces", "Wood Burning"],
		cooling: ["Central A/C", "Ceiling Fans"],
		appliances: ["High-End Appliances", "Wine Cooler", "Washer", "Dryer"]
	};

	// Exterior features data
	const exteriorFeatures = {
		exteriorFeatures: [
			"Panoramic Mountain Views",
			"Private 25.92 Acre Estate",
			"Porte-Cochere",
			"Wood Siding",
			"Stone Accents"
		],
		patioAndPorch: [
			"Sleeping Porch",
			"Terrace",
			"Deck",
			"Multiple Porches"
		],
		poolFeatures: ["Heated Pool", "Pool House"],
		spaFeatures: ["Hot Tub", "Spa Facilities"],
		fencing: ["Gated Community", "Private Gates"]
	};

	// Key features list for overview tab
	const keyFeatures = [
		"Private 25.92 Acre Estate",
		"360° Panoramic Mountain Views",
		"Private Gates & Stone Archway",
		"Private Helipad",
		"7 Fireplaces",
		"Wine Cellar",
		"Media Room/Home Theater",
		"Library",
		"Guest Cottage (3BR/3BA)",
		"Dining Pavilion",
		"Heated Pool & Pool House",
		"Hot Tub/Spa",
		"Gardens Designed by Rosemary Verey",
		"Private Lake with Lake House",
		"Gala Amphitheater",
		"Stone Overlook",
		"Croquet Court",
		"Annual Property Taxes: $77,011"
	];

	// Construction details
	const constructionDetails = {
		architecturalStyle: ["Custom", "Mountain Estate"],
		constructionMaterials: ["Wood Siding", "Stone", "Post and Beam"],
		foundation: ["Custom"],
		roofType: "Custom",
		isNewConstruction: false
	};

	// Utilities information
	const utilities = {
		electric: ["Full Electric"],
		gas: ["Gas Available"],
		water: ["Private Water"],
		sewer: ["Private Sewer"],
		greenEnergyFeatures: ["Energy Efficient"]
	};

	// Financial details
	const financialDetails = {
		pricePerSqFt: 0,
		taxAssessedValue: 0,
		annualTaxAmount: 77011,
		dateOnMarket: "2023-01-01"
	};

	return (
		<>
			{/* Hero Section with Navbar styled like HeroNew */}
			<section
				id="hero"
				className="relative w-full h-screen bg-white z-0">
				{/* Transparent Navbar */}
				<div className="absolute top-0 left-0 right-0 z-40">
					<Navbar />
				</div>

				{/* Video Background */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute inset-0">
						<Image
							src="/lre/lre3.jpg"
							alt="Sagee Woods"
							fill
							className="object-cover"
						/>
						{/* Improved video overlay with more sophisticated gradient */}
						<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
					</div>
				</div>

				{/* Content positioned at bottom with refined margins - following HeroNew styling */}
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
									S110W30520 YMCA Camp Rd
								</motion.h1>

								<motion.div
									variants={dividerVariants}
									className="h-[1.5px] bg-[#FFD700] w-20"></motion.div>
							</motion.div>

							<motion.div className="space-y-4 mt-8">
								<motion.p
									variants={itemVariants}
									className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 tracking-wide font-serif">
									$1,750,000
								</motion.p>

								<motion.p
									variants={itemVariants}
									className="text-lg md:text-xl text-white/70 font-light tracking-wide">
									Mukwonago, Wisconsin, 53149
								</motion.p>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="flex flex-col sm:flex-row gap-8 pt-12 md:pt-16">
								<a
									href="#virtual-tour"
									className="px-10 py-4 border border-white text-white font-sans text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] text-center">
									Virtual Tour
								</a>
								<a
									href="#contact"
									className="px-10 py-4 border border-[#FFD700] text-weichert-charcoal font-sans text-base tracking-widest uppercase transition-all duration-300 bg-[#FFD700]">
									Contact Cheryl
								</a>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* White page background for remaining content */}
			<div className="bg-white">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					{/* Property Overview Section */}
					<div className="py-16 md:py-24">
						<SectionTitle
							title="A Rarefied Mountain Estate"
							className="mb-20"
						/>

						{/* Property Highlights */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
							<div className="flex flex-col items-center text-center p-6 border border-gray-200">
								<span className="text-2xl md:text-3xl font-light font-serif text-[#FFD700] mb-2">
									7
								</span>
								<span className="text-sm uppercase tracking-wider text-gray-600">
									Bedrooms
								</span>
							</div>
							<div className="flex flex-col items-center text-center p-6 border border-gray-200">
								<span className="text-2xl md:text-3xl font-light font-serif text-[#FFD700] mb-2">
									11
								</span>
								<span className="text-sm uppercase tracking-wider text-gray-600">
									Bathrooms
								</span>
							</div>
							<div className="flex flex-col items-center text-center p-6 border border-gray-200">
								<span className="text-2xl md:text-3xl font-light font-serif text-[#FFD700] mb-2">
									25.92
								</span>
								<span className="text-sm uppercase tracking-wider text-gray-600">
									Acres
								</span>
							</div>
							<div className="flex flex-col items-center text-center p-6 border border-gray-200">
								<span className="text-2xl md:text-3xl font-light font-serif text-[#FFD700] mb-2">
									2001
								</span>
								<span className="text-sm uppercase tracking-wider text-gray-600">
									Year Built
								</span>
							</div>
						</div>

						{/* Tabbed Interface for Details */}
						<div className="mt-8 md:mt-16">
							{/* Tab Navigation */}
							<div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
								<button
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("overview");
									}}
									className={`px-6 py-3 font-sans text-sm tracking-wider uppercase transition-all duration-300 mx-2 ${activeTab === "overview" ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : "text-gray-500 hover:text-gray-800"}`}>
									Overview
								</button>
								<button
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("interior");
									}}
									className={`px-6 py-3 font-sans text-sm tracking-wider uppercase transition-all duration-300 mx-2 ${activeTab === "interior" ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : "text-gray-500 hover:text-gray-800"}`}>
									Interior
								</button>
								<button
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("exterior");
									}}
									className={`px-6 py-3 font-sans text-sm tracking-wider uppercase transition-all duration-300 mx-2 ${activeTab === "exterior" ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : "text-gray-500 hover:text-gray-800"}`}>
									Exterior
								</button>
								<button
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("construction");
									}}
									className={`px-6 py-3 font-sans text-sm tracking-wider uppercase transition-all duration-300 mx-2 ${activeTab === "construction" ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : "text-gray-500 hover:text-gray-800"}`}>
									Construction
								</button>
								<button
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("financial");
									}}
									className={`px-6 py-3 font-sans text-sm tracking-wider uppercase transition-all duration-300 mx-2 ${activeTab === "financial" ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : "text-gray-500 hover:text-gray-800"}`}>
									Financial
								</button>
							</div>

							{/* Tab Content */}
							<div className="py-6">
								{/* Overview Tab */}
								{activeTab === "overview" && (
									<div className="fade-in">
										<div className="mb-12">
											<h3 className="text-2xl font-serif font-light mb-6">
												Property Description
											</h3>
											<p className="text-gray-700 leading-relaxed mb-8">
												Approached through private
												gates, a hand-laid stone
												archway, and along a meandering
												one-third mile landscaped drive,
												the estate announces itself with
												grandeur and quiet authority.
												Designed as a sophisticated
												lakefront retreat for the
												world&apos;s elite—be it Wall
												Street financiers, global
												tastemakers, and those arriving
												by vehicle or helicopter—the
												estate balances old-world charm
												with thoughtful modern luxury.
											</p>
											<p className="text-gray-700 leading-relaxed">
												At its heart lies a magnificent
												manor house, meticulously
												appointed with four luxurious
												bedrooms, four full and four
												half baths, a main hall, elegant
												sitting and dining rooms, a
												light-filled garden room, a
												richly appointed library, an
												inviting family room, and a wine
												cellar for the true connoisseur.
												Seven fireplaces throughout the
												home provide warmth and
												ambiance, while a sleeping porch
												allows one to drift off amidst
												mountain breezes. Entertain with
												grace in the striking post and
												beam dining pavilion, crowned by
												dual stone fireplaces, or host
												guests in the charming guest
												cottage, which offers three
												bedrooms, three baths, a
												fireplace, a welcoming porch,
												and a fully equipped kitchen.
											</p>
										</div>

										<div>
											<h3 className="text-2xl font-serif font-light mb-6">
												Key Features
											</h3>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
												{keyFeatures.map(
													(feature, index) => (
														<div
															key={index}
															className="flex items-center py-2">
															<div className="w-2 h-2 bg-[#D32F2F] mr-3"></div>
															<span className="text-gray-700">
																{feature}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								)}

								{/* Interior Tab */}
								{activeTab === "interior" && (
									<div className="fade-in">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Room Types
												</h3>
												<ul className="space-y-3">
													{interiorFeatures.roomTypes.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#D32F2F] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Kitchen Features
												</h3>
												<ul className="space-y-3">
													{interiorFeatures.kitchenFeatures.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#D32F2F] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>
											</div>

											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Bathroom Features
												</h3>
												<ul className="space-y-3">
													{interiorFeatures.bathroomFeatures.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Flooring & Systems
												</h3>
												<ul className="space-y-3">
													{interiorFeatures.flooring.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Heating & Cooling
												</h3>
												<ul className="space-y-3">
													{[
														...interiorFeatures.heating,
														...interiorFeatures.cooling
													].map((item, index) => (
														<li
															key={index}
															className="flex items-center py-1">
															<div className="w-2 h-2 bg-[#890300] mr-3"></div>
															<span className="text-gray-700">
																{item}
															</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								)}

								{/* Exterior Tab */}
								{activeTab === "exterior" && (
									<div className="fade-in">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Exterior Features
												</h3>
												<ul className="space-y-3">
													{exteriorFeatures.exteriorFeatures.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Patio & Porch Features
												</h3>
												<ul className="space-y-3">
													{exteriorFeatures.patioAndPorch.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>
											</div>

											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Pool & Spa
												</h3>
												<ul className="space-y-3">
													{[
														...exteriorFeatures.poolFeatures,
														...exteriorFeatures.spaFeatures
													].map((item, index) => (
														<li
															key={index}
															className="flex items-center py-1">
															<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
															<span className="text-gray-700">
																{item}
															</span>
														</li>
													))}
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Fencing & Security
												</h3>
												<ul className="space-y-3">
													{exteriorFeatures.fencing.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>
											</div>
										</div>
									</div>
								)}

								{/* Construction Tab */}
								{activeTab === "construction" && (
									<div className="fade-in">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Architectural Style
												</h3>
												<ul className="space-y-3">
													{constructionDetails.architecturalStyle.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Construction Materials
												</h3>
												<ul className="space-y-3">
													{constructionDetails.constructionMaterials.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">
																	{item}
																</span>
															</li>
														)
													)}
												</ul>
											</div>

											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Foundation & Roof
												</h3>
												<ul className="space-y-3">
													{constructionDetails.foundation.map(
														(item, index) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">{`Foundation: ${item}`}</span>
															</li>
														)
													)}
													<li className="flex items-center py-1">
														<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
														<span className="text-gray-700">{`Roof Type: ${constructionDetails.roofType}`}</span>
													</li>
												</ul>

												<h3 className="text-2xl font-serif font-light mt-10 mb-6">
													Utilities
												</h3>
												<ul className="space-y-3">
													{Object.entries(
														utilities
													).map(
														(
															[key, values],
															index
														) => (
															<li
																key={index}
																className="flex items-center py-1">
																<div className="w-2 h-2 bg-[#ffd602] mr-3"></div>
																<span className="text-gray-700">{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${values.join(", ")}`}</span>
															</li>
														)
													)}
												</ul>
											</div>
										</div>

										<div className="mt-10">
											<p className="text-gray-700 italic">
												{constructionDetails.isNewConstruction
													? "This is a new construction property."
													: "This is not a new construction property."}
											</p>
										</div>
									</div>
								)}

								{/* Financial Tab */}
								{activeTab === "financial" && (
									<div className="fade-in">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Pricing Information
												</h3>
												<ul className="space-y-6">
													<li className="flex flex-col py-1">
														<span className="text-lg font-medium text-[#D32F2F]">
															Listing Price
														</span>
														<span className="text-2xl font-light text-gray-800 mt-2">
															$32,000,000
														</span>
													</li>
													{financialDetails.pricePerSqFt >
														0 && (
														<li className="flex flex-col py-1">
															<span className="text-lg font-medium text-[#D32F2F]">
																Price Per Square
																Foot
															</span>
															<span className="text-2xl font-light text-gray-800 mt-2">
																$
																{financialDetails.pricePerSqFt.toLocaleString()}
															</span>
														</li>
													)}
												</ul>
											</div>

											<div>
												<h3 className="text-2xl font-serif font-light mb-6">
													Tax Information
												</h3>
												<ul className="space-y-6">
													{financialDetails.taxAssessedValue >
														0 && (
														<li className="flex flex-col py-1">
															<span className="text-lg font-medium text-[#D32F2F]">
																Tax Assessed
																Value
															</span>
															<span className="text-2xl font-light text-gray-800 mt-2">
																$
																{financialDetails.taxAssessedValue.toLocaleString()}
															</span>
														</li>
													)}
													{financialDetails.annualTaxAmount >
														0 && (
														<li className="flex flex-col py-1">
															<span className="text-lg font-medium text-[#D32F2F]">
																Annual Property
																Taxes
															</span>
															<span className="text-2xl font-light text-gray-800 mt-2">
																$
																{financialDetails.annualTaxAmount.toLocaleString()}
															</span>
														</li>
													)}
												</ul>
											</div>
										</div>

										<div className="mt-12">
											<h3 className="text-2xl font-serif font-light mb-6">
												Listing Information
											</h3>
											<p className="text-gray-700">
												{`Date Listed: ${new Date(financialDetails.dateOnMarket).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<PropertyGalleryNew
						images={[
							{
								thumbnailSrc: "/mr/sm1.webp",
								fullSrc: "/mr/sm1.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm2.webp",
								fullSrc: "/mr/sm2.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm3.webp",
								fullSrc: "/mr/sm3.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm4.webp",
								fullSrc: "/mr/sm4.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm5.webp",
								fullSrc: "/mr/sm5.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm6.webp",
								fullSrc: "/mr/sm6.webp",
								alt: "Sagee Manor Estate"
							},

							{
								thumbnailSrc: "/mr/sm7.webp",
								fullSrc: "/mr/sm7.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm8.webp",
								fullSrc: "/mr/sm8.webp",
								alt: "Sagee Manor Estate"
							},
							{
								thumbnailSrc: "/mr/sm9.webp",
								fullSrc: "/mr/sm9.webp",
								alt: "Sagee Manor Estate"
							}
						]}
					/>
					{/* Use the new EstateMapNew component */}
					<EstateMapNew
						estateFeatures={estateFeatures}
						propertyLocations={propertyLocations}
						estateName="Sagee Manor Estate"
						estateDescription="This magnificent 25.92-acre estate encompasses an entire mountaintop, offering uninterrupted 360-degree panoramic views of the Blue Ridge Mountains. The property features meticulously designed spaces for both living and leisure, with gardens curated by renowned landscape designer Rosemary Verey."
						estateWebsite="#"
						mapCenter={[35.0613183, -83.1708458]}
						mapZoom={19}
					/>

					{/* Virtual Tour Section */}
					<div id="virtual-tour" className="py-16 md:py-24">
						<SectionTitle
							title="Virtual Tour Experience"
							className="mb-12"
						/>
						<div className="relative w-full h-[75vh]">
							<iframe
								src="https://my.matterport.com/show/?m=Fc8fHadMhUw"
								className="w-full h-full border-none"
								title="Sagee Manor Virtual Tour"
								allowFullScreen
								allow="xr-spatial-tracking"></iframe>
						</div>
						<p className="text-gray-600 text-center mt-6 italic">
							Experience Sagee Manor through our immersive 3D
							virtual tour. Navigate through each room to get a
							true sense of the estate&apos;s grandeur and
							elegance.
						</p>
					</div>
				</div>
			</div>

			<ContactNew />
			<FooterNew />

			{/* Adding CSS for fade animation */}
			<style jsx>{`
				.fade-in {
					animation: fadeIn 0.5s ease-in;
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</>
	);
}
