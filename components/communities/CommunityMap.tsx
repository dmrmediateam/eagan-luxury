"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { motion } from "framer-motion";
import L from "leaflet";
import { useMap } from "react-leaflet";

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

// Fix Leaflet icon issues
const createIcon = (color: string) => {
	return new L.Icon({
		iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
		shadowUrl:
			"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41]
	});
};

// Category to color mapping
const categoryColors: Record<string, string> = {
	park: "green",
	school: "blue",
	shopping: "violet",
	restaurant: "orange",
	recreation: "cyan",
	healthcare: "red",
	landmark: "yellow",
	transportation: "grey",
	other: "black"
};

interface AreaOfInterest {
	name: string;
	category: string;
	description?: string;
	location: {
		lat: number;
		lng: number;
	};
	image?: {
		url: string;
		alt: string;
	};
}

interface CommunityMapProps {
	areas: AreaOfInterest[];
	communityLocation?: {
		lat: number;
		lng: number;
	};
	communityRadius?: number; // Radius in miles from Sanity
	selectedArea?: AreaOfInterest | null;
	setSelectedArea?: React.Dispatch<
		React.SetStateAction<AreaOfInterest | null>
	>;
}

// Component to handle map view changes
const MapController = ({
	center,
	zoom
}: {
	center: [number, number];
	zoom: number;
}) => {
	const map = useMap();

	useEffect(() => {
		if (typeof window !== "undefined") {
			map.setView(center, zoom);
		}
	}, [center, map, zoom]);

	return null;
};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function CommunityMap({
	areas,
	communityLocation,
	communityRadius = 1, // Default to 1 mile if not provided
	selectedArea,
	setSelectedArea
}: CommunityMapProps) {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [mapRef] = useState<React.MutableRefObject<LeafletMap | null>>(
		React.useRef(null)
	);
	const [error, setError] = useState<string | null>(null);
	const [mapKey] = useState<number>(0);

	// Default center to first area if communityLocation not provided
	const defaultCenter = communityLocation
		? [communityLocation.lat, communityLocation.lng]
		: areas.length > 0
			? [areas[0].location.lat, areas[0].location.lng]
			: [40.7128, -74.006]; // Default to NYC if no locations

	const [center, setCenter] = useState<[number, number]>(
		defaultCenter as [number, number]
	);
	const [zoom, setZoom] = useState(13);

	// Update center when selectedArea changes
	useEffect(() => {
		if (selectedArea) {
			setCenter([selectedArea.location.lat, selectedArea.location.lng]);
			setZoom(15);
		} else if (communityLocation) {
			setCenter([communityLocation.lat, communityLocation.lng]);
			setZoom(13);
		}
	}, [selectedArea, communityLocation]);

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
	}, [mapRef]);

	// Get unique categories from areas
	const categories = Array.from(new Set(areas.map((area) => area.category)));

	// Filter areas by active category
	const filteredAreas = activeCategory
		? areas.filter((area) => area.category === activeCategory)
		: areas;

	// Animation variants
	const headerContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const headerItemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const dividerVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: "4rem",
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeInOut"
			}
		}
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	return (
		<section className="py-12 lg:py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="text-left mb-16">
					<motion.div
						className="flex items-center justify-between w-fit gap-4 text-gray-800"
						variants={headerContainerVariants}>
						<motion.p
							className="text-xl font-light"
							variants={headerItemVariants}>
							02
						</motion.p>
						<motion.div
							className="h-[1px] mx-auto bg-gray-800"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-xl font-light"
							variants={headerItemVariants}>
							Community
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl md:text-6xl mt-4 font-light tracking-wide text-gray-800"
						variants={titleVariants}>
						Location & Surroundings
					</motion.h2>
					<motion.p
						className="text-gray-600 mt-6 max-w-3xl"
						variants={headerItemVariants}>
						Explore the community location and discover nearby
						points of interest in the area.
					</motion.p>
				</motion.div>

				{/* Category filters */}
				{categories.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.2,
							ease: [0.22, 1, 0.36, 1]
						}}
						className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
						<motion.button
							onClick={() => setActiveCategory(null)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-300 ${
								activeCategory === null
									? "bg-blue-600 text-white font-light"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200 font-light"
							}`}>
							All
						</motion.button>
						{categories.map((category) => (
							<motion.button
								key={category}
								onClick={() => setActiveCategory(category)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-300 ${
									activeCategory === category
										? "bg-blue-600 text-white font-light"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200 font-light"
								}`}>
								{capitalizeFirstLetter(category)}
							</motion.button>
						))}
					</motion.div>
				)}

				{/* Map */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="bg-white rounded-xl shadow-xl overflow-hidden">
					<div className="h-[600px]">
						{isMounted && (
							<MapContainer
								key={`map-container-${mapKey}`}
								center={center}
								zoom={zoom}
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

								<MapController center={center} zoom={zoom} />

								{/* Remove the community center marker, keep only the radius circle */}
								{/* Community radius circle */}
								{communityLocation && (
									<Circle
										center={[
											communityLocation.lat,
											communityLocation.lng
										]}
										radius={communityRadius * 1609} // Convert miles to meters (1 mile = 1609 meters)
										pathOptions={{
											fillColor: "#4a83ec",
											fillOpacity: 0.1,
											color: "#4a83ec",
											weight: 2
										}}
									/>
								)}

								{/* Area markers */}
								{filteredAreas.map((area, index) => (
									<Marker
										key={index}
										position={[
											area.location.lat,
											area.location.lng
										]}
										icon={createIcon(
											categoryColors[area.category] ||
												categoryColors.other
										)}
										eventHandlers={{
											click: () => {
												setSelectedArea?.(area);
											}
										}}>
										<Popup className="custom-popup">
											<div className="p-4 max-w-xs">
												<h3 className="font-bold text-lg text-gray-800 mb-2 border-b border-gray-200 pb-2">
													{area.name}
												</h3>
												<p className="text-xs text-gray-500 mb-1 capitalize">
													{capitalizeFirstLetter(
														area.category
													)}
												</p>
												{area.description && (
													<p className="text-sm text-gray-600 mb-3">
														{area.description}
													</p>
												)}
											</div>
										</Popup>
									</Marker>
								))}
							</MapContainer>
						)}
						{error && (
							<div className="h-full flex items-center justify-center bg-gray-100">
								<p className="text-red-500">{error}</p>
							</div>
						)}
					</div>

					{/* Area Cards */}
					<div className="p-6">
						<h2 className="text-2xl font-semibold mb-4 text-gray-800">
							Nearby Points of Interest
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{filteredAreas.map((area, idx) => (
								<div
									key={`area-${area.name}-${idx}`}
									className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all border border-gray-100 cursor-pointer"
									onClick={() => setSelectedArea?.(area)}>
									<h3 className="font-semibold text-gray-800">
										{area.name}
									</h3>
									<p className="text-xs text-gray-500 mb-1 capitalize">
										{capitalizeFirstLetter(area.category)}
									</p>
									{area.description && (
										<p className="text-sm text-gray-600 mb-2">
											{area.description}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
