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

export function Overview() {
	return (
		<div className="bg-white">
			<section
				id="overview"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				{/* Overview Section */}
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
							DEMONSTRATED EXCELLENCE
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight">
						Legendary Real Estate&apos;s foundation is built upon
						unwavering commitment and profound market insight,
						principles that have consistently translated into
						exceptional results for our clients throughout Napa and
						Walworth County. Our track record is more than a measure
						of transactions; it&apos;s a reflection of the trust
						placed in us and the successful realization of our
						clients&apos; unique aspirations.
						<br />
						<br />
						Our strategic, client-centered approach yielded a
						significant milestone early on, exceeding $100M in
						transaction volume within our initial three years. This
						achievement underscores the effectiveness of our bespoke
						strategies and astute guidance in navigating the
						complexities of the Lake Geneva area market. Whether
						positioning a prestigious estate for sale or guiding
						buyers toward their ideal residence, our focus remains
						on orchestrating outcomes that resonate deeply and
						create lasting value.
						<br />
						<br />
						Ultimately, true success is defined by the meaningful
						connections forged and the satisfaction expressed by
						those we serve. We take pride in the enduring
						relationships built and the privilege of guiding
						numerous clients toward achieving their distinct real
						estate visions within the vibrant communities of
						northern California.
					</motion.p>
				</motion.div>
			</section>
		</div>
	);
}
