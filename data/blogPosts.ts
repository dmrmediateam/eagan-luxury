// Blog post data structure from Sanity CMS
import { client } from '@/lib/sanity'

export interface BlogPost {
  _id: string;
  _type: 'post';
  slug: {
    current: string;
  };
  title: string;
  category: string;
  description: string;
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
  readTime: string;
  body: any[];
  tags?: string[];
  seo?: {
    metaTitle: string;
    metaDescription: string;
  };
}

// Sample blog post - This will be replaced by Sanity API calls
export const sampleBlogPost: BlogPost = {
  _id: '1',
  _type: 'post',
  slug: {
    current: 'morris-county-nj-homes-complete-buyers-guide'
  },
  title: 'Morris County NJ Homes: Complete Guide to Towns & Schools',
  category: 'Market Report',
  description: 'Morris County NJ homes average $696K with top schools, 35-min NYC commutes. Guide covers Morristown, Madison, Chatham, property taxes, and buying strategies.',
  mainImage: {
    asset: {
      url: '/images/326804e30db4dd3a9bf3ba35ee1c0298b4a99898-1024x1024.webp'
    },
    alt: 'Morris County New Jersey homes and neighborhoods'
  },
  publishedAt: '2025-01-15T10:00:00Z',
  author: {
    name: 'Cheryl Lauer',
    image: '/images/cheryl.webp'
  },
  readTime: '8 min read',
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Morris County, New Jersey represents one of the most sought-after real estate markets in the state, offering an exceptional combination of top-rated schools, convenient commuter access to New York City, and charming downtown districts.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Why Morris County?'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'With median home prices around $696,000, Morris County attracts families and professionals seeking quality of life, excellent education, and a strong sense of community. The county offers diverse housing options from historic colonials to modern new construction.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Top Towns in Morris County'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Morristown'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Known as the "military capital of the American Revolution," Morristown combines rich history with modern amenities. The downtown offers excellent dining, shopping, and entertainment. Homes range from $400K to over $2M.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Madison'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Madison boasts a walkable downtown, top-rated schools, and a strong community feel. The Rose City is perfect for families seeking excellent education and quick NYC access via NJ Transit. Median home price: $650K.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Chatham'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Chatham offers a quintessential small-town atmosphere with highly-rated schools, tree-lined streets, and a charming downtown. The borough is known for its strong property values and family-friendly environment.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Schools and Education'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Morris County is home to some of New Jersey\'s highest-rated school districts. Many towns feature Blue Ribbon schools and consistently rank in the top percentiles for academic achievement, college preparation, and extracurricular programs.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Commuting to NYC'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Most Morris County towns offer 35-45 minute commutes to Manhattan via NJ Transit. The Morris & Essex line provides reliable service with multiple stations throughout the county. For drivers, Routes 287, 80, and 24 provide easy highway access.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Property Taxes and Costs'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Property taxes in Morris County average 2.3% of home value annually. While higher than some areas, residents receive excellent services, top-tier education, and strong property value appreciation. The average annual tax bill ranges from $15,000 to $25,000 depending on the municipality.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Buying Strategy Tips'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Working with a local real estate expert who knows Morris County intimately is crucial. The market moves quickly, especially for well-priced homes in top school districts. Pre-approval, flexibility on closing dates, and understanding local market nuances can make the difference in securing your dream home.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Ready to Explore Morris County?'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Whether you\'re a first-time buyer or looking to upgrade, Morris County offers exceptional value and quality of life. Contact me today for a personalized consultation and exclusive access to listings before they hit the market.'
        }
      ]
    }
  ],
  tags: ['Morris County', 'Home Buying', 'School Districts', 'NYC Commute', 'New Jersey Real Estate'],
  seo: {
    metaTitle: 'Morris County NJ Homes: Complete Buyers Guide 2025 | Schools, Towns & Commute',
    metaDescription: 'Comprehensive guide to buying homes in Morris County, NJ. Learn about top towns like Morristown, Madison, Chatham, school ratings, NYC commute times, and buying strategies.'
  }
};

// Fetch single blog post by slug from Sanity
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _type,
    slug,
    title,
    category,
    description,
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
    body,
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
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    _type,
    slug,
    title,
    category,
    description,
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

