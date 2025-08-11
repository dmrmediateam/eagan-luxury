"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";
import { SectionTitle } from "../ui/SectionTitle";

// Define the Location interface locally to avoid import issues
interface Location {
	id: string;
	title: string;
	description: string;
	coordinates: {
		lat: number;
		lng: number;
	};
}

// Use a dynamic import with proper typing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Works at runtime but has type conflicts
const Map = dynamic(
	() => import("./MapComponent").then((mod) => mod.MapComponent),
	{
		ssr: false
	}
);

// Enhanced animation variants for a more premium, luxury experience
const textVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
			delay: custom * 0.15,
			ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for a more elegant motion
		}
	})
};

// Hover card animation variants
const hoverCardVariants = {
	hidden: { opacity: 0, scale: 0.98, y: 10 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: [0.22, 1, 0.36, 1]
		}
	},
	exit: {
		opacity: 0,
		scale: 0.98,
		y: 5,
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

// Lake Geneva, WI luxury locations
const ncLocations: Location[] = [
	{
		id: "legendary-office",
		title: "Legendary Real Estate Office",
		description:
			"Our primary office location serving luxury clients throughout Lake Geneva",
		coordinates: {
			lat: 42.5917,
			lng: -88.4334
		}
	},
	{
		id: "williams-bay",
		title: "Williams Bay",
		description:
			"Charming lakefront village with stunning estates and private beaches",
		coordinates: {
			lat: 42.5778,
			lng: -88.5409
		}
	},
	{
		id: "fontana",
		title: "Fontana-on-Geneva-Lake",
		description:
			"Exclusive resort community with luxury lakefront properties and Abbey Resort",
		coordinates: {
			lat: 42.5436,
			lng: -88.5751
		}
	},
	{
		id: "lake-geneva",
		title: "Lake Geneva Downtown",
		description:
			"Historic downtown with upscale shopping, dining, and luxury estates",
		coordinates: {
			lat: 42.5917,
			lng: -88.4334
		}
	},
	{
		id: "delavan",
		title: "Delavan Lake",
		description:
			"Premier lake community with waterfront properties and country clubs",
		coordinates: {
			lat: 42.6331,
			lng: -88.6437
		}
	}
];

// Hover card component for locations
const LocationHoverCard = ({
	location,
	visible
}: {
	location: Location | null;
	visible: boolean;
}) => {
	if (!location) return null;

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={hoverCardVariants}
					className="absolute right-4 bottom-4 bg-white px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] z-50 border border-luxury-lightgray max-w-xs w-full">
					<h4 className="text-luxury-black font-serif text-lg mb-2 relative inline-block">
						{location.title}
						<span className="absolute -bottom-1 left-0 w-8 h-px bg-luxury-red"></span>
					</h4>
					<p className="text-luxury-darkgray/80 text-sm leading-relaxed mt-3">
						{location.description}
					</p>
					<Link
						href={`/listings/active`}
						className="mt-4 inline-flex items-center text-luxury-red text-xs uppercase tracking-wider font-sans group w-fit">
						<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
						View Properties
						<span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
							→
						</span>
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export function LuxuryLocations() {
	// State to track when map should be loaded
	const [isClient, setIsClient] = useState(false);
	// State to track currently hovered location
	const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
	// State to track hover card visibility
	const [hoverCardVisible, setHoverCardVisible] = useState(false);
	// State to track current location for hover card
	const [currentHoverLocation, setCurrentHoverLocation] =
		useState<Location | null>(null);

	// Set isClient to true when component mounts
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Handle hover location change
	useEffect(() => {
		if (hoveredLocation) {
			const location =
				ncLocations.find((loc) => loc.id === hoveredLocation) || null;
			setCurrentHoverLocation(location);
			setHoverCardVisible(true);
		} else {
			// Add a small delay before hiding the card for a smoother experience
			const timeout = setTimeout(() => {
				setHoverCardVisible(false);
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [hoveredLocation]);

	return (
		<section className="bg-white py-24 md:py-32" id="luxury-locations">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				{/* Header */}
				<SectionTitle
					title="Our Locations"
					subtitle="Discover exceptional properties in Lake Geneva's most prestigious waterfront communities"
					className="mb-20"
				/>

				{/* Map Container */}
				<div className="grid grid-cols-1 2xl:grid-cols-3 gap-0 items-stretch h-[950px] shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
					{/* Left: Interactive Leaflet Map */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={3}
						variants={textVariants}
						className="relative w-full 2xl:col-span-2 h-[950px] overflow-hidden">
						{isClient && (
							<>
								<Map
									locations={ncLocations}
									center={
										[42.5917, -88.4334] as [number, number]
									}
									zoom={11}
									hoveredLocation={hoveredLocation}
								/>
								<LocationHoverCard
									location={currentHoverLocation}
									visible={
										hoverCardVisible &&
										!!currentHoverLocation
									}
								/>
							</>
						)}
					</motion.div>

					{/* Right: Location Legend & Description */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={4}
						variants={textVariants}
						className="w-full 2xl:col-span-1 bg-white p-10 md:p-12 lg:p-14 flex flex-col justify-between h-full">
						<div>
							<h3 className="font-serif text-2xl text-luxury-black mb-8 relative inline-block">
								Lakefront Luxury Expertise
								<span className="absolute -bottom-3 left-0 w-12 h-px bg-luxury-red"></span>
							</h3>

							<p className="text-luxury-darkgray/80 text-base mb-10 leading-relaxed">
								With deep knowledge of Lake Geneva&apos;s most
								coveted waterfront properties, The Legendary
								Real Estate Team offers unparalleled guidance in
								navigating the region&apos;s luxury real estate
								landscape. Each lakefront community presents
								distinctive character and lifestyle advantages
								in Wisconsin&apos;s premier resort destination.
							</p>

							{/* Location List with hover interaction */}
							<div className="space-y-6 mb-12">
								{ncLocations.map((location) => (
									<div
										key={location.id}
										className={`transition-all duration-300 cursor-pointer group ${
											hoveredLocation === location.id
												? "translate-x-1"
												: ""
										}`}
										onMouseEnter={() =>
											setHoveredLocation(location.id)
										}
										onMouseLeave={() =>
											setHoveredLocation(null)
										}>
										<div className="flex gap-4 items-start">
											<div
												className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
													hoveredLocation ===
													location.id
														? "bg-luxury-red scale-150"
														: "bg-luxury-lightgray group-hover:bg-luxury-red"
												}`}></div>
											<div className="flex-1 pb-6 border-b border-luxury-lightgray">
												<p className="font-serif text-luxury-black text-lg mb-1">
													{location.title}
												</p>
												<p className="text-sm text-luxury-darkgray/70 leading-relaxed">
													{location.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* CTA Link */}
						<Link
							href="/listings/active"
							className="inline-flex items-center px-8 py-3.5 bg-luxury-red text-white hover:bg-luxury-darkred transition-all duration-300 text-sm uppercase tracking-wider font-sans w-fit self-start">
							Explore Our Properties
							<span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
								→
							</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
