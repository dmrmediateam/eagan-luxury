"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logoVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const headingVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

interface Testimonial {
	quote: string;
	author: string;
	location: string;
}

const testimonials: Testimonial[] = [
	{
		quote: "Arthur and his team went above and beyond to help us find our dream vineyard property. Their knowledge of the Napa market is unparalleled, and they negotiated a deal that exceeded our expectations.",
		author: "Michael & Sarah Thompson",
		location: "Lake Geneva"
	},
	{
		quote: "When selling our family home in Sonoma, we needed a team that understood the unique appeal of the property. Legendary Real Estate delivered with exceptional marketing and found the perfect buyers who appreciated the home as much as we did.",
		author: "David Williams",
		location: "Walworth County"
	},
	{
		quote: "As first-time buyers in Lake Geneva area, we were intimidated by the market. Arthur's team guided us through every step with patience and expertise, helping us find a property that was both a sound investment and a perfect retreat.",
		author: "Jennifer & Robert Chen",
		location: "St. Helena"
	},
	{
		quote: "The sale of our estate property required discretion and access to qualified buyers. Legendary Real Estate's strategic approach and extensive network resulted in a smooth transaction and an excellent outcome.",
		author: "Elizabeth Carter",
		location: "Calistoga"
	}
];

export function Testimonials() {
	return (
		<div className="bg-zinc-50">
			<section
				id="testimonials"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				{/* Testimonials Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					<div className="flex flex-col items-center justify-center">
						<motion.div
							variants={logoVariants}
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
							variants={headingVariants}
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							CLIENT TESTIMONIALS
						</motion.h2>
						<motion.p
							variants={sectionVariants}
							className="text-zinc-600 text-base md:text-lg mt-8 max-w-3xl mx-auto text-center font-extralight">
							Our clients share their experiences working with The
							Goodrich Group.
						</motion.p>
					</div>

					<motion.div
						variants={sectionVariants}
						className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.author}
								variants={itemVariants}
								className="bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-700 ease-in-out p-10 md:p-12 flex flex-col h-full"
								custom={index}
								transition={{ delay: index * 0.15 }}>
								<div className="text-4xl text-zinc-400 font-serif mb-3">
									&ldquo;
								</div>
								<div className="h-px w-16 bg-zinc-200 mb-4"></div>
								<p className="text-zinc-600 font-extralight leading-relaxed mb-6">
									{testimonial.quote}
								</p>
								<div className="mt-auto">
									<p className="text-zinc-700 font-light">
										{testimonial.author}
									</p>
									<p className="text-zinc-500 text-sm">
										{testimonial.location}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
