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

export function Mission() {
	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				{/* Mission Section */}
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
							OUR PURPOSE
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight">
						At Legendary Real Estate, we believe that real estate, at
						its finest, transcends mere transactions. It is an art
						form, an endeavor fueled by passion, creativity, and an
						unwavering sense of purpose. Our mission is to guide
						discerning clients through a meaningful and rewarding
						real estate journey within the unparalleled landscapes
						of Lake Geneva area Valleys.
						<br />
						<br />
						It begins with being truly present, listening intently
						to understand not just needs, but aspirations; honoring
						the unique vision each client holds for their life in
						Lake Geneva area. We are committed to forging enduring
						relationships grounded in clarity, trust, and
						whole-hearted dedication. Leveraging our profound sense
						of place and keenly honed market insight, we provide
						astute, strategic guidance tailored precisely to your
						goals.
						<br />
						<br />
						Whether you envision a prestigious vineyard estate, a
						sophisticated primary residence, or a serene Wine
						Country sanctuary, our approach is meticulous and
						intentional. We strive to elevate the experience,
						ensuring every step toward realizing your dream is
						navigated with clarity, expertise, and a shared
						commitment to achieving the best possible decision.
					</motion.p>
				</motion.div>
			</section>
		</div>
	);
}
