import {
	ContentHeader,
	ContentBody,
	ContentRelated,
	formatPressRelease,
	formatRelatedPressReleases
} from "@/components/content";
import PressContact from "@/components/content/PressContact";
import { Newsletter } from "@/components/content/Newsletter";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	getPressReleaseBySlug,
	getRecentPressReleases
} from "@/sanity/queries/pressReleases";

// Define the expected params type
type Params = Promise<{ id: string }>;

type PressReleasePageProps = {
	params: Params;
};

export async function generateMetadata({
	params
}: PressReleasePageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const { id } = resolvedParams;

	// Get the press release from Sanity using the slug
	const pressRelease = await getPressReleaseBySlug(id);

	if (!pressRelease) {
		return {
			title: "Press Release Not Found | Cheryl Towey | New Jersey, WI",
			description: "The requested press release could not be found."
		};
	}

	return {
		title: `${pressRelease.title} | Cheryl Towey | New Jersey, WI`,
		description: pressRelease.excerpt
	};
}

export default async function PressReleasePage({
	params
}: PressReleasePageProps) {
	// Await the params Promise to get the actual params object
	const resolvedParams = await params;
	const { id } = resolvedParams;

	// Get the press release from Sanity using the slug
	const pressRelease = await getPressReleaseBySlug(id);

	if (!pressRelease) {
		notFound();
	}

	// Get related press releases (recent releases, excluding the current one)
	const recentReleases = await getRecentPressReleases(4);
	// Filter out only the current press release (no category filtering)
	const relatedReleases = recentReleases
		.filter((p: { slug: string }) => p.slug !== id)
		.slice(0, 3);

	// Format press release using our utility function
	const formattedPressRelease = formatPressRelease(pressRelease);

	// Format related press releases using our utility function
	const formattedRelatedReleases =
		formatRelatedPressReleases(relatedReleases);

	return (
		<>
			{/* Content Header Component */}
			<ContentHeader item={formattedPressRelease} type="press" />

			<div className="bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-12 lg:py-24">
					{/* Content Body Component */}
					<ContentBody content={pressRelease.content} />

					{/* Related Content Component */}
					<ContentRelated
						items={formattedRelatedReleases}
						type="press"
					/>

					{/* Press Contact Component */}
					<PressContact />
				</div>
			</div>

			{/* Newsletter Component */}
			<Newsletter />

			{/* Contact Section */}
			<ContactNew />

			{/* Footer */}
			<FooterNew />
		</>
	);
}
