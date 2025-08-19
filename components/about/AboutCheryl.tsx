"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import Link from "next/link";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export function AboutCheryl() {
	return (
		<div className="bg-zinc-50" id="about-cheryl">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					
					<SectionTitle
						title="About Cheryl Towey Services"
						subtitle="Your trusted real estate professional in New Jersey"
					/>

					{/* About Cheryl Content */}
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						
						{/* Cheryl's Image */}
						<motion.div
							variants={itemVariants}
							className="relative aspect-[4/5] w-full overflow-hidden group">
							<Image
								src="/chery-towey.jpg"
								alt="Cheryl Towey Services - Cheryl Towey Services Agent"
								height={800}
								width={640}
								className="object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
						</motion.div>

						{/* About Content */}
						<motion.div
							variants={itemVariants}
							className="space-y-8">
							
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl text-[#222223] font-serif font-medium">
									Cheryl Towey Services
								</h3>
								<p className="text-secondary font-sans text-sm uppercase tracking-wider font-medium">
									Cheryl Towey Services Agent
								</p>
								<div className="h-px w-16 bg-secondary/30"></div>
							</div>

							<div className="space-y-6 text-[#222223]/80">
								<p className="text-[#222223]/80 leading-relaxed mb-6">
									Cheryl Towey Services is a dedicated real estate professional serving New Jersey&apos;s most desirable communities. With years of experience in the local market, Cheryl has built a reputation for exceptional service, deep market knowledge, and unwavering commitment to her clients&apos; success.
								</p>

								<p className="text-[#222223]/80 leading-relaxed mb-6">
									Specializing in residential properties across Hackettstown, Andover, Byram, Blairstown, Chester, and Washington, Cheryl understands the unique character and appeal of each community. Whether you&apos;re buying your first home, upgrading to your dream property, or selling your current residence, Cheryl&apos;s expertise ensures a smooth and successful transaction.
								</p>

								<p className="text-[#222223]/80 leading-relaxed">
									As a trusted advisor in New Jersey&apos;s real estate market, Cheryl combines local expertise with personalized service to help you achieve your real estate goals. Let Cheryl&apos;s knowledge and dedication work for you.
								</p>
							</div>

							{/* Service Areas */}
							<div className="space-y-4">
								<h4 className="text-lg text-[#222223] font-serif font-medium">
									Primary Service Areas
								</h4>
								<div className="grid grid-cols-2 gap-2 text-sm text-[#222223]/70">
									<div>• Hackettstown</div>
									<div>• Andover</div>
									<div>• Byram</div>
									<div>• Blairstown</div>
									<div>• Chester</div>
									<div>• Washington</div>
								</div>
							</div>

							{/* CTA Button */}
							<div className="pt-4">
								<Link
									href="/contact"
									className="inline-block px-8 py-3 bg-secondary text-[#222223] font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-secondary-dark">
									Contact Cheryl
								</Link>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
