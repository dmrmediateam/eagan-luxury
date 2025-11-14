import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blogPosts';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Market Insights & Blog
          </h1>
          <p className="text-lg text-gray-dark leading-relaxed">
            Expert perspectives and essential resources for navigating New Jersey's real estate market.
            Stay informed with the latest trends, market analysis, and home buying strategies.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white border border-gray rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-light overflow-hidden">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-dark mb-3 flex items-center gap-2">
                    <span>{formattedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-medium text-black mb-3 group-hover:text-gold transition-colors duration-200 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-dark text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center text-black group-hover:text-gold transition-colors duration-200">
                    <span className="text-sm font-medium mr-2">Read Article</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State (shown when no posts) */}
        {posts.length === 0 && (
          <div className="bg-gray-light p-12 rounded-sm text-center">
            <img
              src="/images/no-image.svg"
              alt="No blog posts"
              className="w-48 mx-auto opacity-40 mb-6"
            />
            <p className="text-gray-dark text-lg">
              Blog posts and market insights coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

