"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Define the types for property details
interface FinancialDetails {
	pricePerSqFt?: number;
	taxAssessedValue?: number;
	annualTaxAmount?: number;
	dateOnMarket?: string;
}

interface InteriorFeatures {
	roomTypes?: string[];
	kitchenFeatures?: string[];
	bathroomFeatures?: string[];
	flooring?: string[];
	heating?: string[];
	cooling?: string[];
	appliances?: string[];
}

interface ExteriorFeatures {
	exteriorFeatures?: string[];
	patioAndPorch?: string[];
	poolFeatures?: string[];
	spaFeatures?: string[];
	fencing?: string[];
}

interface ConstructionDetails {
	architecturalStyle?: string[];
	constructionMaterials?: string[];
	foundation?: string[];
	roofType?: string;
	isNewConstruction?: boolean;
}

interface Utilities {
	electric?: string[];
	gas?: string[];
	water?: string[];
	sewer?: string[];
	greenEnergyFeatures?: string[];
}

interface PropertyDetailsNewProps {
	interiorFeatures?: InteriorFeatures;
	exteriorFeatures?: ExteriorFeatures;
	constructionDetails?: ConstructionDetails;
	utilities?: Utilities;
	financialDetails?: FinancialDetails;
}

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const contentVariants = {
	hidden: { height: 0, opacity: 0 },
	visible: {
		height: "auto",
		opacity: 1,
		transition: {
			height: {
				duration: 0.4,
				ease: [0.16, 1, 0.3, 1]
			},
			opacity: {
				duration: 0.25,
				delay: 0.15
			}
		}
	}
};

