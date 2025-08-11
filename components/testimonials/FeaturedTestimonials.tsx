"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialProps {
	testimonials: {
		_id: string;
		name: string;
		propertyName?: string;
		testimonialText: string;
		image?: string;
		clientType: string;
		featured: boolean;
		location?: string;
	}[];
}

const FeaturedTestimonials = ({ testimonials }: TestimonialProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	// Auto rotate testimonials
	useEffect(() => {
		if (!isAutoPlaying || testimonials.length <= 1) return;

		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % testimonials.length);
		}, 8000); // Change testimonial every 8 seconds

		return () => clearInterval(interval);
	}, [testimonials, isAutoPlaying]);

	// Pause auto-rotation on hover
	const handleMouseEnter = () => setIsAutoPlaying(false);
	const handleMouseLeave = () => setIsAutoPlaying(true);

	// Handle manual navigation
	const goToTestimonial = (index: number) => {
		setActiveIndex(index);
		setIsAutoPlaying(false); // Pause auto-rotation when user interacts
	};

	if (!testimonials.length) return null;

	const clientTypeMap: Record<string, string> = {
		buyer: "Buyer",
		seller: "Seller",
		both: "Buyer & Seller"
	};

	return (
		<div className="bg-white py-24 lg:py-32">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				{/* Section Header */}
				<div className="flex flex-col items-center justify-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
						className="mb-8 w-16 h-16">
						<Image
							src="/logos/keylogo.png"
							alt="Key Icon"
							width={64}
							height={64}
							className="w-full h-full object-contain"
						/>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.1
						}}
						className="text-4xl sm:text-5xl text-zinc-700 font-light tracking-wider text-center font-serif">
						FEATURED TESTIMONIALS
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						whileInView={{ opacity: 1, width: "80px" }}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.3
						}}
						className="h-[2px] bg-[#B08D57] my-6"
					/>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.2
						}}
						className="text-zinc-600 text-base md:text-lg mt-2 max-w-2xl mx-auto text-center font-extralight">
						Hear what our valued clients have to say about their
						experience working with us
					</motion.p>
				</div>

				{/* Testimonial Slider */}
				<div
					className="relative bg-zinc-50 shadow-md overflow-hidden"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className="min-h-[300px] md:min-h-[400px] py-16 px-8 md:px-16 lg:px-24 border border-zinc-100">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{
									duration: 0.7,
									ease: [0.22, 1, 0.36, 1]
								}}
								className="flex flex-col items-center text-center">
								<div className="text-5xl md:text-6xl text-[#B08D57] font-serif mb-8">
									&ldquo;
								</div>
								<p className="text-lg md:text-xl text-zinc-700 font-light mb-10 leading-relaxed max-w-4xl">
									{testimonials[activeIndex].testimonialText}
								</p>

								<div className="mt-8 flex flex-col items-center">
									{testimonials[activeIndex].image && (
										<div className="relative w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-white shadow-md">
											<Image
												src={
													testimonials[activeIndex]
														.image
												}
												alt={
													testimonials[activeIndex]
														.name
												}
												fill
												sizes="80px"
												className="object-cover"
											/>
										</div>
									)}
									<p className="text-zinc-800 font-medium text-lg">
										{testimonials[activeIndex].name}
									</p>
									{testimonials[activeIndex].location && (
										<p className="text-zinc-500 text-sm mt-1">
											{testimonials[activeIndex].location}
										</p>
									)}
									{testimonials[activeIndex].propertyName && (
										<p className="text-zinc-500 text-sm mt-1 italic">
											{
												testimonials[activeIndex]
													.propertyName
											}
										</p>
									)}
									<p className="text-[#B08D57] text-sm mt-2 uppercase tracking-wider font-light">
										{
											clientTypeMap[
												testimonials[activeIndex]
													.clientType
											]
										}
									</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Navigation Dots */}
					{testimonials.length > 1 && (
						<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => goToTestimonial(index)}
									aria-label={`Go to testimonial ${index + 1}`}
									className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
										index === activeIndex
											? "bg-[#B08D57] w-6"
											: "bg-zinc-300 hover:bg-zinc-400"
									}`}
								/>
							))}
						</div>
					)}

					{/* Next/Prev Controls - only show if more than one testimonial */}
					{testimonials.length > 1 && (
						<>
							<button
								onClick={() =>
									goToTestimonial(
										(activeIndex -
											1 +
											testimonials.length) %
											testimonials.length
									)
								}
								className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-zinc-700 hover:bg-[#B08D57] hover:text-white transition-all"
								aria-label="Previous testimonial">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
							</button>
							<button
								onClick={() =>
									goToTestimonial(
										(activeIndex + 1) % testimonials.length
									)
								}
								className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-zinc-700 hover:bg-[#B08D57] hover:text-white transition-all"
								aria-label="Next testimonial">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeaturedTestimonials;
