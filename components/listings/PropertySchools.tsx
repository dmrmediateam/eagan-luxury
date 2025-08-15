"use client";

import React from "react";
import { motion } from "framer-motion";

interface PropertySchoolsProps {
	city: string;
	county: string;
}

const PropertySchools: React.FC<PropertySchoolsProps> = ({ city, county }) => {
	// Default school data for New Jersey cities
	const defaultSchools = {
		'Hackettstown': {
			elementary: ['Hackettstown Elementary School', 'Willow Grove Elementary School'],
			middle: ['Hackettstown Middle School'],
			high: ['Hackettstown High School'],
			private: ['St. Mary School', 'Centenary University']
		},
		'Washington': {
			elementary: ['Washington Elementary School', 'Port Colden Elementary School'],
			middle: ['Warren Hills Regional Middle School'],
			high: ['Warren Hills Regional High School'],
			private: ['St. Joseph School']
		},
		'Andover': {
			elementary: ['Andover Regional Elementary School'],
			middle: ['Andover Regional Middle School'],
			high: ['Newton High School'],
			private: ['Pope John XXIII Regional High School']
		},
		'Byram': {
			elementary: ['Byram Lakes Elementary School', 'Stanhope Elementary School'],
			middle: ['Byram Intermediate School'],
			high: ['Lenape Valley Regional High School'],
			private: ['St. Michael School']
		},
		'Blairstown': {
			elementary: ['Blairstown Elementary School'],
			middle: ['Blairstown Middle School'],
			high: ['North Warren Regional High School'],
			private: ['Blair Academy']
		},
		'Chester': {
			elementary: ['Dickerson Elementary School', 'Bragg Elementary School'],
			middle: ['Black River Middle School'],
			high: ['West Morris Central High School'],
			private: ['St. Lawrence School']
		}
	};

	const citySchools = defaultSchools[city as keyof typeof defaultSchools] || {
		elementary: ['Local Elementary School'],
		middle: ['Local Middle School'],
		high: ['Local High School'],
		private: ['Local Private Schools']
	};

	const schoolTypes = [
		{ title: 'Elementary Schools', schools: citySchools.elementary },
		{ title: 'Middle Schools', schools: citySchools.middle },
		{ title: 'High Schools', schools: citySchools.high },
		{ title: 'Private Schools', schools: citySchools.private }
	];

	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
			<h3 className="text-xl font-serif font-light mb-4">Nearby Schools</h3>
			<p className="text-gray-600 text-sm mb-6">
				Schools serving the {city}, {county} County area
			</p>
			
			<div className="space-y-6">
				{schoolTypes.map((type, typeIndex) => (
					<div key={typeIndex}>
						<h4 className="font-medium text-gray-900 mb-3">{type.title}</h4>
						<div className="space-y-2">
							{type.schools.map((school, schoolIndex) => (
								<motion.div
									key={schoolIndex}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: (typeIndex * 0.1) + (schoolIndex * 0.05) }}
									className="flex items-center text-gray-700"
								>
									<svg className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
									</svg>
									<span className="text-sm">{school}</span>
								</motion.div>
							))}
						</div>
					</div>
				))}
			</div>
			
			<div className="mt-6 p-4 bg-gray-50 rounded-lg">
				<p className="text-xs text-gray-600">
					* School information is provided for reference only. Please verify with the school district for the most current information.
				</p>
			</div>
		</div>
	);
};

export default PropertySchools;
