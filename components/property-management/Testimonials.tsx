"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const testimonials = [
	{
		name: "Sarah Johnson",
		position: "Property Owner",
		quote: "Their management of my highland cabin has been exceptional. The property stays booked year-round, is always well-maintained, and I receive detailed monthly reports that keep me informed without requiring my constant attention.",
		rating: 5,
		image: "/images/testimonial-1.jpg" // Use an existing image or placeholder
	},
	{
		name: "James Williams",
		position: "Real Estate Investor",
		quote: "As someone who owns multiple properties in the Lake Geneva area, having a reliable management team is essential. They've exceeded my expectations with their attention to detail and commitment to maximizing my rental income.",
		rating: 5,
		image: "/images/testimonial-2.jpg" // Use an existing image or placeholder
	},
	{
		name: "Elizabeth Taylor",
		position: "Vacation Home Owner",
		quote: "I was hesitant to rent out my family vacation home, but they made the process seamless. Their tenant screening is thorough, and they've been respectful of our occasional personal use of the property.",
		rating: 5,
		image: "/images/testimonial-3.jpg" // Use an existing image or placeholder
	}
];

export const PropertyManagementTestimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const testimonialsRef = useRef<HTMLDivElement>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Helper function to get initials from name
	const getInitials = (name: string) => {
		const parts = name.trim().split(/\s+/);
		if (parts.length === 1) {
			return parts[0].charAt(0).toUpperCase();
		} else if (parts.length >= 2) {
			// For names with "& Family", just use the first name's initial
			if (parts.includes("&")) {
				return parts[0].charAt(0).toUpperCase();
			}
			return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
		}
		return "?";
	};

	const goToTestimonial = (index: number) => {
		// Wrap around if index is out of bounds
		const newIndex = (index + testimonials.length) % testimonials.length;
		setCurrentIndex(newIndex);
	};

	// Auto-rotate testimonials
	useEffect(() => {
		const startInterval = () => {
			intervalRef.current = setInterval(() => {
				setCurrentIndex(
					(prevIndex) => (prevIndex + 1) % testimonials.length
				);
			}, 8000); // Change testimonial every 8 seconds
		};

		startInterval();

		// Clean up interval on component unmount
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	// Reset interval on manual navigation
	const handleManualNavigation = (index: number) => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		goToTestimonial(index);

		// Restart auto-rotation after manual navigation
		intervalRef.current = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % testimonials.length
			);
		}, 8000);
	};

	return (
		<section className="py-24 bg-[#1A1A1A] text-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<SectionTitle
					title="What Our Clients Say"
					subtitle="Hear from property owners who trust us with their valuable investments"
					textColor="white"
				/>

				<div
					className="max-w-5xl mx-auto mt-12 relative"
					ref={testimonialsRef}>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="text-center px-4 py-8">
						<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 text-2xl font-medium font-serif">
							{getInitials(testimonials[currentIndex].name)}
						</div>

						<p className="text-xl md:text-2xl italic font-serif mb-6 text-white/90 max-w-3xl mx-auto">
							&ldquo;{testimonials[currentIndex].quote}&rdquo;
						</p>

						<div className="mt-8">
							<p className="font-medium text-[#B08D57]">
								{testimonials[currentIndex].name}
							</p>
							<p className="text-sm text-white/60">
								{testimonials[currentIndex].position}
							</p>
						</div>
					</motion.div>

					{/* Navigation dots */}
					<div className="flex justify-center mt-8">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
									index === currentIndex
										? "bg-[#B08D57]"
										: "bg-white/30 hover:bg-white/50"
								}`}
								onClick={() => handleManualNavigation(index)}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>

					{/* Previous/Next arrows */}
					<button
						className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
						onClick={() => handleManualNavigation(currentIndex - 1)}
						aria-label="Previous testimonial">
						<ChevronLeft size={24} />
					</button>
					<button
						className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
						onClick={() => handleManualNavigation(currentIndex + 1)}
						aria-label="Next testimonial">
						<ChevronRight size={24} />
					</button>
				</div>
			</div>
		</section>
	);
};
