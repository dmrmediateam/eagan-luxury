"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../ui/SectionTitle";

// Enhanced animation variants for a more premium, luxury experience
const contentVariants = {
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

// Single team member data
const teamMember = {
	name: "Legendary Real Estate Team",
	role: "Luxury Real Estate Specialists",
	bio: "Whether you're a first-time buyer or a seasoned developer, our property services are designed to exceed expectations. We consistently sell homes quickly and above asking price. With over 100 years of combined experience in buying, selling, staging, and negotiating even the toughest deals, we're dedicated to achieving the best outcomes for our clients.",
	image: "/mr/mrg.jpg"
};

export function Team() {
	return (
		<section className="bg-[#F9F9F9] py-24 md:py-32" id="team">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="max-w-7xl mx-auto">
					{/* Use the SectionTitle component for consistent styling */}
					<SectionTitle
						title="Meet The Legendary Real Estate Team"
						subtitle="Meet the team behind our exceptional real estate services"
						className="mb-16 md:mb-24"
					/>

					<motion.div
						custom={0}
						variants={contentVariants}
						className="mb-20">
						<div className="flex flex-col lg:flex-row gap-16 items-center">
							{/* Team Image with enhanced luxury hover effect */}
							<div className="lg:w-1/2">
								<div className="relative w-full overflow-hidden group shadow-lg">
									{/* Subtle border frame */}
									<div className="absolute inset-0 border border-[#B08D57]/20 z-20"></div>

									{/* Image */}
									<Image
										src="/lre/lre2.JPG"
										alt="The Legendary Real Estate Team"
										width={1000}
										height={750}
										className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-95 z-10 relative"
									/>

									{/* Enhanced gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-10"></div>

									{/* Background glow effect */}
									<div className="absolute inset-0 bg-[#B08D57]/0 group-hover:bg-[#B08D57]/5 transition-all duration-1000 ease-in-out z-0"></div>
								</div>
							</div>

							{/* Team Info with enhanced typography and spacing */}
							<div className="lg:w-1/2">
								<motion.h3
									custom={1}
									variants={contentVariants}
									className="text-[#1A1A1A] font-serif text-2xl md:text-3xl mb-3 font-medium tracking-tight">
									{teamMember.name}
								</motion.h3>

								<motion.p
									custom={2}
									variants={contentVariants}
									className="text-[#890300] font-sans text-sm uppercase tracking-wider mb-5 font-medium">
									{teamMember.role}
								</motion.p>

								<motion.div
									custom={2.5}
									variants={contentVariants}
									className="h-px w-16 bg-[#890300]/30 mb-8"></motion.div>

								<motion.p
									custom={3}
									variants={contentVariants}
									className="text-[#2B2B2B]/80 font-sans text-base leading-relaxed">
									{teamMember.bio}
								</motion.p>

								{/* CTA Button using same style as NapaMap.tsx */}
								<motion.div
									custom={4}
									variants={contentVariants}
									className="flex justify-start mt-12">
									<Link
										href="/about"
										className="inline-block px-6 py-2.5 border border-[#890300] text-[#890300] hover:bg-[#890300] hover:text-white transition-colors duration-300 text-sm tracking-wide">
										Meet Our Team
									</Link>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
