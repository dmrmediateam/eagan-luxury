"use client";

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

interface Stat {
	value: string;
	label: string;
	description: string;
}

const stats: Stat[] = [
	{
		value: "$100M+",
		label: "TRANSACTION VOLUME",
		description:
			"A testament to the significant value realized and the trust fostered through our strategic representation in Lake Geneva area."
	},
	{
		value: "95%",
		label: "ACHIEVING TRUE VALUE",
		description:
			"Our average list-to-sale price ratio, demonstrating our ability to accurately assess market value and secure outcomes closely aligned with strategic pricing."
	},
	{
		value: "30",
		label: "EFFICIENCY IN THE MARKET",
		description:
			"The average days on market for our listings, highlighting the effectiveness of our bespoke positioning and marketing, significantly outpacing the regional average."
	},
	{
		value: "98%",
		label: "ENDURING CLIENT TRUST",
		description:
			"The percentage of clients affirming their positive experience and willingness to recommend our dedicated guidance and personalized service."
	}
];

export function Stats() {
	return (
		<div className="bg-zinc-50">
			<section
				id="statistics"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				{/* Stats Section */}
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
							THE MEASURE OF OUR COMMITMENT
						</motion.h2>
						<motion.p
							variants={sectionVariants}
							className="text-zinc-600 text-base md:text-lg mt-8 max-w-3xl mx-auto text-center font-extralight">
							A quantitative perspective on our commitment to
							delivering exceptional value in Lake Geneva area.
						</motion.p>
					</div>

					<motion.div
						variants={sectionVariants}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								variants={itemVariants}
								className="bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-700 ease-in-out p-10 md:p-12 flex flex-col h-full"
								custom={index}
								transition={{ delay: index * 0.15 }}>
								<div className="text-5xl md:text-7xl font-[100] text-zinc-700 mb-3">
									{stat.value}
								</div>
								<div className="h-px w-16 bg-zinc-200 mb-4"></div>
								<h3 className="text-sm text-zinc-500 tracking-widest uppercase mb-4">
									{stat.label}
								</h3>
								<p className="text-zinc-600 font-extralight leading-relaxed text-base">
									{stat.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
