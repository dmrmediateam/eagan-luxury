"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// Define animation variants for consistent styling
const headerContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2
		}
	}
};

const headerItemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const dividerVariants = {
	hidden: { width: 0, opacity: 0 },
	visible: {
		width: "8rem",
		opacity: 0.8,
		transition: {
			duration: 1,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const titleVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
			delay: 0.4,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const socialItemVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.97 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.9,
			delay: custom * 0.1 + 0.3,
			ease: [0.16, 1, 0.3, 1]
		}
	})
};

interface SocialLink {
	id: string;
	name: string;
	icon: string;
	username: string;
	url: string;
	image: string;
}

const socialLinks: SocialLink[] = [
	{
		id: "facebook",
		name: "Facebook",
		icon: "/icons/facebook.svg",
		username: "LEGENDARY REAL ESTATE",
		url: "https://facebook.com/thegoodrichgroup",
		image: "/media/gr1.jpg"
	},
	{
		id: "instagram",
		name: "Instagram",
		icon: "/icons/instagram.svg",
		username: "@AGOODRICHREALTY",
		url: "https://instagram.com/agoodrichrealty",
		image: "/media/gr2.jpg"
	}
];

export function SocialsImproved() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section className="py-28 md:py-32 bg-zinc-50 text-zinc-800">
			<div className="mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<motion.div
					ref={ref}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="text-left mb-20">
					<motion.div
						className="flex items-center w-fit gap-4 md:gap-5"
						variants={headerContainerVariants}>
						<motion.p
							className="text-base md:text-lg font-light tracking-wider text-zinc-600"
							variants={headerItemVariants}>
							09
						</motion.p>
						<motion.div
							className="h-[1px] bg-zinc-400 mx-auto"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-base md:text-lg font-light tracking-wider text-zinc-600"
							variants={headerItemVariants}>
							Connect
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl sm:text-6xl md:text-7xl mt-4 md:mt-6 font-light tracking-tight"
						variants={titleVariants}>
						Follow Us
					</motion.h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					{socialLinks.map((social, index) => (
						<motion.div
							key={social.id}
							custom={index}
							variants={socialItemVariants}
							className="overflow-hidden">
							<Link
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group block">
								<div className="relative w-full aspect-[16/10] overflow-hidden">
									<Image
										src={social.image}
										alt={social.name}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/30 transition-all duration-700 ease-in-out group-hover:bg-black/20 flex items-center justify-center">
										<div className="w-20 h-20 md:w-24 md:h-24 text-white/90 transform transition-all duration-500 ease-out opacity-90 group-hover:opacity-100 group-hover:scale-110">
											{social.id === "facebook" ? (
												<svg
													className="w-full h-full"
													viewBox="0 0 24 24"
													fill="currentColor">
													<path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
												</svg>
											) : (
												<svg
													className="w-full h-full"
													viewBox="0 0 24 24"
													fill="currentColor">
													<path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
												</svg>
											)}
										</div>
									</div>
								</div>
								<div className="mt-6 flex items-center justify-between">
									<h3 className="text-2xl font-light tracking-tight text-zinc-700">
										{social.name}
									</h3>
									<p className="text-base md:text-lg tracking-wider font-light text-zinc-600 uppercase">
										{social.username}
									</p>
								</div>
								<div className="mt-4 overflow-hidden h-8">
									<p className="text-base tracking-widest uppercase inline-flex items-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out text-zinc-500">
										FOLLOW US
										<svg
											className="ml-2 w-5 h-5"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</p>
								</div>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
