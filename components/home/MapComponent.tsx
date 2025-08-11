"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Define the Location interface for the markers
export interface Location {
	id: string;
	title: string;
	description: string;
	coordinates: {
		lat: number;
		lng: number;
	};
}

// Props for the Map component
export interface MapProps {
	locations: Location[];
	center: [number, number];
	zoom: number;
	hoveredLocation?: string | null;
}

export function MapComponent({
	locations,
	center,
	zoom,
	hoveredLocation
}: MapProps) {
	// Reference to ensure styles are only added once
	const stylesRef = useRef(false);

	// Add custom styles for the map and markers
	useEffect(() => {
		if (stylesRef.current) return;

		const style = document.createElement("style");
		style.innerHTML = `
			.leaflet-container {
				height: 100%;
				width: 100%;
				font-family: inherit;
			}
			.leaflet-popup-content-wrapper {
				border-radius: 2px;
				box-shadow: 0 3px 12px rgba(0,0,0,0.1);
			}
			.leaflet-popup-content {
				margin: 12px 16px;
				line-height: 1.5;
			}
			.location-popup h4 {
				font-family: serif;
				font-size: 16px;
				color: #1A1A1A;
				margin: 0 0 6px;
			}
			.location-popup p {
				font-size: 13px;
				color: rgba(43, 43, 43, 0.7);
				margin: 0;
			}
			.custom-div-icon {
				background: transparent;
				border: none;
			}
			.marker-pin {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.pin-dot {
				width: 16px;
				height: 16px;
				background-color: #B08D57;
				border-radius: 50%;
				z-index: 10;
				transition: transform 0.3s ease, box-shadow 0.3s ease;
			}
			.pin-dot.hovered {
				transform: scale(1.5);
				box-shadow: 0 0 12px rgba(176, 141, 87, 0.7);
			}
			.pin-pulse {
				position: absolute;
				width: 24px;
				height: 24px;
				background-color: rgba(176, 141, 87, 0.5);
				border-radius: 50%;
				animation: pulse 1.5s infinite;
			}
			.pin-pulse.hovered {
				animation: pulse-hovered 1.5s infinite;
				background-color: rgba(176, 141, 87, 0.7);
			}
			@keyframes pulse {
				0% {
					transform: scale(1);
					opacity: 0.5;
				}
				70% {
					transform: scale(2);
					opacity: 0;
				}
				100% {
					transform: scale(1);
					opacity: 0;
				}
			}
			@keyframes pulse-hovered {
				0% {
					transform: scale(1);
					opacity: 0.7;
				}
				70% {
					transform: scale(2.5);
					opacity: 0;
				}
				100% {
					transform: scale(1);
					opacity: 0;
				}
			}
		`;
		document.head.appendChild(style);
		stylesRef.current = true;

		return () => {
			document.head.removeChild(style);
			stylesRef.current = false;
		};
	}, []);

	// Create a custom div icon for the pulsing effect
	const createPulsingIcon = (locationId: string) => {
		const isHovered = hoveredLocation === locationId;

		return L.divIcon({
			className: "custom-div-icon",
			html: `
				<div class="marker-pin">
					<div class="pin-dot ${isHovered ? "hovered" : ""}"></div>
					<div class="pin-pulse ${isHovered ? "hovered" : ""}"></div>
				</div>
			`,
			iconSize: [30, 30],
			iconAnchor: [15, 15]
		});
	};

	function MapSizeInvalidator() {
		const map = useMap();
		useEffect(() => {
			const invalidate = () => {
				try {
					map.invalidateSize(false);
				} catch {
					// no-op
				}
			};
			// Invalidate after initial mount and next frame to account for animations
			invalidate();
			const t = setTimeout(invalidate, 0);
			window.addEventListener("resize", invalidate);
			return () => {
				clearTimeout(t);
				window.removeEventListener("resize", invalidate);
			};
		}, [map]);
		return null;
	}

	return (
		<MapContainer
			center={center}
			zoom={zoom}
			scrollWheelZoom={false}
			dragging={false}
			style={{ height: "100%", width: "100%" }}
			zoomControl={false}
			attributionControl={false}>
			<MapSizeInvalidator />
			{/* Premium map tiles - use a light styled map for luxury aesthetic */}
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
			/>

			{/* Location Markers with Pulsing Effect */}
			{locations.map((location) => (
				<Marker
					key={location.id}
					position={[
						location.coordinates.lat,
						location.coordinates.lng
					]}
					icon={createPulsingIcon(location.id)}>
					<Popup>
						<div className="location-popup">
							<h4>{location.title}</h4>
							<p>{location.description}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}
