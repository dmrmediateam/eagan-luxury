import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCommunityBySlug } from "@/sanity/queries/communities";
import { FooterNew } from "@/components/home/FooterNew";
import CommunityHero from "@/components/communities/CommunityHero";
import CommunityAbout from "@/components/communities/CommunityAbout";
import CommunityMap from "@/components/communities/CommunityMap";
import CommunityListings from "@/components/communities/CommunityListings";
import AvailableProperties from "@/components/communities/AvailableProperties";

export async function generateMetadata({
	params
}: {
	params: Promise<{ community: string }>;
}): Promise<Metadata> {
	// Ensure params is properly resolved before accessing properties
	const resolvedParams = await params;
	const communitySlug = resolvedParams.community;

	if (!communitySlug) {
		return {
			title: "Community Not Found",
			description: "The community you're looking for doesn't exist"
		};
	}

	const community = await getCommunityBySlug(communitySlug);

	if (!community) {
		return {
			title: "Community Not Found",
			description: "The community you're looking for doesn't exist"
		};
	}

	return {
		title: `${community.title} | Community Guide`,
		description: community.description.substring(0, 160)
	};
}

export default async function CommunityPage({
	params
}: {
	params: Promise<{ community: string }>;
}) {
	const resolvedParams = await params;
	const communitySlug = resolvedParams.community;

	if (!communitySlug) {
		notFound();
	}

	const community = await getCommunityBySlug(communitySlug);

	if (!community) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-white">
			<CommunityHero
				title={community.title}
				county={community.county}
				image={community.mainImage}
			/>

			<CommunityAbout
				title={community.title}
				description={community.description}
				image={{
					url: community.mainImage.url,
					alt: community.mainImage.alt
				}}
				stats={{
					population: "12,500",
					established: "1965",
					medianHomePrice: "$425,000"
				}}
			/>

			<CommunityMap
				areas={community.areasOfInterest}
				communityLocation={community.communityLocation}
				communityRadius={community.mapRadius}
			/>

			<AvailableProperties
				communityName={community.title}
				communitySlug={communitySlug}
			/>

			{community.relatedListings &&
				community.relatedListings.length > 0 && (
					<CommunityListings listings={community.relatedListings} />
				)}

			<FooterNew />
		</main>
	);
}
