"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Use a dynamic import with proper typing for Map component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Works at runtime but has type conflicts
const Map = dynamic(
	() =>
		import("@/components/home/MapComponent").then(
			(mod) => mod.MapComponent
		),
	{
		ssr: false
	}
);

// Define interfaces for component props
export interface EstateFeature {
	id: string;
	title: string;
	description: string;
	coordinates: [number, number];
	category: "building" | "garden" | "recreation" | "viewpoint" | "entrance";
}

export interface Location {
	id: string;
	title: string;
	description: string;
	coordinates: {
		lat: number;
		lng: number;
	};
}

interface EstateMapNewProps {
	estateFeatures: EstateFeature[];
	propertyLocations: Location[];
	estateName: string;
	estateDescription: string;
	estateWebsite?: string;
	mapCenter: [number, number];
	mapZoom?: number;
}

const EstateMapNew = ({
	estateFeatures,
	propertyLocations,
	estateName,
	estateDescription,
	estateWebsite,
	mapCenter,
	mapZoom = 14
}: EstateMapNewProps) => {
	// State for client-side rendering of map
	const [isClient, setIsClient] = useState(false);
	const [hoveredFeatureId, setHoveredFeatureId] = useState<string | null>(
		null
	);
	const mapContainerRef = useRef<HTMLDivElement>(null);

	// Convert estateFeatures to locations format for the map
	const estateLocations: Location[] = estateFeatures.map((feature) => ({
		id: feature.id,
		title: feature.title,
		description: feature.description,
		coordinates: {
			lat: feature.coordinates[0],
			lng: feature.coordinates[1]
		}
	}));

	// Add property locations
	const allLocations = [...estateLocations, ...propertyLocations];

	// Set isClient to true when component mounts and add style fix for leaflet container
	useEffect(() => {
		setIsClient(true);

		// Add style to ensure Leaflet container fills its parent completely
		const style = document.createElement("style");
		style.innerHTML = `
			.leaflet-container {
				height: 100% !important;
				width: 100% !important;
				margin: 0 !important;
				padding: 0 !important;
			}
		`;
		document.head.appendChild(style);

		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<section className="py-12 lg:py-24" id="estate-map">
			<SectionTitle
				title="Estate Map"
				subtitle="Explore the exceptional features of this estate"
				className="mb-16"
			/>

			<div className="flex flex-col 2xl:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
				{/* Left: Interactive Leaflet Map */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="relative w-full 2xl:w-2/3 h-[700px] lg:h-[800px] xl:h-[850px] 2xl:h-[900px] overflow-hidden">
					{isClient && (
						<div
							ref={mapContainerRef}
							className="absolute inset-0 m-0 p-0">
							<Map
								locations={allLocations}
								center={mapCenter}
								zoom={mapZoom}
								hoveredLocation={hoveredFeatureId}
							/>
						</div>
					)}
				</motion.div>

				{/* Right: Estate Features Legend */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="w-full 2xl:w-1/3 bg-white p-10 md:p-12 lg:p-14 flex flex-col justify-between">
					<div>
						<h3 className="font-serif text-2xl text-[#1A1A1A] mb-8 relative inline-block">
							{estateName}
							<span className="absolute -bottom-3 left-0 w-12 h-px bg-[#B08D57]"></span>
						</h3>

						<p className="text-[#2B2B2B]/80 text-base mb-10 leading-relaxed">
							{estateDescription}
						</p>

						{/* Estate Features Categories */}
						<div className="mb-8">
							<h4 className="text-[#1A1A1A] font-medium text-sm uppercase tracking-wider mb-4">
								Estate Features
							</h4>
							<div className="flex flex-wrap gap-3">
								{[
									"building",
									"garden",
									"recreation",
									"viewpoint",
									"entrance"
								].map((category) => (
									<span
										key={category}
										className="px-3 py-1 border border-[#B08D57] text-[#B08D57] text-xs rounded-full cursor-pointer hover:bg-[#B08D57] hover:text-white transition-colors duration-300"
										onClick={() => {
											const featuresInCategory =
												estateFeatures.filter(
													(f) =>
														f.category === category
												);
											if (featuresInCategory.length > 0) {
												setHoveredFeatureId(
													featuresInCategory[0].id
												);
											}
										}}>
										{category.charAt(0).toUpperCase() +
											category.slice(1) +
											"s"}
									</span>
								))}
							</div>
						</div>

						{/* Estate Features List */}
						<div className="space-y-6 mb-12 h-[350px] overflow-y-auto pr-2">
							{estateFeatures.map((feature) => (
								<div
									key={feature.id}
									className={`transition-all duration-300 cursor-pointer group ${
										hoveredFeatureId === feature.id
											? "translate-x-1"
											: ""
									}`}
									onMouseEnter={() =>
										setHoveredFeatureId(feature.id)
									}
									onMouseLeave={() =>
										setHoveredFeatureId(null)
									}>
									<div className="flex gap-4 items-start">
										<div
											className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
												hoveredFeatureId === feature.id
													? "bg-[#B08D57] scale-150"
													: "bg-[#E5E5E5] group-hover:bg-[#B08D57]"
											}`}></div>
										<div className="flex-1 pb-6 border-b border-[#F0F0F0]">
											<p className="font-serif text-[#1A1A1A] text-lg mb-1">
												{feature.title}
											</p>
											<p className="text-sm text-[#2B2B2B]/70 leading-relaxed">
												{feature.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* CTA Section - only shown if estateWebsite is provided */}
					{estateWebsite && (
						<Link
							href={estateWebsite}
							target="_blank"
							className="inline-flex items-center px-8 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 text-sm uppercase tracking-wider font-sans w-fit self-start group">
							Visit Estate Website
							<span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
								→
							</span>
						</Link>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default EstateMapNew;
