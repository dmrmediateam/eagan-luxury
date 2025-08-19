"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const slideInVariants = {
	hidden: { width: 0 },
	visible: {
		width: "100%",
		transition: {
			duration: 1.2,
			ease: [0.22, 1, 0.36, 1],
			delay: 0.3
		}
	}
};

export function Newsletter() {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Subscribing email:", email);
		setIsSubmitted(true);
		setEmail("");

		setTimeout(() => {
			setIsSubmitted(false);
		}, 5000);
	};

	return (
		<section id="newsletter" className="w-full py-24 lg:py-32 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<div className="relative overflow-hidden">
					{/* Background image with gradient overlay */}
					<div className="absolute inset-0 z-0">
						<Image
							src="/mr/mr2.webp"
							alt="Newsletter background"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
							priority
							className="object-cover scale-105 filter brightness-90"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>
					</div>

					{/* Content */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						className="relative z-10 px-8 py-16 md:px-16 md:py-20 border border-[#B08D57]/20 backdrop-blur-sm bg-black/10 max-w-4xl mx-auto text-center text-white my-8 md:my-12 lg:my-16">
						{/* Header section with animated underline */}
						<div className="text-center mb-12">
							<motion.h2
								variants={fadeInVariants}
								className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 font-medium">
								Stay Informed & Inspired
							</motion.h2>

							<motion.p
								variants={fadeInVariants}
								className="font-sans max-w-2xl mx-auto mb-6 text-gray-100">
								Join our community and receive curated insights
								on luxury properties, market trends, and
								exclusive opportunities in New Jersey area.
							</motion.p>

							{/* Gold accent line */}
							<div className="relative mx-auto w-16 h-[1px] mb-10">
								<motion.div
									variants={slideInVariants}
									className="absolute top-0 left-0 h-full bg-[#B08D57]"
								/>
							</div>
						</div>

						{/* Subscription form - horizontal on larger screens */}
						<motion.form
							variants={fadeInVariants}
							onSubmit={handleSubmit}
							className="max-w-2xl mx-auto mb-8">
							<div className="flex flex-col sm:flex-row">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Your email address"
									className="flex-grow px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 focus:border-white/40 text-white placeholder:text-white/60 outline-none font-light rounded-none sm:rounded-l-md"
									required
								/>

								<button
									type="submit"
									className="relative inline-block px-10 py-4 group overflow-hidden">
									<span className="absolute inset-0 w-full h-full bg-[#B08D57] transition-all duration-500 ease-in-out group-hover:bg-transparent border border-[#B08D57]"></span>
									<span className="relative z-10 text-white text-sm uppercase tracking-[0.2em] font-light group-hover:text-[#B08D57] transition-colors duration-500 flex items-center justify-center">
										Subscribe
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
									</span>
								</button>
							</div>

							{isSubmitted && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
									className="text-emerald-400 text-center font-light py-4">
									Thank you for subscribing! Your first
									newsletter will arrive soon.
								</motion.div>
							)}
						</motion.form>

						{/* Trust badges and info */}
						<motion.div
							variants={fadeInVariants}
							className="mt-12 pt-8 border-t border-[#B08D57]/20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-white/70 text-sm font-light">
							<div className="flex items-center gap-6">
								<div className="flex items-center">
									<svg
										className="w-5 h-5 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"></path>
									</svg>
									Sent Monthly
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z"
											clipRule="evenodd"></path>
									</svg>
									Secure & Private
								</div>
							</div>
							<div>
								Join over 2,000 subscribers. Unsubscribe
								anytime.
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
