"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { motion } from "framer-motion";
import Image from "next/image";

// Dynamic imports for Leaflet components (client-only)
const MapContainer = dynamic(
	() => import("react-leaflet").then((mod) => mod.MapContainer),
	{ ssr: false }
);
const TileLayer = dynamic(
	() => import("react-leaflet").then((mod) => mod.TileLayer),
	{ ssr: false }
);
const Marker = dynamic(
	() => import("react-leaflet").then((mod) => mod.Marker),
	{ ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
	ssr: false
});
const Circle = dynamic(
	() => import("react-leaflet").then((mod) => mod.Circle),
	{ ssr: false }
);

// Define types
interface PointOfInterest {
	name: string;
	position: [number, number];
	category: string;
	description: string;
	highlights?: string[];
}

interface PropertyMapProps {
	propertyLocation: [number, number];
	propertyName: string;
	pointsOfInterest?: PointOfInterest[];
}

// Animation variants
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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const PropertyMap = ({
	propertyLocation,
	propertyName,
	pointsOfInterest = []
}: PropertyMapProps) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const mapRef = useRef<LeafletMap | null>(null);
	const [error, setError] = useState<string | null>(null);
	// mapKey is used to force remount of the map when needed
	const [mapKey] = useState<number>(0);

	// Load Leaflet dynamically on client-side mount
	useEffect(() => {
		let mounted = true;

		if (typeof window !== "undefined") {
			import("leaflet")
				.then((L) => {
					if (!mounted) return;

					// Fix default marker icons
					delete (
						L.Icon.Default.prototype as { _getIconUrl?: unknown }
					)._getIconUrl;
					L.Icon.Default.mergeOptions({
						iconRetinaUrl: "/images/marker-icon-2x.png",
						iconUrl: "/images/marker-icon.png",
						shadowUrl: "/images/marker-shadow.png"
					});
					setIsMounted(true);
				})
				.catch((err) => {
					if (!mounted) return;
					console.error("Failed to load Leaflet:", err);
					setError("Failed to initialize map");
				});
		}

		// Cleanup function
		return () => {
			mounted = false;
			if (mapRef.current) {
				mapRef.current.remove();
				mapRef.current = null;
			}
		};
	}, []);

	// Get unique categories from points of interest
	const categories = Array.from(
		new Set(pointsOfInterest.map((poi) => poi.category))
	);

	// Filter points of interest by active category
	const filteredPOIs = activeCategory
		? pointsOfInterest.filter((poi) => poi.category === activeCategory)
		: pointsOfInterest;

	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					<div className="flex flex-col items-center justify-center">
						<motion.div
							variants={logoVariants}
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
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							LOCATION & SURROUNDINGS
						</motion.h2>
						<motion.p
							variants={itemVariants}
							className="text-zinc-600 text-base md:text-lg mt-8 max-w-2xl mx-auto text-center font-extralight leading-relaxed">
							Explore the property location and discover nearby
							points of interest in the area.
						</motion.p>
					</div>

					{/* Category filters */}
					{categories.length > 0 && (
						<motion.div
							variants={containerVariants}
							className="flex flex-wrap justify-center gap-2 mb-8">
							<motion.button
								onClick={() => setActiveCategory(null)}
								variants={itemVariants}
								className={`px-4 md:px-6 py-2 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:scale-[0.98] ${
									activeCategory === null
										? "bg-zinc-700 text-white font-light"
										: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-light"
								}`}>
								All
							</motion.button>
							{categories.map((category) => (
								<motion.button
									key={category}
									onClick={() => setActiveCategory(category)}
									variants={itemVariants}
									className={`px-4 md:px-6 py-2 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:scale-[0.98] ${
										activeCategory === category
											? "bg-zinc-700 text-white font-light"
											: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-light"
									}`}>
									{category}
								</motion.button>
							))}
						</motion.div>
					)}

					{/* Map */}
					<motion.div
						variants={itemVariants}
						className="bg-white rounded-md overflow-hidden shadow-sm border border-zinc-200">
						<div className="h-[600px]">
							{isMounted && (
								<MapContainer
									key={`map-container-${mapKey}`}
									center={propertyLocation}
									zoom={14}
									style={{ height: "100%", width: "100%" }}
									scrollWheelZoom={false}
									zoomControl={true}
									attributionControl={false}
									ref={mapRef}>
									<TileLayer
										url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
										maxZoom={18}
										subdomains="abcd"
									/>

									{/* Property marker */}
									<Marker position={propertyLocation}>
										<Popup className="custom-popup">
											<div className="p-4 max-w-xs">
												<h3 className="font-medium text-lg text-zinc-700 mb-2 border-b border-zinc-200 pb-2">
													{propertyName}
												</h3>
												<p className="text-sm text-zinc-600 font-light">
													Property Location
												</p>
											</div>
										</Popup>
									</Marker>

									{/* 1-mile radius circle */}
									<Circle
										center={propertyLocation}
										radius={1609} // 1 mile in meters
										pathOptions={{
											fillColor: "#71717a",
											fillOpacity: 0.1,
											color: "#71717a",
											weight: 2
										}}
									/>

									{/* Points of interest markers */}
									{filteredPOIs.map((poi, idx) => (
										<Marker
											key={`marker-${poi.name}-${idx}`}
											position={poi.position}>
											<Popup className="custom-popup">
												<div className="p-4 max-w-xs">
													<h3 className="font-medium text-lg text-zinc-700 mb-2 border-b border-zinc-200 pb-2">
														{poi.name}
													</h3>
													<p className="text-xs text-zinc-500 mb-1 font-light">
														{poi.category}
													</p>
													<p className="text-sm text-zinc-600 mb-3 font-light">
														{poi.description}
													</p>
													{poi.highlights &&
														poi.highlights.length >
															0 && (
															<div className="flex flex-wrap gap-2 mt-2">
																{poi.highlights.map(
																	(
																		highlight,
																		i
																	) => (
																		<span
																			key={
																				i
																			}
																			className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full font-light">
																			{
																				highlight
																			}
																		</span>
																	)
																)}
															</div>
														)}
												</div>
											</Popup>
										</Marker>
									))}
								</MapContainer>
							)}
							{error && (
								<div className="h-full flex items-center justify-center bg-zinc-100">
									<p className="text-red-500 font-light">
										{error}
									</p>
								</div>
							)}
						</div>

						{/* Area Cards */}
						<div className="p-8">
							<h3 className="text-2xl text-zinc-600 font-light tracking-wide mb-6">
								NEARBY POINTS OF INTEREST
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredPOIs.map((poi, idx) => (
									<div
										key={`area-${poi.name}-${idx}`}
										className="p-5 bg-zinc-50 border border-zinc-200 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-zinc-100 hover:shadow-sm">
										<h4 className="font-medium text-zinc-700 mb-1">
											{poi.name}
										</h4>
										<p className="text-xs text-zinc-500 mb-3 font-light">
											{poi.category}
										</p>
										<p className="text-sm text-zinc-600 mb-4 font-light">
											{poi.description}
										</p>
										{poi.highlights &&
											poi.highlights.length > 0 && (
												<div className="flex flex-wrap gap-2">
													{poi.highlights.map(
														(highlight, i) => (
															<span
																key={i}
																className="text-xs bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full font-light">
																{highlight}
															</span>
														)
													)}
												</div>
											)}
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
};

export default PropertyMap;
