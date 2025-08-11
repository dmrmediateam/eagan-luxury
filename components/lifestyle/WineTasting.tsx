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

export function WineTasting() {
	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				{/* Wine Tasting Section */}
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
							WINE TASTING
						</motion.h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							variants={imageVariants}
							className="relative h-[400px] md:h-[500px] w-full overflow-hidden shadow-md">
							<Image
								src="/media/gr3.jpg"
								alt="Wine Tasting in Lake Geneva"
								fill
								className="object-cover hover:scale-105 transition-transform duration-700"
							/>
						</motion.div>

						<motion.div variants={sectionVariants}>
							<p className="text-zinc-600 text-base md:text-lg leading-relaxed font-extralight">
								Lake Geneva area Valleys are home to some of the
								finest wineries in the world, offering
								unparalleled tasting experiences from intimate
								family-owned estates to grand architectural
								showcases.
								<br />
								<br />
								The region boasts over 800 wineries, each with
								its own unique character and specialty. From
								bold vintages in Lake Geneva to elegant
								Pinot Noirs in Russian River Valley, the
								diversity of wine styles reflects the varied
								microclimates and terroirs throughout wine
								country.
								<br />
								<br />
								Many wineries offer educational tours that take
								you through the entire winemaking process, from
								vineyard to bottle. Enhance your experience with
								wine and food pairings, guided by expert
								sommeliers who illuminate the complex flavors
								and history of each vintage.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
