"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle } from "../ui/SectionTitle";

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: custom * 0.1,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

// Animation for the decorative lines with delayed start

interface Publication {
	name: string;
	logo: string;
	url: string;
}

const publications: Publication[] = [
	{
		name: "Wall Street Journal",
		logo: "/logos/wsj.png",
		url: "https://www.wsj.com"
	},
	{
		name: "Architectural Digest",
		logo: "/logos/ad.png",
		url: "https://www.architecturaldigest.com"
	},
	{
		name: "Wall Street Journal",
		logo: "/logos/wsj.png",
		url: "https://www.wsj.com"
	},
	{
		name: "Architectural Digest",
		logo: "/logos/ad.png",
		url: "https://www.architecturaldigest.com"
	},
	{
		name: "Wall Street Journal",
		logo: "/logos/wsj.png",
		url: "https://www.wsj.com"
	},
	{
		name: "Architectural Digest",
		logo: "/logos/ad.png",
		url: "https://www.architecturaldigest.com"
	}
];

// Duplicate publications to ensure continuous scroll effect
const duplicatedPublications = [...publications, ...publications];

export function SeenOnNew() {
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
		<section className="relative w-full py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-150px" }}
					className="flex flex-col items-center space-y-16">
					{/* Elegant header with decorative line element */}
					<SectionTitle title="Seen On" className="mb-20" />

					{/* Auto-scrolling publications banner */}
					<div className="w-full max-w-7xl mx-auto">
						<div
							className="scroller"
							ref={scrollerRef}
							data-speed="slow">
							<div className="scroller-inner flex space-x-16 md:space-x-20 items-center">
								{duplicatedPublications.map(
									(publication, index) => (
										<div
											key={`${publication.name}-${index}`}
											className="flex-shrink-0 flex items-center justify-center w-44 h-24 md:h-28 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
											<Link
												href={publication.url}
												target="_blank"
												rel="noopener noreferrer"
												className="block w-full h-full relative">
												<Image
													src={publication.logo}
													alt={publication.name}
													fill
													className="object-contain"
												/>
											</Link>
										</div>
									)
								)}
							</div>
						</div>
					</div>

					{/* Refined CTA button */}
					<motion.div custom={4} variants={textVariants}>
						<Link
							href="/press"
							className="inline-block px-8 py-3 border border-[#B08D57] text-[#B08D57] font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-white">
							VIEW ALL PRESS
						</Link>
					</motion.div>
				</motion.div>
			</div>

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
						white 10%,
						white 90%,
						transparent
					);
					mask: linear-gradient(
						90deg,
						transparent,
						white 10%,
						white 90%,
						transparent
					);
				}

				.scroller[data-animated="true"] .scroller-inner {
					width: max-content;
					flex-wrap: nowrap;
					animation: scroll var(--_animation-duration, 40s)
						var(--_animation-direction, forwards) linear infinite;
				}

				.scroller[data-speed="slow"] {
					--_animation-duration: 60s;
				}

				.scroller[data-speed="medium"] {
					--_animation-duration: 40s;
				}

				.scroller[data-speed="fast"] {
					--_animation-duration: 20s;
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
		</section>
	);
}
