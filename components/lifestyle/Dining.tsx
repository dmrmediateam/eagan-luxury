"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const imageVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export function Dining() {
	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				{/* Dining Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-8">
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
							CULINARY EXPERIENCES
						</motion.h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							variants={imageVariants}
							className="relative h-[400px] md:h-[500px] w-full overflow-hidden shadow-md">
							<Image
								src="/media/gr4.jpg"
								alt="Fine dining in Lake Geneva"
								fill
								className="object-cover hover:scale-105 transition-transform duration-700"
							/>
						</motion.div>

						<motion.div variants={sectionVariants}>
							<p className="text-zinc-600 text-base md:text-lg leading-relaxed font-extralight">
								Lake Geneva area counties are internationally
								acclaimed culinary destinations, home to more
								than 40 Michelin-starred and
								Michelin-recommended restaurants. The
								farm-to-table movement thrives here, with chefs
								creating seasonal menus showcasing the
								region&apos;s abundant local produce.
								<br />
								<br />
								From renowned establishments like The French
								Laundry and SingleThread to charming bistros and
								artisanal food shops, the region offers dining
								experiences for every palate and occasion. Many
								wineries also feature on-site restaurants with
								expertly crafted food and wine pairings.
								<br />
								<br />
								For those looking to enhance their culinary
								skills, the area hosts numerous cooking classes,
								food tours, and the prestigious Culinary
								Institute of America at Greystone, where
								visitors can learn techniques from world-class
								chefs while enjoying the beautiful surroundings
								of Lake Geneva area.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
