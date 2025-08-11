import { Metadata } from "next";
import { getAllCommunities } from "@/sanity/queries/communities";
import CommunitiesHero from "@/components/communities/CommunitiesHero";
import CommunitiesGrid from "@/components/communities/CommunitiesGrid";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Communities | Real Estate",
	description: "Explore our featured communities and neighborhoods"
};

// Define the Community type to fix TypeScript errors
interface Community {
	_id: string;
	slug: string;
	title: string;
	county: string;
	description: string;
	amenities: string[];
	mainImage: {
		url: string;
		alt: string;
	};
}

export default async function CommunitiesPage() {
	const communities = (await getAllCommunities()) as Community[];

	return (
		<main className="min-h-screen bg-white">
			{/* Full-screen hero section */}
			<CommunitiesHero
				title="Discover Your Perfect Community"
				subtitle="Explore our curated selection of premier communities and find the perfect neighborhood to call home."
			/>

			{/* Communities Grid Section */}
			<CommunitiesGrid communities={communities} />

			<FooterNew />
		</main>
	);
}
