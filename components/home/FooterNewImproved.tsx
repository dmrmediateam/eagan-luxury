"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface AgentInfo {
	name: string;
	image: string;
	phone: string;
	email: string;
}

const agents: AgentInfo[] = [
	{
		name: "ARTHUR GOODRICH",
		image: "/media/arthurportrait.jpg",
		phone: "415.735.8779",
		email: "arthur.goodrich@sothebys.realty"
	},
	{
		name: "FEDERICO PARIAGRECO",
		image: "/media/fredportrait.png",
		phone: "628.252.9532",
		email: "federico.pariagreco@sothebys.realty"
	}
];

// Links structure for footer navigation
interface FooterLinkGroup {
	title: string;
	links: Array<{
		label: string;
		href: string;
	}>;
}

const footerLinks: FooterLinkGroup[] = [
	{
		title: "Properties",
		links: [
			{ label: "Featured Listings", href: "/listings/featured" },
			{ label: "Luxury Estates", href: "/listings/luxury-estates" },
			{ label: "Vineyard Properties", href: "/listings/vineyard" },
			{ label: "Vacation Rentals", href: "/rentals" }
		]
	},
	{
		title: "Resources",
		links: [
			{ label: "Buyer's Guide", href: "/resources/buyers-guide" },
			{ label: "Seller's Guide", href: "/resources/sellers-guide" },
			{ label: "Market Insights", href: "/resources/market-insights" },
			{ label: "Relocation Services", href: "/resources/relocation" }
		]
	}
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const linkVariants = {
	hidden: { opacity: 0, x: -5 },
	visible: (custom: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: 0.2 + custom * 0.1,
			ease: [0.16, 1, 0.3, 1]
		}
	})
};

export function FooterNewImproved() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });

	return (
		<footer className=" bg-zinc-50">
			<div className="py-24 md:py-32 mx-[5%] xl:mx-[10%] 2xl:mx-[15%] border-t border-zinc-200">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-8">
					{/* Logo and Address */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-4 flex flex-col">
						<div className="flex items-center">
							<div className="w-40 md:w-48">
								<Image
									src="/logos/keytextlogogray.png"
									alt="Legendary Real Estate"
									width={200}
									height={60}
									className="object-contain h-auto"
								/>
							</div>
							<div className="w-px h-12 bg-zinc-300 mx-6"></div>
							<div className="w-32 md:w-36">
								<Image
									src="/logos/sothebysdark.png"
									alt="Sotheby's International Realty"
									width={140}
									height={50}
									className="object-contain h-auto"
								/>
							</div>
						</div>

						<div className="mt-8 text-zinc-600 space-y-2 font-light text-base tracking-wide">
							<p>1381 Main Street, Suite 01</p>
							<p>St. Helena, California 94574</p>
							<p className="mt-4">
								<Link
									href="https://agoodrichrealty.com"
									className="inline-flex items-center hover:text-zinc-800 transition-all duration-300 group">
									agoodrichrealty.com
									<span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
										<svg
											className="w-4 h-4"
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
									</span>
								</Link>
							</p>
						</div>

						{/* Social Media Icons */}
						<div className="flex space-x-5 mt-10">
							<motion.div
								whileHover={{
									y: -3,
									transition: { duration: 0.3 }
								}}
								whileTap={{ scale: 0.95 }}>
								<Link
									href="https://instagram.com/agoodrichrealty"
									target="_blank"
									aria-label="Instagram"
									className="bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300 p-2.5 w-11 h-11 flex items-center justify-center">
									<svg
										className="w-5 h-5 text-white"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
									</svg>
								</Link>
							</motion.div>
							<motion.div
								whileHover={{
									y: -3,
									transition: { duration: 0.3 }
								}}
								whileTap={{ scale: 0.95 }}>
								<Link
									href="https://facebook.com/thegoodrichgroup"
									target="_blank"
									aria-label="Facebook"
									className="bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300 p-2.5 w-11 h-11 flex items-center justify-center">
									<svg
										className="w-5 h-5 text-white"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</Link>
							</motion.div>
						</div>
					</motion.div>

					{/* Navigation Links */}
					{footerLinks.map((group) => (
						<motion.div
							key={group.title}
							variants={itemVariants}
							className="md:col-span-2">
							<h3 className="text-lg font-light text-zinc-700 tracking-wide mb-5">
								{group.title}
							</h3>
							<ul className="space-y-3">
								{group.links.map((link, linkIndex) => (
									<motion.li
										key={link.label}
										custom={linkIndex}
										variants={linkVariants}>
										<Link
											href={link.href}
											className="text-zinc-500 font-light hover:text-zinc-800 transition-colors duration-300 text-base tracking-wide">
											{link.label}
										</Link>
									</motion.li>
								))}
							</ul>
						</motion.div>
					))}

					{/* Agent Info */}
					{agents.map((agent) => (
						<motion.div
							key={agent.name}
							variants={itemVariants}
							className="md:col-span-2 flex flex-col">
							<div className="w-32 h-40 relative mb-6 overflow-hidden">
								<Image
									src={agent.image}
									alt={agent.name}
									fill
									sizes="128px"
									className="object-cover object-center"
								/>
							</div>
							<h3 className="text-zinc-700 font-light text-sm tracking-wide">
								{agent.name}
							</h3>
							<p className="text-zinc-500 font-light mt-2 text-sm">
								{agent.phone}
							</p>
							<Link
								href={`mailto:${agent.email}`}
								className="text-zinc-500 font-light hover:text-zinc-800 transition-colors duration-300 text-xs mt-1 group inline-flex items-center">
								{agent.email}
								<span className="hidden group-hover:inline-block ml-2 transform transition-transform duration-300">
									<svg
										className="w-4 h-4"
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
								</span>
							</Link>
						</motion.div>
					))}
				</motion.div>

				{/* Copyright */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					transition={{ delay: 0.5 }}
					className="mt-20 pt-8 border-t border-zinc-200 text-zinc-400 font-light text-sm tracking-wide flex flex-col md:flex-row justify-between items-center">
					<p>
						© {new Date().getFullYear()} Legendary Real Estate. All
						Rights Reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link
							href="/privacy-policy"
							className="hover:text-zinc-600 transition-colors duration-300">
							Privacy Policy
						</Link>
						<Link
							href="/terms-of-service"
							className="hover:text-zinc-600 transition-colors duration-300">
							Terms of Service
						</Link>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
