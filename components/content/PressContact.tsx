"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PressContact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.15 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
				staggerChildren: 0.08,
				delayChildren: 0.2
			}
		}
	};

	const itemVariants = {
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

	const cardVariants = {
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

	return (
		<section className="w-full py-16 lg:py-24 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="w-full">
					<motion.div
						variants={itemVariants}
						className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-light text-zinc-800 uppercase tracking-wider">
							Media Inquiries
						</h2>
						<div className="w-12 h-[1px] bg-zinc-300 mx-auto my-6" />
						<p className="text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
							For press inquiries, interview requests, or
							additional information about our properties and
							services, please contact our media relations team.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
						<motion.div
							variants={cardVariants}
							whileHover={{
								y: -3,
								transition: { duration: 0.4, ease: "easeOut" }
							}}
							className="bg-zinc-50 rounded-sm p-8 border border-zinc-200 transition-all duration-300">
							<h3 className="text-2xl font-light text-zinc-800 mb-6">
								Press & Media Relations
							</h3>
							<ul className="space-y-5 text-zinc-600">
								<li className="flex items-start group">
									<div className="bg-zinc-200 p-2 rounded-sm mr-4 group-hover:bg-zinc-300 transition-all duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-700"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
										</svg>
									</div>
									<span className="text-lg font-light group-hover:text-zinc-800 transition-colors duration-300">
										media@luxuryrealestate.com
									</span>
								</li>
								<li className="flex items-start group">
									<div className="bg-zinc-200 p-2 rounded-sm mr-4 group-hover:bg-zinc-300 transition-all duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-700"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
										</svg>
									</div>
									<span className="text-lg font-light group-hover:text-zinc-800 transition-colors duration-300">
										+1 (262) 204-5534
									</span>
								</li>
								<li className="flex items-start group">
									<div className="bg-zinc-200 p-2 rounded-sm mr-4 group-hover:bg-zinc-300 transition-all duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-700"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<span className="text-lg font-light group-hover:text-zinc-800 transition-colors duration-300">
										123 Luxury Avenue, New York, NY 10001
									</span>
								</li>
							</ul>
						</motion.div>

						<motion.div
							variants={cardVariants}
							whileHover={{
								y: -3,
								transition: { duration: 0.4, ease: "easeOut" }
							}}
							className="bg-zinc-50 rounded-sm p-8 border border-zinc-200 transition-all duration-300">
							<h3 className="text-2xl font-light text-zinc-800 mb-6">
								Press Kit & Resources
							</h3>
							<p className="text-zinc-600 mb-8 text-lg font-light leading-relaxed">
								Download our press kit containing company
								information, high-resolution images, and
								executive bios for media use.
							</p>
							<button className="inline-flex items-center text-zinc-800 bg-zinc-200 px-8 py-3 rounded-none hover:bg-zinc-300 transition-colors uppercase tracking-widest text-sm">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-3 text-zinc-700 transform transition-all duration-300 group-hover:translate-y-0.5"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Download Press Kit</span>
							</button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
