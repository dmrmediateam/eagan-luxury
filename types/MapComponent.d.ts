declare module "./MapComponent" {
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

	export function MapComponent(props: MapProps): JSX.Element;
}
