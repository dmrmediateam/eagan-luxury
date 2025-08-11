"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapWithNoSSR = dynamic(() => import("./CommunityMap"), {
	ssr: false,
	loading: () => (
		<div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
	)
});

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

interface CommunityAreasProps {
	areas: AreaOfInterest[];
	communityLocation?: {
		lat: number;
		lng: number;
	};
	communityName: string;
}

export default function CommunityAreas({
	areas,
	communityLocation,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	communityName // Keep the parameter but mark it as intentionally unused
}: CommunityAreasProps) {
	const [selectedArea, setSelectedArea] = useState<AreaOfInterest | null>(
		null
	);

	// Category icons/colors mapping
	const categoryIcons: Record<string, { icon: string; color: string }> = {
		park: { icon: "🌳", color: "bg-green-100 text-green-800" },
		school: { icon: "🏫", color: "bg-blue-100 text-blue-800" },
		shopping: { icon: "🛍️", color: "bg-purple-100 text-purple-800" },
		restaurant: { icon: "🍽️", color: "bg-orange-100 text-orange-800" },
		recreation: { icon: "🏊", color: "bg-cyan-100 text-cyan-800" },
		healthcare: { icon: "🏥", color: "bg-red-100 text-red-800" },
		landmark: { icon: "🏛️", color: "bg-amber-100 text-amber-800" },
		transportation: { icon: "🚆", color: "bg-slate-100 text-slate-800" },
		other: { icon: "📍", color: "bg-gray-100 text-gray-800" }
	};

	return (
		<section className="mb-12">
			<h2 className="text-3xl font-semibold mb-6">Areas of Interest</h2>

			{/* Map */}
			<div className="mb-8 rounded-lg overflow-hidden shadow-md">
				<MapWithNoSSR
					areas={areas}
					communityLocation={communityLocation}
					selectedArea={selectedArea}
					setSelectedArea={setSelectedArea}
				/>
			</div>

			{/* Areas List */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{areas.map((area, index) => (
					<div
						key={index}
						className={`p-4 rounded-lg border transition-all cursor-pointer ${
							selectedArea === area
								? "border-blue-500 bg-blue-50"
								: "border-gray-200 hover:border-blue-300"
						}`}
						onClick={() => setSelectedArea(area)}>
						<div className="flex items-start gap-3">
							<div
								className={`flex-shrink-0 w-10 h-10 rounded-full ${categoryIcons[area.category]?.color || categoryIcons.other.color} flex items-center justify-center text-lg`}>
								{categoryIcons[area.category]?.icon ||
									categoryIcons.other.icon}
							</div>

							<div className="flex-grow">
								<h3 className="font-semibold text-lg">
									{area.name}
								</h3>
								<p className="text-sm text-gray-500 capitalize mb-2">
									{area.category}
								</p>
								{area.description && (
									<p className="text-sm text-gray-700 line-clamp-2">
										{area.description}
									</p>
								)}
							</div>
						</div>

						{area.image && (
							<div className="mt-3 relative h-32 rounded-md overflow-hidden">
								<Image
									src={area.image.url}
									alt={area.image.alt || area.name}
									fill
									className="object-cover"
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
