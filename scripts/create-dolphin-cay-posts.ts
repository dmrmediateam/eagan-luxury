/**
 * Script to create sample blog posts for Dolphin Cay
 * Run with: npx tsx scripts/create-dolphin-cay-posts.ts
 * 
 * Make sure to set SANITY_API_TOKEN in your environment variables
 */

import { createClient } from '@sanity/client';

if (!process.env.SANITY_API_TOKEN) {
  throw new Error('SANITY_API_TOKEN environment variable is required. Please set it in your .env.local file.');
}

const client = createClient({
  projectId: '7yjd71xv',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const samplePosts = [
  {
    title: 'Waterfront Living Redefined in Dolphin Cay',
    excerpt: 'Discover how Dolphin Cay residents are embracing the ultimate Gulf Coast lifestyle with private marinas, world-class amenities, and unparalleled waterfront access.',
    category: 'lifestyle',
    tags: ['Dolphin Cay', 'Waterfront', 'Lifestyle'],
    publishedAt: new Date('2024-03-15').toISOString(),
    content: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Dolphin Cay represents the pinnacle of Gulf Coast living, where sophisticated architecture meets unparalleled waterfront access. This exclusive community offers residents a lifestyle defined by luxury, convenience, and natural beauty.',
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    title: 'The Art of Coastal Architecture in Dolphin Cay',
    excerpt: 'Explore the sophisticated design principles behind Dolphin Cay\'s luxury residences, where modern elegance meets timeless Gulf Coast charm.',
    category: 'interior-design',
    tags: ['Dolphin Cay', 'Architecture', 'Design'],
    publishedAt: new Date('2024-02-20').toISOString(),
    content: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'The architectural vision of Dolphin Cay seamlessly blends contemporary luxury with the timeless appeal of coastal living. Each residence is thoughtfully designed to maximize waterfront views while providing exceptional comfort and style.',
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    title: 'Dining Along the Dolphin Cay Waterfront',
    excerpt: 'From intimate waterfront restaurants to exclusive private dining experiences, discover the culinary scene that makes Dolphin Cay a destination for food enthusiasts.',
    category: 'dining',
    tags: ['Dolphin Cay', 'Dining', 'Restaurants'],
    publishedAt: new Date('2024-01-10').toISOString(),
    content: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Dolphin Cay offers an exceptional culinary landscape, from fine dining establishments with panoramic water views to casual waterfront cafes. The community has become a destination for those who appreciate both exceptional cuisine and stunning surroundings.',
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
];

async function createSamplePosts() {
  console.log('Creating sample blog posts for Dolphin Cay...\n');

  for (const post of samplePosts) {
    try {
      const slug = post.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');

      const document = {
        _type: 'contentPost',
        contentType: 'blog',
        title: post.title,
        slug: {
          _type: 'slug',
          current: slug,
        },
        excerpt: post.excerpt,
        category: post.category,
        tags: post.tags,
        publishedAt: post.publishedAt,
        content: post.content,
      };

      const result = await client.create(document);
      console.log(`✓ Created: ${post.title} (ID: ${result._id})`);
    } catch (error: any) {
      console.error(`✗ Error creating "${post.title}":`, error.message);
    }
  }

  console.log('\nDone! Sample posts created.');
}

createSamplePosts().catch(console.error);


