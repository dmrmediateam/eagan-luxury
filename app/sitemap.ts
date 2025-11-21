import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generation for Eagan Luxury Real Estate Website
 * This file automatically generates a sitemap.xml at /sitemap.xml
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eaganluxury.com';
  const currentDate = new Date();
  
  // Featured communities from navigation
  const featuredCommunities = [
    'dolphin-cay',
    'tierra-verde',
    'bacopa-bay',
    'st-petersburg-waterfront',
    'downtown-st-petersburg',
  ];

  const communitySubPages = ['magazine', 'restaurants', 'businesses', 'marinas', 'resources'];

  const sitemap: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // Main Pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sellers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/communities`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Featured Communities
    ...featuredCommunities.flatMap(community => [
      {
        url: `${baseUrl}/${community}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      ...communitySubPages.map(subPage => ({
        url: `${baseUrl}/${community}/${subPage}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      })),
    ]),
    
    // Legal Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fair-housing`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mls-information`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return sitemap;
}
