import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/data/blogPosts';

export const revalidate = 60; // Revalidate every 60 seconds

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatCategory(category: string): string {
  return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <p className="eyebrow">Blog</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Market Insights & Blog
          </h1>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            All Stories
          </h2>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post._id} className="group">
                  <Link href={`/blog/${post.slug.current}`} className="block">
                    <div className="relative aspect-[4/3] mb-6 rounded overflow-hidden">
                      {post.mainImage?.asset?.url ? (
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-ink/10" />
                      )}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-ink-soft">
                        <span className="text-accent">{formatCategory(post.category || '')}</span>
                        <span>•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <h3 className="text-2xl font-light text-ink group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <div className="w-12 h-px bg-accent" />
                      <p className="text-ink-soft leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="tile-muted max-w-2xl">
              <p className="eyebrow">Coming Soon</p>
              <div className="rule mb-4" />
              <p className="text-base text-ink-soft">
                Blog posts and market insights coming soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
