"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// All cities in the MLS area
const allCities = [
	// Warren County
	"Allamuchy", "Alpha", "Belvidere", "Blairstown", "Franklin", "Frelinghuysen", "Greenwich", "Hackettstown", "Hardwick", "Harmony", "Hope", "Independence", "Knowlton", "Liberty", "Lopatcong", "Mansfield", "Oxford", "Phillipsburg", "Pohatcong", "Washington", "White",
	
	// Sussex County
	"Andover", "Branchville", "Byram", "Frankford", "Franklin", "Fredon", "Green", "Hamburg", "Hampton", "Hardyston", "Hopatcong", "Lafayette", "Montague", "Newton", "Ogdensburg", "Sandyston", "Sparta", "Stanhope", "Stillwater", "Sussex", "Vernon", "Walpack", "Wantage",
	
	// Morris County
	"Boonton", "Butler", "Chatham", "Chester", "Denville", "Dover", "East Hanover", "Florham Park", "Hanover", "Harding", "Jefferson", "Kinnelon", "Lincoln Park", "Long Hill", "Madison", "Mendham", "Mine Hill", "Montville", "Morris", "Morristown", "Mount Arlington", "Mount Olive", "Netcong", "Parsippany-Troy Hills", "Pequannock", "Randolph", "Riverdale", "Rockaway", "Roxbury", "Washington", "Wharton",
	
	// Hunterdon County
	"Alexandria", "Bethlehem", "Bloomsbury", "Califon", "Clinton", "Clinton Township", "Delaware", "East Amwell", "Flemington", "Franklin", "Frenchtown", "Glen Gardner", "Hampton", "High Bridge", "Holland", "Kingwood", "Lambertville", "Lebanon", "Lebanon Township", "Milford", "Raritan", "Readington", "Stockton", "Tewksbury", "Union", "West Amwell"
];

// Group cities by county
const citiesByCounty = {
	"Warren County": allCities.filter(city => 
		["Allamuchy", "Alpha", "Belvidere", "Blairstown", "Franklin", "Frelinghuysen", "Greenwich", "Hackettstown", "Hardwick", "Harmony", "Hope", "Independence", "Knowlton", "Liberty", "Lopatcong", "Mansfield", "Oxford", "Phillipsburg", "Pohatcong", "Washington", "White"].includes(city)
	),
	"Sussex County": allCities.filter(city => 
		["Andover", "Branchville", "Byram", "Frankford", "Franklin", "Fredon", "Green", "Hamburg", "Hampton", "Hardyston", "Hopatcong", "Lafayette", "Montague", "Newton", "Ogdensburg", "Sandyston", "Sparta", "Stanhope", "Stillwater", "Sussex", "Vernon", "Walpack", "Wantage"].includes(city)
	),
	"Morris County": allCities.filter(city => 
		["Boonton", "Butler", "Chatham", "Chester", "Denville", "Dover", "East Hanover", "Florham Park", "Hanover", "Harding", "Jefferson", "Kinnelon", "Lincoln Park", "Long Hill", "Madison", "Mendham", "Mine Hill", "Montville", "Morris", "Morristown", "Mount Arlington", "Mount Olive", "Netcong", "Parsippany-Troy Hills", "Pequannock", "Randolph", "Riverdale", "Rockaway", "Roxbury", "Washington", "Wharton"].includes(city)
	),
	"Hunterdon County": allCities.filter(city => 
		["Alexandria", "Bethlehem", "Bloomsbury", "Califon", "Clinton", "Clinton Township", "Delaware", "East Amwell", "Flemington", "Franklin", "Frenchtown", "Glen Gardner", "Hampton", "High Bridge", "Holland", "Kingwood", "Lambertville", "Lebanon", "Lebanon Township", "Milford", "Raritan", "Readington", "Stockton", "Tewksbury", "Union", "West Amwell"].includes(city)
	)
};

export function ExpandableCities() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<section className="bg-[#F9F9F9] py-16">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-serif font-light mb-4">All Cities We Serve</h2>
					<p className="text-[#222223]/70 text-sm leading-relaxed">
						Discover all the communities we serve throughout New Jersey&apos;s most desirable regions. From charming small towns to vibrant suburban areas, we&apos;re here to help you find your perfect location.
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-sm border border-[#E5E5E5] overflow-hidden">
					{/* Header */}
					<div 
						className="p-6 cursor-pointer hover:bg-[#F9F9F9] transition-colors duration-200"
						onClick={() => setIsExpanded(!isExpanded)}
					>
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-xl font-serif font-medium text-[#222223] mb-2">
									Complete List of Cities
								</h3>
								<p className="text-[#222223]/70 text-sm">
									{isExpanded ? "Click to collapse" : "Click to expand and view all cities"}
								</p>
							</div>
							<motion.div
								animate={{ rotate: isExpanded ? 180 : 0 }}
								transition={{ duration: 0.3 }}
							>
								<svg className="w-6 h-6 text-[#222223]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</motion.div>
						</div>
					</div>

					{/* Expandable Content */}
					<AnimatePresence>
						{isExpanded && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="overflow-hidden"
							>
								<div className="p-6 border-t border-[#E5E5E5]">
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
										{Object.entries(citiesByCounty).map(([county, cities]) => (
											<div key={county}>
												<h4 className="text-lg font-serif font-medium text-[#222223] mb-4 pb-2 border-b border-secondary/20">
													{county}
												</h4>
												<div className="space-y-2">
													{cities.map((city) => (
														<Link
															key={city}
															href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}
															className="text-[#222223]/70 hover:text-[#222223] transition-colors duration-200 cursor-pointer text-sm block"
														>
															{city}
														</Link>
													))}
												</div>
											</div>
										))}
									</div>
									
									<div className="mt-8 pt-6 border-t border-[#E5E5E5] text-center">
										<p className="text-[#222223]/60 text-sm">
											Don&apos;t see your city? Contact Cheryl to learn about our services in your area.
										</p>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
