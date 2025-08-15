"use client";

import React from "react";
import { motion } from "framer-motion";

interface PropertyAmenitiesProps {
	listing: any;
}

const PropertyAmenities: React.FC<PropertyAmenitiesProps> = ({ listing }) => {
	// Extract amenities from listing data or use defaults
	const amenities = listing.amenities || [];
	const propertyType = listing.propertyType || 'Residential';

	// Default amenities based on property type if none provided
	const defaultAmenities = {
		'Residential': [
			'Central Air Conditioning',
			'Forced Air Heating',
			'Hardwood Floors',
			'Updated Kitchen',
			'Finished Basement',
			'Attached Garage',
			'Deck/Patio',
			'Fireplace'
		],
		'Condo': [
			'Central Air Conditioning',
			'Forced Air Heating',
			'Hardwood Floors',
			'Updated Kitchen',
			'In-Unit Laundry',
			'Balcony',
			'Storage Unit',
			'Pool Access'
		],
		'Multi-Family': [
			'Central Air Conditioning',
			'Forced Air Heating',
			'Hardwood Floors',
			'Updated Kitchen',
			'Shared Laundry',
			'Off-Street Parking',
			'Backyard',
			'Fireplace'
		]
	};

	const displayAmenities = amenities.length > 0 
		? amenities 
		: defaultAmenities[propertyType as keyof typeof defaultAmenities] || defaultAmenities.Residential;

	if (!displayAmenities || displayAmenities.length === 0) {
		return null;
	}

	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
			<h3 className="text-xl font-serif font-light mb-4">Property Amenities</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{displayAmenities.map((amenity: string, index: number) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.05 }}
						className="flex items-center text-gray-700"
					>
						<svg className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="text-sm">{amenity}</span>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default PropertyAmenities;
