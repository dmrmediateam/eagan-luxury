"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for the images
interface PlanImage {
	src: string;
	alt: string;
	downloadUrl: string;
}

interface PropertyPlansViewerProps {
	floorPlans?: PlanImage[];
	sitePlans?: PlanImage[];
	className?: string;
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

// Fallback images
const fallbackFloorPlan: PlanImage = {
	src: "/media/map.png",
	alt: "Default Floor Plan",
	downloadUrl: "/media/map.png"
};

const fallbackSitePlan: PlanImage = {
	src: "/media/map.png",
	alt: "Default Site Plan",
	downloadUrl: "/media/map.png"
};

// Plans section component with improved layout
const PlansSection = ({
	title,
	icon: Icon,
	plans
}: {
	title: string;
	icon: React.ElementType;
	plans: PlanImage[];
}) => {
	const [isLoading, setIsLoading] = useState<boolean[]>(
		Array(plans.length).fill(true)
	);

	const handleImageLoad = (index: number) => {
		setIsLoading((prev) => {
			const newState = [...prev];
			newState[index] = false;
			return newState;
		});
	};

	return (
		<motion.div className="mb-8 w-full" variants={itemVariants}>
			<div className="flex items-center mb-6">
				<Icon className="w-5 h-5 text-zinc-500 mr-3" />
				<h3 className="text-xl font-light text-zinc-800 tracking-wide">
					{title}
				</h3>
			</div>

			<div className="flex flex-col gap-8 w-full">
				{plans.map((plan, index) => (
					<div
						key={`${title.toLowerCase()}-${index}`}
						className="group w-full">
						<div
							className={cn(
								"relative aspect-[4/3] overflow-hidden border border-zinc-200 w-full",
								isLoading[index]
									? "animate-pulse bg-zinc-100"
									: ""
							)}>
							<Image
								src={plan.src}
								alt={plan.alt}
								fill
								className={cn(
									"object-contain transition-opacity duration-500",
									isLoading[index]
										? "opacity-0"
										: "opacity-100"
								)}
								sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
								quality={90}
								priority={index < 1}
								onLoad={() => handleImageLoad(index)}
							/>
						</div>

						<div className="py-4 flex justify-between items-center w-full">
							<p className="text-zinc-800 font-light text-lg">
								{plan.alt}
							</p>
							<motion.a
								href={plan.downloadUrl}
								download
								className="flex items-center justify-center text-zinc-700 hover:text-zinc-900 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<Download className="w-4 h-4 mr-2" />
								<span className="text-sm font-medium">
									Download
								</span>
							</motion.a>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

const PropertyPlansViewer = ({
	floorPlans = [],
	sitePlans = [],
	className = ""
}: PropertyPlansViewerProps) => {
	// If no plans are provided, use the fallbacks
	const floorPlansToDisplay =
		floorPlans.length > 0 ? floorPlans : [fallbackFloorPlan];
	const sitePlansToDisplay =
		sitePlans.length > 0 ? sitePlans : [fallbackSitePlan];

	return (
		<section className={cn("py-16 w-full", className)}>
			<h2 className="text-2xl font-light text-zinc-800 mb-8 tracking-wide">
				Property Plans
			</h2>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="grid grid-cols-1 xl:grid-cols-2 gap-12 w-full">
				{/* Floor Plans Section */}
				<PlansSection
					title="Floor Plans"
					icon={Grid}
					plans={floorPlansToDisplay}
				/>

				{/* Site Plans Section */}
				<PlansSection
					title="Site Plans"
					icon={MapPin}
					plans={sitePlansToDisplay}
				/>
			</motion.div>
		</section>
	);
};

export default PropertyPlansViewer;

// Compatibility exports for existing code that might be using the old components
export const FloorPlanViewer = ({
	floorPlans = []
}: {
	floorPlans?: PlanImage[];
}) => <PropertyPlansViewer floorPlans={floorPlans} />;

export const SitePlanViewer = ({
	sitePlans = []
}: {
	sitePlans?: PlanImage[];
}) => <PropertyPlansViewer sitePlans={sitePlans} />;
