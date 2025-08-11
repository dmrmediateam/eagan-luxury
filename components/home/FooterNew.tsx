"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function FooterNew() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-luxury-black text-white">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%] py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
					{/* Brand Column */}
					<div className="space-y-8">
						<div>
							<Link href="#" className="inline-block">
								<motion.div
									whileHover={{ scale: 1.02 }}
									transition={{
										duration: 0.3,
										ease: [0.22, 1, 0.36, 1]
									}}
									className="relative">
									<Image
										src="/lre/lre1.JPG"
										alt="Logo"
										height={150}
										width={250}
										className=""
										priority
									/>
								</motion.div>
							</Link>
							<div className="h-px w-20 bg-luxury-red my-6"></div>
							<p className="text-white/80 leading-relaxed text-sm">
								Luxury real estate professionals specializing in
								high-end properties throughout Lake Geneva, WI
								and Asheville, WI. Offering exceptional service
								and market expertise since 2005.
							</p>
						</div>

						<div className="pt-2">
							<p className="text-white/60 text-sm">
								488 Main Street
								<br />
								Lake Geneva, WI 53147
							</p>
						</div>
					</div>

					{/* Navigation Column */}
					<div className="space-y-6">
						<h3 className="text-xl font-serif text-white mb-8 relative">
							Navigate
							<span className="absolute -bottom-3 left-0 w-8 h-px bg-luxury-red"></span>
						</h3>
						<nav className="flex flex-col space-y-4">
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Home
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								About
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Listings
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Contact
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Blog
							</Link>
						</nav>
					</div>

					{/* Resources Column */}
					<div className="space-y-6">
						<h3 className="text-xl font-serif text-white mb-8 relative">
							Resources
							<span className="absolute -bottom-3 left-0 w-8 h-px bg-luxury-red"></span>
						</h3>
						<nav className="flex flex-col space-y-4">
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Market Reports
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Buyer&apos;s Guide
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Seller&apos;s Guide
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Investment Opportunities
							</Link>
							<Link
								href="#"
								className="text-white/80 hover:text-luxury-red transition-colors duration-300 group flex items-center">
								<span className="inline-block w-0 group-hover:w-3 h-px bg-luxury-red mr-0 group-hover:mr-2 transition-all duration-300"></span>
								Area Guide
							</Link>
						</nav>
					</div>

					{/* Contact Column */}
					<div className="space-y-6">
						<h3 className="text-xl font-serif text-white mb-8 relative">
							Contact
							<span className="absolute -bottom-3 left-0 w-8 h-px bg-luxury-red"></span>
						</h3>
						<div className="space-y-4">
							<p className="text-white/80 group flex items-start">
								<span className="text-luxury-red mr-3 font-serif group-hover:text-white transition-colors duration-300">
									T:
								</span>{" "}
								<span className="group-hover:text-white/90 transition-colors duration-300">
									+1 (212) 555-1234
								</span>
							</p>
							<p className="text-white/80 group flex items-start">
								<span className="text-luxury-red mr-3 font-serif group-hover:text-white transition-colors duration-300">
									E:
								</span>{" "}
								<span className="group-hover:text-white/90 transition-colors duration-300">
									judy@legendaryrealestateteam.com
								</span>
							</p>
						</div>

						{/* Social Media Links */}
						<div className="pt-8">
							<h4 className="text-white text-sm uppercase tracking-wider mb-5 font-light">
								Follow Us
							</h4>
							<div className="flex space-x-5">
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/70 hover:text-luxury-red transition-colors duration-300 transform hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-5 h-5">
										<rect
											x="2"
											y="2"
											width="20"
											height="20"
											rx="5"
											ry="5"></rect>
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
										<line
											x1="17.5"
											y1="6.5"
											x2="17.51"
											y2="6.5"></line>
									</svg>
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/70 hover:text-luxury-red transition-colors duration-300 transform hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-5 h-5">
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
									</svg>
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/70 hover:text-luxury-red transition-colors duration-300 transform hover:scale-110">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-5 h-5">
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect
											x="2"
											y="9"
											width="4"
											height="12"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-16 mt-16 border-t border-white/10 text-center md:text-left md:flex md:justify-between md:items-center">
					<p className="text-white/50 text-xs tracking-wide">
						© {currentYear} Legendary Real Estate. All rights
						reserved.
					</p>
					<div className="mt-6 md:mt-0 flex justify-center md:justify-end space-x-8">
						<Link
							href="#"
							className="text-white/50 hover:text-white/80 text-xs tracking-wide transition-colors duration-300">
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="text-white/50 hover:text-white/80 text-xs tracking-wide transition-colors duration-300">
							Terms of Service
						</Link>
						<Link
							href="https://www.dmrmedia.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/50 hover:text-white/80 text-xs tracking-wide transition-colors duration-300">
							Designed & Developed by
							<span className="text-luxury-red">DMR Media</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
