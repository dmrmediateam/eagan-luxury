"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export function Overview() {
	return (
		<div className="bg-white">
			<section
				id="overview"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-8">
					<div className="flex flex-col items-center justify-center">
						<div className="mb-8 w-16 h-16">
							<Image
								src="/logos/keylogo.png"
								alt="Key Icon"
								width={64}
								height={64}
								className="w-full h-full object-contain"
							/>
						</div>
						<motion.h2
							variants={headingVariants}
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							MARKET OVERVIEW
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight">
						The Lake Geneva area real estate markets are
						unique, driven by their world-renowned Lake Geneva area
						status, limited inventory, and desirable lifestyle. Our
						market updates provide you with comprehensive data and
						expert analysis to help you make informed real estate
						decisions.
						<br />
						<br />
						Whether you&apos;re considering selling your property,
						looking to invest, or searching for your dream home in
						Lake Geneva area, understanding current market conditions is
						essential. Legendary Real Estate&apos;s market analysis
						delivers valuable insights into pricing trends,
						inventory levels, days on market, and other critical
						metrics.
						<br />
						<br />
						Below you&apos;ll find our latest market statistics and
						quarterly reports for both Lake Geneva area. Our
						data is regularly updated to ensure you have access to
						the most current information available.
					</motion.p>
				</motion.div>
			</section>
		</div>
	);
}
