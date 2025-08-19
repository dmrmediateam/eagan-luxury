"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

export type TestimonialType = {
	_id: string;
	clientName: string;
	clientLocation?: string;
	rating?: number;
	content: string;
	propertyType?: string;
	transactionType?: string;
	date?: string;
	isDummyData?: boolean;
};

interface TestimonialsGridProps {
	testimonials: TestimonialType[];
	title?: string;
	subtitle?: string;
	showAll?: boolean;
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
	testimonials = [],
	title = "Client Testimonials",
	subtitle = "Hear what our clients have to say about their experience working with Cheryl Towey Services.",
	showAll = false
}) => {
	// Filter out dummy data if showAll is false
	const filteredTestimonials = showAll 
		? testimonials 
		: testimonials.filter(t => !t.isDummyData);

	if (!filteredTestimonials || filteredTestimonials.length === 0) {
		return (
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center">
						<h2 className="text-3xl font-serif font-light mb-4">{title}</h2>
						<p className="text-gray-600 mb-8">{subtitle}</p>
						<div className="text-gray-500">
							No testimonials available at this time.
						</div>
					</div>
				</div>
			</section>
		);
	}

	// Limit to 6 testimonials if not showing all
	const displayTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);

	return (
		<section className="py-20 bg-gray-50">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-serif font-light mb-4">{title}</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayTestimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial._id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
						>
							{/* Rating */}
							{testimonial.rating && (
								<div className="flex items-center mb-4">
									{[...Array(5)].map((_, i) => (
										<StarIcon
											key={i}
											className={`w-4 h-4 ${
												i < testimonial.rating!
													? "text-yellow-400"
													: "text-gray-300"
											}`}
										/>
									))}
								</div>
							)}

							{/* Content */}
							<blockquote className="text-gray-700 mb-4 italic">
								"{testimonial.content}"
							</blockquote>

							{/* Client Info */}
							<div className="border-t border-gray-100 pt-4">
								<div className="font-medium text-gray-900">
									{testimonial.clientName}
								</div>
								{testimonial.clientLocation && (
									<div className="text-sm text-gray-600">
										{testimonial.clientLocation}
									</div>
								)}
								{testimonial.propertyType && testimonial.transactionType && (
									<div className="text-xs text-gray-500 mt-1">
										{testimonial.transactionType} • {testimonial.propertyType}
									</div>
								)}
								{testimonial.date && (
									<div className="text-xs text-gray-500 mt-1">
										{new Date(testimonial.date).toLocaleDateString()}
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>

				{/* View All Button (only show if there are more testimonials and not showing all) */}
				{!showAll && filteredTestimonials.length > 6 && (
					<div className="text-center mt-12">
						<a
							href="/testimonials"
							className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
						>
							View All Testimonials
							<span className="ml-2">→</span>
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default TestimonialsGrid;
