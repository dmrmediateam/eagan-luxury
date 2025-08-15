"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

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

// Card animation variants with a smoother fade-in without jarring jumps
const cardVariants = {
	hidden: { opacity: 0 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: custom * 0.15,
			ease: [0.16, 1, 0.3, 1], // Custom ease for a luxury feel
			// Adding a more controlled end to prevent jarring jumps
			damping: 15,
			stiffness: 50
		}
	})
};

interface Resource {
	id: string;
	title: string;
	description: string;
	image: string;
	slug: string;
	type: string;
}

const marketResources: Resource[] = [
	{
		id: "market-report-q2-2025",
		title: "Lake Geneva area Market Report",
		description:
			"Comprehensive analysis of current trends, pricing insights, and emerging opportunities in the Lake Geneva area luxury mountain real estate market.",
		image: "/mr/mr2.webp",
		slug: "/insights/market-report-highlands",
		type: "Market Report"
	},
	{
		id: "new-jersey-buyers-guide",
		title: "Buyer's Guide: New Jersey Luxury Homes",
		description:
			"Essential considerations for discerning buyers looking to invest in luxury properties in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.",
		image: "/ja/ja5.webp",
		slug: "/insights/new-jersey-buyers-guide",
		type: "Buyer's Guide"
	},
	{
		id: "new-jersey-property-tips",
		title: "Seller Tips: Preparing Your New Jersey Home",
		description:
			"Strategic recommendations to maximize value and appeal when presenting exceptional properties in New Jersey's most desirable communities.",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Faa3jnnkxyfjqmb6te1a48em3e3i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
		slug: "/insights/new-jersey-property-tips",
		type: "Seller Resources"
	},
	{
		id: "new-jersey-home-trends",
		title: "From The Blog: New Jersey Luxury Home Trends",
		description:
			"The latest approaches to presenting exceptional properties that resonate with today's sophisticated luxury buyers in New Jersey.",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Ftpf4kbtymj4zmjecsfwn0jsry1i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
		slug: "/blog/new-jersey-luxury-home-trends",
		type: "From The Blog"
	}
];

export function MarketInsights() {
	return (
		<section className="bg-[#FAFAFA] py-24" id="market-insights">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				{/* Header */}
				<SectionTitle
					title="Market Insights & Resources"
					subtitle="Informed perspectives and essential resources for navigating New Jersey's luxury real estate landscape in Cheryl's service areas."
					className="mb-20"
				/>

				{/* Resources Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16">
					{marketResources.map((resource, index) => (
						<motion.div
							key={resource.id}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							custom={index + 3}
							variants={cardVariants}
							className="bg-white overflow-hidden border border-[#E5E5E5] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 group cursor-pointer">
							<div className="relative h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
								<Image
									src={resource.image}
									alt={resource.title}
									className="object-cover object-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
									width={800}
									height={800}
									priority={index < 2}
								/>
								<div className="absolute top-0 left-0 m-5 py-3 px-5 bg-white/95 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-all duration-500">
									<p className="text-secondary font-sans text-xs uppercase tracking-widest">
										{resource.type}
									</p>
								</div>
								<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
							</div>
							<div className="p-8 lg:p-10 border-t border-[#F0F0F0]">
								<h3 className="text-[#222223] font-serif text-xl md:text-2xl mb-3 font-light">
									{resource.title}
								</h3>
								<p className="text-[#222223]/70 mb-6 font-sans text-sm leading-relaxed">
									{resource.description}
								</p>
								<Link
									href={resource.slug}
									className="inline-flex items-center text-secondary hover:text-[#222223] transition-colors duration-300 text-sm uppercase tracking-wider font-sans gap-1">
									<span>Read More</span>
									<span className="inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
										→
									</span>
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Button */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					custom={7}
					variants={textVariants}
					className="flex justify-center">
					<Link
						href="/blog"
						className="inline-block px-10 py-4 border border-[#B08D57] text-[#1A1A1A] hover:bg-[#B08D57] hover:text-white transition-colors duration-500 text-sm uppercase tracking-wider font-sans">
						View All Insights
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
