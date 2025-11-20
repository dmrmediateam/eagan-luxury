import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostsByTag } from '@/sanity/queries/blogPosts';

export const metadata: Metadata = {
  title: 'Dolphin Cay Magazine | Community Stories & Lifestyle | Eagan Luxury',
  description: 'Explore Dolphin Cay through our community magazine. Discover lifestyle features, resident stories, and insights into life in this premier St. Petersburg community.',
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatCategory(category: string): string {
  return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default async function DolphinCayMagazinePage() {
  const blogPosts = await getBlogPostsByTag('Dolphin Cay');

  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <Link href="/dolphin-cay" className="text-sm text-ink-soft hover:text-accent mb-6 inline-block">
            ← Back to Dolphin Cay
          </Link>
          <p className="eyebrow">Magazine</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Dolphin Cay Magazine
          </h1>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            All Dolphin Cay Stories
          </h2>

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((article) => (
                <article key={article._id} className="group">
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="relative aspect-[4/3] mb-6 rounded overflow-hidden">
                      {article.mainImage?.url ? (
                        <Image
                          src={article.mainImage.url}
                          alt={article.mainImage.alt || article.title}
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
                        <span className="text-accent">{formatCategory(article.category || '')}</span>
                        <span>•</span>
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <h3 className="text-2xl font-light text-ink group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <div className="w-12 h-px bg-accent" />
                      <p className="text-ink-soft leading-relaxed">
                        {article.excerpt}
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
                Check back soon for exclusive content and community features.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

