"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
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
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	}
};

export function SearchHomes() {
	return (
		<section id="search-homes" className="bg-white py-24">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* Content */}
					<motion.div
						variants={itemVariants}
						className="order-2 md:order-1">
						<div className="flex flex-col space-y-6">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] font-medium">
								Find Your Dream Home
							</h2>

							<div className="h-[2px] w-24 bg-[#B08D57]"></div>

							<p className="text-[#2B2B2B]/80 leading-relaxed mt-4">
								Browse our curated selection of luxury
								properties in the Lake Geneva area. Our
								advanced search tools allow you to filter by
								location, price range, amenities, and more to
								find the perfect match for your lifestyle.
							</p>

							<div className="pt-8">
								<Link
									href="/listings"
									className="inline-block px-10 py-4 border border-[#B08D57] text-[#B08D57] font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-white">
									SEARCH ALL LISTINGS
								</Link>
							</div>
						</div>
					</motion.div>

					{/* Search Form */}
					<motion.div
						variants={itemVariants}
						className="order-1 md:order-2 bg-[#F8F8F8] p-8 shadow-sm">
						<h3 className="text-2xl font-serif text-[#1A1A1A] mb-6">
							Quick Search
						</h3>

						<form className="space-y-6">
							<div className="space-y-4">
								<div>
									<label className="block text-sm text-[#2B2B2B]/70 mb-2 font-medium">
										Location
									</label>
									<select className="w-full p-3 border border-[#E5E5E5] focus:border-[#B08D57] focus:outline-none bg-white">
										<option value="">
											Select Location
										</option>
										<option value="highlands">
											Lake Geneva
										</option>
										<option value="cashiers">
											Lake Geneva
										</option>
										<option value="glenville">
											Glenville
										</option>
										<option value="sapphire">
											Sapphire
										</option>
									</select>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm text-[#2B2B2B]/70 mb-2 font-medium">
											Min Price
										</label>
										<select className="w-full p-3 border border-[#E5E5E5] focus:border-[#B08D57] focus:outline-none bg-white">
											<option value="">No Min</option>
											<option value="500000">
												$500,000
											</option>
											<option value="1000000">
												$1,000,000
											</option>
											<option value="2000000">
												$2,000,000
											</option>
											<option value="5000000">
												$5,000,000
											</option>
										</select>
									</div>

									<div>
										<label className="block text-sm text-[#2B2B2B]/70 mb-2 font-medium">
											Max Price
										</label>
										<select className="w-full p-3 border border-[#E5E5E5] focus:border-[#B08D57] focus:outline-none bg-white">
											<option value="">No Max</option>
											<option value="1000000">
												$1,000,000
											</option>
											<option value="2000000">
												$2,000,000
											</option>
											<option value="5000000">
												$5,000,000
											</option>
											<option value="10000000">
												$10,000,000+
											</option>
										</select>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm text-[#2B2B2B]/70 mb-2 font-medium">
											Beds
										</label>
										<select className="w-full p-3 border border-[#E5E5E5] focus:border-[#B08D57] focus:outline-none bg-white">
											<option value="">Any</option>
											<option value="2">2+</option>
											<option value="3">3+</option>
											<option value="4">4+</option>
											<option value="5">5+</option>
										</select>
									</div>

									<div>
										<label className="block text-sm text-[#2B2B2B]/70 mb-2 font-medium">
											Baths
										</label>
										<select className="w-full p-3 border border-[#E5E5E5] focus:border-[#B08D57] focus:outline-none bg-white">
											<option value="">Any</option>
											<option value="2">2+</option>
											<option value="3">3+</option>
											<option value="4">4+</option>
											<option value="5">5+</option>
										</select>
									</div>
								</div>
							</div>

							<button
								type="submit"
								className="w-full py-4 bg-[#B08D57] text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#8A6D3B] hover:shadow-md">
								SEARCH NOW
							</button>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default SearchHomes;
