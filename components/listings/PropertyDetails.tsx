"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

// Define types for the feature sections
interface RoomFeatures {
	roomTypes?: string[];
	kitchenFeatures?: string[];
	bathroomFeatures?: string[];
	flooring?: string[];
	heating?: string[];
	cooling?: string[];
	appliances?: string[];
}

interface ExteriorFeatureTypes {
	exteriorFeatures?: string[];
	patioAndPorch?: string[];
	poolFeatures?: string[];
	spaFeatures?: string[];
	fencing?: string[];
}

interface ConstructionFeatures {
	architecturalStyle?: string[];
	constructionMaterials?: string[];
	foundation?: string[];
	roofType?: string;
	isNewConstruction?: boolean;
}

interface UtilityFeatures {
	electric?: string[];
	gas?: string[];
	water?: string[];
	sewer?: string[];
	greenEnergyFeatures?: string[];
}

interface FinancialInfo {
	pricePerSqFt?: number;
	taxAssessedValue?: number;
	annualTaxAmount?: number;
	dateOnMarket?: string;
}

// Interior Features Section
const InteriorFeatures = ({
	interiorFeatures
}: {
	interiorFeatures?: RoomFeatures;
}) => {
	if (!interiorFeatures) return null;

	return (
		<motion.div className="mb-12" variants={fadeInUp}>
			<h3 className="text-xl font-light mb-4 text-gray-800">
				Interior Features
			</h3>

			{interiorFeatures.roomTypes &&
				interiorFeatures.roomTypes.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Room Types
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.roomTypes.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{interiorFeatures.kitchenFeatures &&
				interiorFeatures.kitchenFeatures.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Kitchen Features
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.kitchenFeatures.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{interiorFeatures.bathroomFeatures &&
				interiorFeatures.bathroomFeatures.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Bathroom Features
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.bathroomFeatures.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{interiorFeatures.flooring &&
				interiorFeatures.flooring.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Flooring
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.flooring.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{interiorFeatures.heating &&
				interiorFeatures.heating.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Heating
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.heating.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{interiorFeatures.cooling &&
				interiorFeatures.cooling.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Cooling
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.cooling.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{interiorFeatures.appliances &&
				interiorFeatures.appliances.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Appliances
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{interiorFeatures.appliances.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}
		</motion.div>
	);
};

// Exterior Features Section
const ExteriorFeatures = ({
	exteriorFeatures
}: {
	exteriorFeatures?: ExteriorFeatureTypes;
}) => {
	if (!exteriorFeatures) return null;

	return (
		<motion.div className="mb-12" variants={fadeInUp}>
			<h3 className="text-xl font-light mb-4 text-gray-800">
				Exterior Features
			</h3>

			{exteriorFeatures.exteriorFeatures &&
				exteriorFeatures.exteriorFeatures.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Exterior Features
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{exteriorFeatures.exteriorFeatures.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{exteriorFeatures.patioAndPorch &&
				exteriorFeatures.patioAndPorch.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Patio & Porch
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{exteriorFeatures.patioAndPorch.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{exteriorFeatures.poolFeatures &&
				exteriorFeatures.poolFeatures.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Pool Features
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{exteriorFeatures.poolFeatures.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{exteriorFeatures.spaFeatures &&
				exteriorFeatures.spaFeatures.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Spa Features
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{exteriorFeatures.spaFeatures.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{exteriorFeatures.fencing &&
				exteriorFeatures.fencing.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Fencing
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{exteriorFeatures.fencing.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}
		</motion.div>
	);
};

// Construction Details Section
const ConstructionDetails = ({
	constructionDetails
}: {
	constructionDetails?: ConstructionFeatures;
}) => {
	if (!constructionDetails) return null;

	return (
		<motion.div className="mb-12" variants={fadeInUp}>
			<h3 className="text-xl font-light mb-4 text-gray-800">
				Construction Details
			</h3>

			{constructionDetails.architecturalStyle &&
				constructionDetails.architecturalStyle.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Architectural Style
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{constructionDetails.architecturalStyle.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{constructionDetails.constructionMaterials &&
				constructionDetails.constructionMaterials.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Construction Materials
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{constructionDetails.constructionMaterials.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{constructionDetails.foundation &&
				constructionDetails.foundation.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Foundation
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{constructionDetails.foundation.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}

			{constructionDetails.roofType && (
				<div className="mb-6">
					<h4 className="text-lg font-light mb-2 text-gray-700">
						Roof Type
					</h4>
					<p className="text-gray-700">
						{constructionDetails.roofType}
					</p>
				</div>
			)}

			{constructionDetails.isNewConstruction !== undefined && (
				<div className="mb-6">
					<h4 className="text-lg font-light mb-2 text-gray-700">
						New Construction
					</h4>
					<p className="text-gray-700">
						{constructionDetails.isNewConstruction ? "Yes" : "No"}
					</p>
				</div>
			)}
		</motion.div>
	);
};

// Utilities Section
const Utilities = ({ utilities }: { utilities?: UtilityFeatures }) => {
	if (!utilities) return null;

	return (
		<motion.div className="mb-12" variants={fadeInUp}>
			<h3 className="text-xl font-light mb-4 text-gray-800">
				Utilities & Green Energy
			</h3>

			{utilities.electric && utilities.electric.length > 0 && (
				<div className="mb-6">
					<h4 className="text-lg font-light mb-2 text-gray-700">
						Electric
					</h4>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
						{utilities.electric.map(
							(feature: string, index: number) => (
								<li
									key={index}
									className="flex items-center text-gray-700">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-green-500 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{feature}
								</li>
							)
						)}
					</ul>
				</div>
			)}

			{utilities.gas && utilities.gas.length > 0 && (
				<div className="mb-6">
					<h4 className="text-lg font-light mb-2 text-gray-700">
						Gas
					</h4>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
						{utilities.gas.map((feature: string, index: number) => (
							<li
								key={index}
								className="flex items-center text-gray-700">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-green-500 mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
								{feature}
							</li>
						))}
					</ul>
				</div>
			)}

			{utilities.water && utilities.water.length > 0 && (
				<div className="mb-6">
					<h4 className="text-lg font-light mb-2 text-gray-700">
						Water
					</h4>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
						{utilities.water.map(
							(feature: string, index: number) => (
								<li
									key={index}
									className="flex items-center text-gray-700">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-green-500 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{feature}
								</li>
							)
						)}
					</ul>
				</div>
			)}

			{utilities.sewer && utilities.sewer.length > 0 && (
				<div className="mb-6">
					<h4 className="text-lg font-light mb-2 text-gray-700">
						Sewer
					</h4>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
						{utilities.sewer.map(
							(feature: string, index: number) => (
								<li
									key={index}
									className="flex items-center text-gray-700">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-green-500 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									{feature}
								</li>
							)
						)}
					</ul>
				</div>
			)}

			{utilities.greenEnergyFeatures &&
				utilities.greenEnergyFeatures.length > 0 && (
					<div className="mb-6">
						<h4 className="text-lg font-light mb-2 text-gray-700">
							Green Energy Features
						</h4>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							{utilities.greenEnergyFeatures.map(
								(feature: string, index: number) => (
									<li
										key={index}
										className="flex items-center text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								)
							)}
						</ul>
					</div>
				)}
		</motion.div>
	);
};

// Financial Details Section
const FinancialDetails = ({
	financialDetails
}: {
	financialDetails?: FinancialInfo;
}) => {
	if (!financialDetails) return null;

	return (
		<motion.div className="mb-12" variants={fadeInUp}>
			<h3 className="text-xl font-light mb-4 text-gray-800">
				Financial Details
			</h3>

			{financialDetails.pricePerSqFt && (
				<div className="mb-4">
					<h4 className="text-lg font-light mb-1 text-gray-700">
						Price per Square Foot
					</h4>
					<p className="text-gray-700">
						${financialDetails.pricePerSqFt.toLocaleString()}
					</p>
				</div>
			)}

			{financialDetails.taxAssessedValue && (
				<div className="mb-4">
					<h4 className="text-lg font-light mb-1 text-gray-700">
						Tax Assessed Value
					</h4>
					<p className="text-gray-700">
						${financialDetails.taxAssessedValue.toLocaleString()}
					</p>
				</div>
			)}

			{financialDetails.annualTaxAmount && (
				<div className="mb-4">
					<h4 className="text-lg font-light mb-1 text-gray-700">
						Annual Tax Amount
					</h4>
					<p className="text-gray-700">
						${financialDetails.annualTaxAmount.toLocaleString()}
					</p>
				</div>
			)}

			{financialDetails.dateOnMarket && (
				<div className="mb-4">
					<h4 className="text-lg font-light mb-1 text-gray-700">
						Date on Market
					</h4>
					<p className="text-gray-700">
						{new Date(
							financialDetails.dateOnMarket
						).toLocaleDateString()}
					</p>
				</div>
			)}
		</motion.div>
	);
};

// Main PropertyDetails Component
interface PropertyDetailsProps {
	interiorFeatures?: RoomFeatures;
	exteriorFeatures?: ExteriorFeatureTypes;
	constructionDetails?: ConstructionFeatures;
	utilities?: UtilityFeatures;
	financialDetails?: FinancialInfo;
}

const PropertyDetails = ({
	interiorFeatures,
	exteriorFeatures,
	constructionDetails,
	utilities,
	financialDetails
}: PropertyDetailsProps) => {
	const [expanded, setExpanded] = useState(false);

	// Check if we have any additional details to show
	const hasAdditionalDetails =
		interiorFeatures ||
		exteriorFeatures ||
		constructionDetails ||
		utilities ||
		financialDetails;

	if (!hasAdditionalDetails) return null;

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 md:px-8 max-w-7xl">
				<motion.div
					className="mb-8 text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}>
					<h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
						Additional Property Details
					</h2>
					<div className="w-20 h-1 bg-gray-200 mx-auto mb-6"></div>
					<p className="text-gray-600 max-w-3xl mx-auto mb-8">
						Explore the detailed features and specifications of this
						property.
					</p>

					<motion.button
						className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-all duration-300 flex items-center mx-auto"
						onClick={() => setExpanded(!expanded)}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}>
						{expanded ? "Show Less" : "View More Information"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-5 w-5 ml-2 transition-transform duration-300 ${
								expanded ? "rotate-180" : ""
							}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</motion.button>
				</motion.div>

				<AnimatePresence>
					{expanded && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{
								duration: 0.5,
								ease: [0.22, 1, 0.36, 1]
							}}>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div>
									<InteriorFeatures
										interiorFeatures={interiorFeatures}
									/>
									<ExteriorFeatures
										exteriorFeatures={exteriorFeatures}
									/>
								</div>
								<div>
									<ConstructionDetails
										constructionDetails={
											constructionDetails
										}
									/>
									<Utilities utilities={utilities} />
									<FinancialDetails
										financialDetails={financialDetails}
									/>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default PropertyDetails;
