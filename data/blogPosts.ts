// Blog post data structure from Sanity CMS
import { client } from '@/lib/sanity'

export interface BlogPost {
  _id: string;
  _type: 'blog';
  slug: {
    current: string;
  };
  title: string;
  category: string;
  excerpt: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  publishedAt: string;
  author: {
    name: string;
    image?: string;
  };
  readTime?: string;
  content: any[];
  tags?: string[];
  seo?: {
    metaTitle: string;
    metaDescription: string;
  };
}

// Fetch single blog post by slug from Sanity
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    _type,
    slug,
    title,
    category,
    excerpt,
    "mainImage": {
      "asset": {
        "url": mainImage.asset->url
      },
      "alt": mainImage.alt
    },
    publishedAt,
    "author": author->{
      name,
      "image": image.asset->url
    },
    readTime,
    content,
    tags,
    seo
  }`
  
  try {
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Fetch all blog posts from Sanity
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc){
    _id,
    _type,
    slug,
    title,
    category,
    excerpt,
    "mainImage": {
      "asset": {
        "url": mainImage.asset->url
      },
      "alt": mainImage.alt
    },
    publishedAt,
    "author": author->{
      name,
      "image": image.asset->url
    },
    readTime,
    tags,
    seo
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}
