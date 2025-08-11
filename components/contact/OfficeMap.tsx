"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Location } from "@/components/home/MapComponent";

// Use dynamic import for the Map component (Leaflet requires client-side rendering)
const Map = dynamic(
	() =>
		import("@/components/home/MapComponent").then(
			(mod) => mod.MapComponent
		),
	{
		ssr: false,
		loading: () => (
			<div className="w-full h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
				<p className="text-gray-400">Loading map...</p>
			</div>
		)
	}
);

// Office location data
const officeLocation: Location[] = [
	{
		id: "michaud-rauers-office",
		title: "Legendary Real Estate",
		description: "Our office in Lake Geneva, Wisconsin",
		coordinates: {
			lat: 35.0524068,
			lng: -83.2004571
		}
	}
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2
		}
	}
};

const mapVariants = {
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

export function OfficeMap() {
	const [isClient, setIsClient] = useState(false);

	// Set isClient to true when the component is mounted
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<section className="py-20 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<SectionTitle
					title="Find Us"
					subtitle="Visit our office in Lake Geneva, Wisconsin"
				/>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}>
					<motion.div
						className="w-full h-[600px] overflow-hidden shadow-lg"
						variants={mapVariants}>
						{isClient && (
							<Map
								locations={officeLocation}
								center={[
									officeLocation[0].coordinates.lat,
									officeLocation[0].coordinates.lng
								]}
								zoom={15}
								hoveredLocation={null}
							/>
						)}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
