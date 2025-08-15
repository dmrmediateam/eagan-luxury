"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type ListingStatus = "active" | "pending" | "sold" | "coming-soon";

interface Property {
	id: string;
	title: string;
	price: string;
	location: string;
	beds: number;
	baths: number;
	area: number;
	image: string;
	status: ListingStatus;
}

interface AvailablePropertiesProps {
	communitySlug: string;
}

const ITEMS_PER_PAGE = 4;

const AvailableProperties: React.FC<AvailablePropertiesProps> = ({ communitySlug }) => {
	const [properties, setProperties] = useState<Property[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		async function fetchProperties() {
			try {
				// Fetch properties for the specific community from the database
				const response = await fetch(`/api/listings?city=${communitySlug}&status=Active`);
				if (response.ok) {
					const data = await response.json();
					// Transform database listings to Property format
					const transformedProperties: Property[] = data.map((listing: any) => ({
						id: listing.listingKey,
						title: `${listing.addressFull}, ${listing.city}`,
						price: new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
							minimumFractionDigits: 0,
							maximumFractionDigits: 0
						}).format(Number(listing.listPrice) || 0),
						location: `${listing.city}, ${listing.state}`,
						beds: listing.bedsTotal || 0,
						baths: listing.bathsFull || 0,
						area: listing.livingArea || 0,
						image: listing.media?.[0]?.url || '/placeholder.jpg',
						status: (listing.standardStatus?.toLowerCase() as ListingStatus) || 'active'
					}));
					setProperties(transformedProperties);
				} else {
					console.error('Failed to fetch properties');
				}
			} catch (error) {
				console.error('Error fetching properties:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchProperties();
	}, [communitySlug]);

	const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentProperties = properties.slice(startIndex, endIndex);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (loading) {
		return (
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center">
						<div className="text-lg">Loading properties...</div>
					</div>
				</div>
			</section>
		);
	}

	if (properties.length === 0) {
		return (
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center">
						<h2 className="text-2xl font-serif font-light mb-4">Available Properties</h2>
						<p className="text-gray-600 mb-8">No properties currently available in this area.</p>
						<Link
							href="/listings/active"
							className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
						>
							View All Listings
						</Link>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-20 bg-gray-50">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-serif font-light mb-4">Available Properties</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Discover exceptional properties in {communitySlug.charAt(0).toUpperCase() + communitySlug.slice(1)}. 
						Each listing represents the finest selection of homes in this prestigious area.
					</p>
				</div>

				{/* Properties Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
					{currentProperties.map((property, index) => (
						<motion.div
							key={property.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="group"
						>
							<Link href={`/listing/${property.id}`}>
								<div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
									<div className="relative aspect-[4/3] overflow-hidden">
										<Image
											src={property.image}
											alt={property.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">
											{property.price}
										</div>
										<div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium uppercase tracking-wide">
											{property.status}
										</div>
									</div>
									
									<div className="p-6">
										<h3 className="font-medium text-gray-900 mb-2 line-clamp-1">
											{property.title}
										</h3>
										<p className="text-gray-600 text-sm mb-4">{property.location}</p>
										<div className="flex items-center justify-between text-sm text-gray-500">
											<span>{property.beds} Beds</span>
											<span>{property.baths} Baths</span>
											<span>{property.area?.toLocaleString()} Sq Ft</span>
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex justify-center items-center space-x-2">
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Previous
						</button>
						
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => handlePageChange(page)}
								className={`px-4 py-2 text-sm font-medium rounded-md ${
									currentPage === page
										? "bg-yellow-500 text-black"
										: "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
								}`}
							>
								{page}
							</button>
						))}
						
						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Next
						</button>
					</div>
				)}

				{/* View All Button */}
				<div className="text-center mt-12">
					<Link
						href="/listings/active"
						className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
					>
						View All Listings
						<span className="ml-2">→</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AvailableProperties;
