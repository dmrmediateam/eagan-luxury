import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts';
import type { Metadata } from 'next';

export const revalidate = 60; // Revalidate every 60 seconds

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.description,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      images: [post.mainImage.asset.url],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

// Portable Text components for styling
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-light text-black mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-light text-black mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-medium text-black mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-dark text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gold pl-6 my-8 italic text-gray-dark">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-gray-dark space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-gray-dark space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-gold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-black">
        <img
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex items-end">
          <div className="container-max pb-16">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="inline-block bg-gold text-white px-4 py-2 text-xs uppercase tracking-wider mb-6">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full border-2 border-gold"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <span>{formattedDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Lead Paragraph */}
          <div className="text-xl text-gray-dark leading-relaxed mb-12 pb-8 border-b border-gray">
            {post.description}
          </div>

          {/* Main Content - Portable Text */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray">
              <h3 className="text-sm uppercase tracking-wider text-gray-dark mb-4">
                Topics
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-light text-black text-sm border border-gray rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-light border border-gray rounded-sm">
            <div className="flex items-start gap-6">
              {post.author.image && (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-24 h-24 rounded-full border-2 border-gold"
                />
              )}
              <div>
                <h3 className="text-2xl font-light text-black mb-3">
                  About {post.author.name}
                </h3>
                <p className="text-gray-dark leading-relaxed mb-4">
                  Expert real estate agent specializing in Morris County and surrounding areas.
                  Helping families find their dream homes with personalized service and local market expertise.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Contact {post.author.name}
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-black hover:text-gold transition-colors duration-200"
            >
              <span>←</span>
              <span className="text-lg">Back to All Insights</span>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-gray-light border-t border-gray">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto mb-8">
            Get expert guidance and exclusive access to listings in Morris County and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/listings" className="btn-outline">
              Browse Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

