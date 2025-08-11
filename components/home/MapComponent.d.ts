import * as React from "react";

export interface Location {
	id: string;
	title: string;
	description: string;
	coordinates: {
		lat: number;
		lng: number;
	};
}

export interface MapProps {
	locations: Location[];
	center: [number, number];
	zoom: number;
}

export function MapComponent(props: MapProps): React.ReactElement;
