"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

interface Award {
	name: string;
	year: string;
	image: string;
}

const awards: Award[] = [
	{
		name: "Chairman&apos;s Circle – Diamond",
		year: "2018-2023",
		image: "/mr/mrlogo1.png"
	},
	{
		name: "Top Small Team in the Country",
		year: "2020-2023",
		image: "/mr/mrlogo2.jpg"
	},
	{
		name: "Top 3 Small Teams in the State",
		year: "2016-2023",
		image: "/mr/mrlogo3.png"
	},
	{
		name: "Excellence in Real Estate",
		year: "2019-2023",
		image: "/mr/mrlogo4.jpg"
	},
	{
		name: "Customer Satisfaction Award",
		year: "2017-2023",
		image: "/mr/mrlogo5.jpg"
	},
	{
		name: "Luxury Property Specialists",
		year: "2018-2023",
		image: "/mr/mrlogo6.jpg"
	},
	{
		name: "Premier Service Provider",
		year: "2015-2023",
		image: "/mr/mrlogo7.png"
	},
	{
		name: "Best of the New Jersey",
		year: "2019-2023",
		image: "/mr/mrlogo8.jpg"
	},
	{
		name: "Real Estate Excellence Award",
		year: "2017-2023",
		image: "/mr/mrlogo9.jpg"
	}
];

// Duplicate awards to ensure continuous scroll effect
const duplicatedAwards = [...awards, ...awards];

export function AwardsScrollBanner() {
	const scrollerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!scrollerRef.current) return;

		// Set the animation
		scrollerRef.current.setAttribute("data-animated", "true");

		// Make it continuous by cloning as needed
		const scrollerInner =
			scrollerRef.current.querySelector(".scroller-inner");
		if (scrollerInner) {
			Array.from(scrollerInner.children).forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				scrollerInner.appendChild(duplicatedItem);
			});
		}
	}, []);

	return (
		<div className="py-12 lg:py-24 w-full overflow-hidden bg-white">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-150px" }}
				className="flex flex-col space-y-8">
				<SectionTitle
					title="Awards and Recognition"
					subtitle="We're proud to be recognized for our excellence in the real estate industry."
				/>

				{/* Auto-scrolling awards banner */}
				<div className="w-full max-w-7xl mx-auto">
					<div
						className="scroller"
						ref={scrollerRef}
						data-speed="slower">
						<div className="scroller-inner flex space-x-12 md:space-x-16 items-center">
							{duplicatedAwards.map((award, index) => (
								<div
									key={`${award.name}-${index}`}
									className="flex-shrink-0 flex flex-col items-center justify-center w-52 md:w-56 h-40 md:h-44 relative">
									<div className="w-24 h-24 md:w-28 md:h-28 relative mb-4 transition-all duration-500 filter grayscale hover:grayscale-0">
										<Image
											src={award.image}
											alt={award.name}
											fill
											className="object-contain"
										/>
									</div>
									<h4 className="text-[#B08D57] text-sm font-medium text-center">
										{award.name}
									</h4>
									<p className="text-zinc-500 text-xs mt-1">
										{award.year}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</motion.div>

			{/* Add CSS for the auto-scrolling effect */}
			<style jsx>{`
				.scroller {
					max-width: 100%;
				}

				.scroller[data-animated="true"] {
					overflow: hidden;
					-webkit-mask: linear-gradient(
						90deg,
						transparent,
						white 5%,
						white 95%,
						transparent
					);
					mask: linear-gradient(
						90deg,
						transparent,
						white 5%,
						white 95%,
						transparent
					);
				}

				.scroller[data-animated="true"] .scroller-inner {
					width: max-content;
					flex-wrap: nowrap;
					animation: scroll var(--_animation-duration, 40s)
						var(--_animation-direction, forwards) linear infinite;
				}

				.scroller[data-speed="slower"] {
					--_animation-duration: 180s;
				}
				.scroller[data-speed="slow"] {
					--_animation-duration: 120s;
				}

				.scroller[data-speed="medium"] {
					--_animation-duration: 90s;
				}

				.scroller[data-speed="fast"] {
					--_animation-duration: 60s;
				}

				@keyframes scroll {
					to {
						transform: translate(calc(-50% - 0.5rem));
					}
				}

				/* Pause animation when user hovers over it */
				.scroller[data-animated="true"] .scroller-inner:hover {
					animation-play-state: paused;
				}
			`}</style>
		</div>
	);
}
