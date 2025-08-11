"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Fix for missing Leaflet icons in Next.js
// Use the DefaultIcon setup to resolve issues with marker icons
// This fixes the broken icon URLs in Leaflet when used with Next.js
const DefaultIcon = L.icon({
	iconUrl: "/images/map/marker-icon.png",
	shadowUrl: "/images/map/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icons for different types of points
const categoryIcons: Record<string, L.Icon> = {
	restaurant: L.icon({
		iconUrl: "/images/map/food-marker.png",
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -30]
	}),
	winery: L.icon({
		iconUrl: "/images/map/winery-marker.png",
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -30]
	}),
	shopping: L.icon({
		iconUrl: "/images/map/shopping-marker.png",
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -30]
	}),
	attraction: L.icon({
		iconUrl: "/images/map/attraction-marker.png",
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -30]
	}),
	default: DefaultIcon
};

// Property map component types
interface PointOfInterest {
	name: string;
	position: [number, number];
	category: string;
	description: string;
	highlights: string[];
}

interface PropertyMapNewProps {
	propertyLocation: [number, number];
	propertyName: string;
	pointsOfInterest: PointOfInterest[];
}

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const PropertyMapNew = ({
	propertyLocation,
	propertyName,
	pointsOfInterest = []
}: PropertyMapNewProps) => {
	const [selectedPOI, setSelectedPOI] = useState<PointOfInterest | null>(
		null
	);

	// Get icon based on category
	const getIcon = (category: string): L.Icon => {
		const normalizedCategory = category.toLowerCase();
		return categoryIcons[normalizedCategory] || categoryIcons.default;
	};

	// PropertyIcon for highlighting the main property
	const PropertyIcon = L.icon({
		iconUrl: "/images/map/home-marker.png",
		iconSize: [40, 40],
		iconAnchor: [20, 40],
		popupAnchor: [0, -38]
	});

	return (
		<section className="py-16 border-t border-zinc-200">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="w-full lg:w-3/4">
					<h2 className="text-2xl font-light text-zinc-800 mb-6 tracking-wide">
						Location
					</h2>

					<motion.div
						className="h-[500px] rounded-sm overflow-hidden shadow-sm border border-zinc-200"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}>
						<MapContainer
							center={propertyLocation}
							zoom={13}
							style={{ height: "100%", width: "100%" }}
							scrollWheelZoom={false}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>

							{/* Main property marker */}
							<Marker
								position={propertyLocation}
								icon={PropertyIcon}>
								<Popup>
									<div className="text-center p-1">
										<h3 className="font-medium text-zinc-800">
											{propertyName}
										</h3>
										<p className="text-sm text-zinc-600">
											Your property
										</p>
									</div>
								</Popup>
							</Marker>

							{/* Points of interest markers */}
							{pointsOfInterest.map((poi, index) => (
								<Marker
									key={`poi-${index}`}
									position={poi.position}
									icon={getIcon(poi.category)}
									eventHandlers={{
										click: () => {
											setSelectedPOI(poi);
										}
									}}>
									<Popup>
										<div className="p-1">
											<h3 className="font-medium text-zinc-800">
												{poi.name}
											</h3>
											<p className="text-xs text-zinc-500 uppercase">
												{poi.category}
											</p>
										</div>
									</Popup>
								</Marker>
							))}
						</MapContainer>
					</motion.div>
				</div>

				<div className="w-full lg:w-1/4">
					<h2 className="text-2xl font-light text-zinc-800 mb-6 tracking-wide">
						Points of Interest
					</h2>

					<div className="space-y-4 overflow-auto max-h-[500px] pr-2">
						{pointsOfInterest.length > 0 ? (
							pointsOfInterest.map((poi, index) => (
								<motion.div
									key={`poi-detail-${index}`}
									className={`p-4 border rounded-sm cursor-pointer transition-colors duration-200 ${
										selectedPOI?.name === poi.name
											? "border-emerald-600 bg-emerald-50"
											: "border-zinc-200 hover:border-zinc-300"
									}`}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: index * 0.1,
										duration: 0.5,
										ease: [0.16, 1, 0.3, 1]
									}}
									onClick={() => setSelectedPOI(poi)}>
									<h3 className="font-medium text-zinc-800 mb-1">
										{poi.name}
									</h3>
									<p className="text-xs text-zinc-500 uppercase mb-2">
										{poi.category}
									</p>

									{poi.description && (
										<p className="text-sm text-zinc-600 mb-2 font-light">
											{poi.description}
										</p>
									)}

									{poi.highlights &&
										poi.highlights.length > 0 && (
											<div className="mt-2">
												<p className="text-xs font-medium text-zinc-700 mb-1">
													Highlights:
												</p>
												<ul className="text-xs text-zinc-600 space-y-1">
													{poi.highlights.map(
														(highlight, idx) => (
															<li
																key={`highlight-${idx}`}
																className="flex items-start font-light">
																<span className="text-emerald-600 mr-1">
																	•
																</span>
																{highlight}
															</li>
														)
													)}
												</ul>
											</div>
										)}
								</motion.div>
							))
						) : (
							<p className="text-zinc-500 font-light">
								No points of interest to display.
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PropertyMapNew;
