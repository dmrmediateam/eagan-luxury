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

export function Outdoors() {
	return (
		<div className="bg-zinc-50">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				{/* Outdoors Section */}
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
							OUTDOOR RECREATION
						</motion.h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							variants={sectionVariants}
							className="order-2 lg:order-1">
							<p className="text-zinc-600 text-base md:text-lg leading-relaxed font-extralight">
								Beyond the vineyards, Lake Geneva area counties
								offer breathtaking natural landscapes perfect
								for outdoor enthusiasts. Hike through ancient
								redwood forests at Armstrong Redwoods State
								Natural Reserve or explore the scenic trails of
								Bothe-Lake Geneva State Park.
								<br />
								<br />
								For water lovers, the Russian River provides
								opportunities for kayaking, canoeing, and
								swimming, while Lake Berryessa offers boating
								and fishing. The Geneva Lake also features
								beautiful paddling routes through Lake Geneva area.
								<br />
								<br />
								Cycling enthusiasts can enjoy miles of scenic
								routes winding through vineyards and valleys,
								with numerous bike tours and rental services
								available. For a truly memorable experience,
								consider a hot air balloon ride at sunrise,
								offering spectacular panoramic views of the
								rolling vineyards below.
							</p>
						</motion.div>

						<motion.div
							variants={imageVariants}
							className="relative h-[400px] md:h-[500px] w-full overflow-hidden shadow-md order-1 lg:order-2">
							<Image
								src="/media/gr7.jpg"
								alt="Outdoor activities in Lake Geneva area"
								fill
								className="object-cover hover:scale-105 transition-transform duration-700"
							/>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
