"use client";

import React from "react";
import dynamic from "next/dynamic";

// Import the PropertyMapNew component with ssr: false
const PropertyMapNew = dynamic(
	() => import("@/components/listings/PropertyMapNew"),
	{
		ssr: false
	}
);

interface PointOfInterest {
	name: string;
	position: [number, number];
	category: string;
	description: string;
	highlights: string[];
}

interface PropertyMapWrapperProps {
	propertyLocation: [number, number];
	propertyName: string;
	pointsOfInterest: PointOfInterest[];
}

// This is a client component wrapper that safely loads the map component
export default function PropertyMapWrapper({
	propertyLocation,
	propertyName,
	pointsOfInterest
}: PropertyMapWrapperProps) {
	return (
		<PropertyMapNew
			propertyLocation={propertyLocation}
			propertyName={propertyName}
			pointsOfInterest={pointsOfInterest}
		/>
	);
}
