import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
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
      <h2 className="text-3xl font-light text-ink mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-light text-ink mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-medium text-ink mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-ink-soft text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-ink-soft">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-ink-soft space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-ink-soft space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-accent hover:underline"
        target={value.blank ? "_blank" : undefined}
        rel={value.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={value.asset?.url}
          alt={value.alt || ''}
          className="w-full rounded"
        />
        {value.caption && (
          <p className="text-sm text-ink-soft mt-2 text-center">{value.caption}</p>
        )}
      </div>
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
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <Link href="/blog" className="text-sm text-ink-soft hover:text-accent mb-6 inline-block">
            ← Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-ink-soft mb-4">
              <span className="text-accent">{post.category}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-[3.5rem] leading-tight mb-6">
              {post.title}
            </h1>

            {post.author && (
              <div className="flex items-center gap-3 mb-8">
                {post.author.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                )}
                <span className="text-ink-soft">{post.author.name}</span>
              </div>
            )}

            <div className="w-12 h-px bg-accent mb-8" />

            <p className="text-xl text-ink-soft leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Smaller Featured Image */}
            {post.mainImage?.asset?.url && (
              <div className="relative aspect-[4/3] w-full mb-12 rounded overflow-hidden">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.content} components={portableTextComponents} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-ink/20">
                <h3 className="text-sm uppercase tracking-wider text-ink mb-4">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-ink/10 text-ink text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {post.author && (
              <div className="mt-16 p-8 tile">
                <div className="flex items-start gap-6">
                  {post.author.image && (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-light text-ink mb-3">
                      About {post.author.name}
                    </h3>
                    <p className="text-ink-soft leading-relaxed mb-4">
                      Expert real estate agent specializing in St. Petersburg and surrounding areas.
                      Helping families find their dream homes with personalized service and local market expertise.
                    </p>
                    <Link href="/contact" className="btn-primary inline-block">
                      Contact {post.author.name}
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-ink hover:text-accent transition-colors"
              >
                <span>←</span>
                <span>Back to All Insights</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