// A reusable detail section component
const DetailSection = ({
	title,
	items,
	isOpen,
	toggleOpen
}: {
	title: string;
	items: { label: string; values: string[] | undefined }[];
	isOpen: boolean;
	toggleOpen: () => void;
}) => {
	// Filter out items without values or with empty arrays
	const filteredItems = items.filter(
		(item) => item.values && item.values.length > 0
	);

	// Only render the section if there are items to display
	if (filteredItems.length === 0) return null;

	return (
		<motion.div
			className="border-b border-zinc-200 py-6"
			variants={itemVariants}>
			<button
				className="flex justify-between items-center w-full text-left focus:outline-none"
				onClick={toggleOpen}
				aria-expanded={isOpen}>
				<h3 className="text-xl font-light text-zinc-800 tracking-wide">
					{title}
				</h3>
				<ChevronDown
					className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						className="mt-4 overflow-hidden"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={contentVariants}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
							{filteredItems.map((item, index) => (
								<div key={`detail-${index}`}>
									<h4 className="text-zinc-700 font-medium mb-2">
										{item.label}
									</h4>
									<ul className="space-y-1">
										{item.values?.map((value, idx) => (
											<li
												key={`value-${idx}`}
												className="text-zinc-600 font-light flex items-start">
												<span className="text-zinc-400 mr-2">
													•
												</span>
												{value}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

// Component for financial details
const FinancialDetailsSection = ({
	financialDetails,
	isOpen,
	toggleOpen
}: {
	financialDetails: FinancialDetails | undefined;
	isOpen: boolean;
	toggleOpen: () => void;
}) => {
	if (!financialDetails) return null;

	// Format the date nicely
	const formatDate = (dateString?: string) => {
		if (!dateString) return "";
		try {
			const date = new Date(dateString);
			return new Intl.DateTimeFormat("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric"
			}).format(date);
		} catch {
			return dateString; // Return the original string if parsing fails
		}
	};

	// Format currency values
	const formatCurrency = (value?: number) => {
		if (value === undefined) return "";
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0
		}).format(value);
	};

	// Check if there's any financial data to display
	const hasFinancialData =
		financialDetails.pricePerSqFt !== undefined ||
		financialDetails.taxAssessedValue !== undefined ||
		financialDetails.annualTaxAmount !== undefined ||
		financialDetails.dateOnMarket !== undefined;

	if (!hasFinancialData) return null;

	return (
		<motion.div
			className="border-b border-zinc-200 py-6"
			variants={itemVariants}>
			<button
				className="flex justify-between items-center w-full text-left focus:outline-none"
				onClick={toggleOpen}
				aria-expanded={isOpen}>
				<h3 className="text-xl font-light text-zinc-800 tracking-wide">
					Financial Details
				</h3>
				<ChevronDown
					className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						className="mt-4 overflow-hidden"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={contentVariants}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{financialDetails.pricePerSqFt !== undefined && (
								<div>
									<p className="text-zinc-500 font-light">
										Price per sq ft
									</p>
									<p className="text-zinc-800 font-light text-lg">
										{formatCurrency(
											financialDetails.pricePerSqFt
										)}
									</p>
								</div>
							)}
							{financialDetails.taxAssessedValue !==
								undefined && (
								<div>
									<p className="text-zinc-500 font-light">
										Tax assessed value
									</p>
									<p className="text-zinc-800 font-light text-lg">
										{formatCurrency(
											financialDetails.taxAssessedValue
										)}
									</p>
								</div>
							)}
							{financialDetails.annualTaxAmount !== undefined && (
								<div>
									<p className="text-zinc-500 font-light">
										Annual tax amount
									</p>
									<p className="text-zinc-800 font-light text-lg">
										{formatCurrency(
											financialDetails.annualTaxAmount
										)}
									</p>
								</div>
							)}
							{financialDetails.dateOnMarket && (
								<div>
									<p className="text-zinc-500 font-light">
										Date on market
									</p>
									<p className="text-zinc-800 font-light text-lg">
										{formatDate(
											financialDetails.dateOnMarket
										)}
									</p>
								</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const PropertyDetailsNew = ({
	interiorFeatures,
	exteriorFeatures,
	constructionDetails,
	utilities,
	financialDetails
}: PropertyDetailsNewProps) => {
	// State to track which sections are open
	const [openSections, setOpenSections] = useState({
		interior: true,
		exterior: false,
		construction: false,
		utilities: false,
		financial: false
	});

	// Toggle a section open/closed
	const toggleSection = (section: keyof typeof openSections) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section]
		}));
	};

	// Check if there's any details to display at all
	const hasAnyDetails =
		(interiorFeatures &&
			Object.values(interiorFeatures).some((v) => v && v.length > 0)) ||
		(exteriorFeatures &&
			Object.values(exteriorFeatures).some((v) => v && v.length > 0)) ||
		(constructionDetails &&
			Object.values(constructionDetails).some(
				(v) => v && (Array.isArray(v) ? v.length > 0 : v !== undefined)
			)) ||
		(utilities &&
			Object.values(utilities).some((v) => v && v.length > 0)) ||
		financialDetails;

	if (!hasAnyDetails) {
		return null;
	}

	return (
		<section className="py-16 border-t border-zinc-200">
			<h2 className="text-2xl font-light text-zinc-800 mb-8 tracking-wide">
				Additional Details
			</h2>

			<motion.div
				className="divide-y divide-zinc-200"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}>
				{/* Interior Features */}
				{interiorFeatures && (
					<DetailSection
						title="Interior Features"
						items={[
							{
								label: "Room Types",
								values: interiorFeatures.roomTypes
							},
							{
								label: "Kitchen Features",
								values: interiorFeatures.kitchenFeatures
							},
							{
								label: "Bathroom Features",
								values: interiorFeatures.bathroomFeatures
							},
							{
								label: "Flooring",
								values: interiorFeatures.flooring
							},
							{
								label: "Heating",
								values: interiorFeatures.heating
							},
							{
								label: "Cooling",
								values: interiorFeatures.cooling
							},
							{
								label: "Appliances",
								values: interiorFeatures.appliances
							}
						]}
						isOpen={openSections.interior}
						toggleOpen={() => toggleSection("interior")}
					/>
				)}

				{/* Exterior Features */}
				{exteriorFeatures && (
					<DetailSection
						title="Exterior Features"
						items={[
							{
								label: "Exterior",
								values: exteriorFeatures.exteriorFeatures
							},
							{
								label: "Patio & Porch",
								values: exteriorFeatures.patioAndPorch
							},
							{
								label: "Pool Features",
								values: exteriorFeatures.poolFeatures
							},
							{
								label: "Spa Features",
								values: exteriorFeatures.spaFeatures
							},
							{
								label: "Fencing",
								values: exteriorFeatures.fencing
							}
						]}
						isOpen={openSections.exterior}
						toggleOpen={() => toggleSection("exterior")}
					/>
				)}

				{/* Construction Details */}
				{constructionDetails && (
					<DetailSection
						title="Construction Details"
						items={[
							{
								label: "Architectural Style",
								values: constructionDetails.architecturalStyle
							},
							{
								label: "Construction Materials",
								values: constructionDetails.constructionMaterials
							},
							{
								label: "Foundation",
								values: constructionDetails.foundation
							},
							{
								label: "Roof Type",
								values: constructionDetails.roofType
									? [constructionDetails.roofType]
									: undefined
							},
							{
								label: "Construction",
								values: constructionDetails.isNewConstruction
									? ["New Construction"]
									: undefined
							}
						]}
						isOpen={openSections.construction}
						toggleOpen={() => toggleSection("construction")}
					/>
				)}

				{/* Utilities */}
				{utilities && (
					<DetailSection
						title="Utilities"
						items={[
							{
								label: "Electric",
								values: utilities.electric
							},
							{
								label: "Gas",
								values: utilities.gas
							},
							{
								label: "Water",
								values: utilities.water
							},
							{
								label: "Sewer",
								values: utilities.sewer
							},
							{
								label: "Green Energy Features",
								values: utilities.greenEnergyFeatures
							}
						]}
						isOpen={openSections.utilities}
						toggleOpen={() => toggleSection("utilities")}
					/>
				)}

				{/* Financial Details */}
				<FinancialDetailsSection
					financialDetails={financialDetails}
					isOpen={openSections.financial}
					toggleOpen={() => toggleSection("financial")}
				/>
			</motion.div>
		</section>
	);
};

export default PropertyDetailsNew;
