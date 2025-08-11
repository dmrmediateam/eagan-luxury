"use client";

import { Suspense } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

// Loading component
const StudioLoadingScreen = () => (
	<div
		style={{
			height: "100vh",
			width: "100vw",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "#121212",
			color: "white",
			fontFamily: "Poppins, sans-serif"
		}}>
		<div>
			<h2>Loading Studio...</h2>
			<div
				style={{
					width: "200px",
					height: "4px",
					background: "#333",
					borderRadius: "2px",
					overflow: "hidden"
				}}>
				<div
					style={{
						width: "30%",
						height: "100%",
						background: "#3b82f6",
						animation: "loading 1.5s infinite"
					}}
				/>
			</div>
			<style jsx>{`
				@keyframes loading {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(400%);
					}
				}
			`}</style>
		</div>
	</div>
);

export default function StudioPage() {
	return (
		<Suspense fallback={<StudioLoadingScreen />}>
			<NextStudio config={config} />
		</Suspense>
	);
}
