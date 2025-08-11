import {
	ContentHeader,
	ContentBody,
	ContentRelated,
	formatBlogPost,
	formatRelatedBlogPosts
} from "@/components/content";
import { Newsletter } from "@/components/content/Newsletter";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import NavbarNew from "@/components/home/NavbarNew";
import type { Metadata } from "next";
import {
	getBlogPostBySlug,
	getRecentBlogPosts
} from "@/sanity/queries/blogPosts";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

type BlogPostPageProps = {
	params: Params;
};

export async function generateMetadata({
	params
}: BlogPostPageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const { id } = resolvedParams;

	// Get the post from Sanity using the slug
	const post = await getBlogPostBySlug(id);

	if (!post) {
		return {
			title: "Post Not Found | Legendary Real Estate | Lake Geneva, WI",
			description: "The requested blog post could not be found."
		};
	}

	return {
		title: `${post.title} | Legendary Real Estate | Lake Geneva, WI`,
		description: post.excerpt
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	// Await the params Promise to get the actual params object
	const resolvedParams = await params;
	const { id } = resolvedParams;

	// Get the post from Sanity using the slug
	const post = await getBlogPostBySlug(id);

	if (!post) {
		notFound();
	}

	// Get related posts (recent posts, excluding the current one)
	const recentPosts = await getRecentBlogPosts(4);
	const relatedPosts = recentPosts
		.filter(
			(p: { slug: string; category: string }) =>
				p.slug !== id && p.category === post.category
		)
		.slice(0, 3);

	// Transform the Sanity post to our ContentItem format
	const formattedPost = formatBlogPost(post);

	// Format related posts to our ContentItem format
	const formattedRelatedPosts = formatRelatedBlogPosts(relatedPosts);

	return (
		<>
			{/* Navbar Component */}
			<NavbarNew />

			{/* Content Header Component */}
			<ContentHeader item={formattedPost} type="blog" />

			<div className="bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-12 lg:py-24">
					{/* Content Body Component */}
					<ContentBody content={post.content} />

					{/* Related Content Component */}
					<ContentRelated items={formattedRelatedPosts} type="blog" />
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
