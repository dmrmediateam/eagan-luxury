import { Metadata } from 'next';

interface ListingPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    listingPhotoUrl?: string;
    listingPhotoWidth?: string;
    listingPhotoHeight?: string;
    listingAddress?: string;
    listingCity?: string;
  }>;
}

export async function generateMetadata({ 
  params, 
  searchParams 
}: ListingPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const {
    listingPhotoUrl,
    listingPhotoWidth,
    listingPhotoHeight,
    listingAddress,
    listingCity
  } = resolvedSearchParams;

  // Default values if not provided
  const address = listingAddress || 'Property';
  const city = listingCity || 'New Jersey';
  const photoUrl = listingPhotoUrl || '/placeholder-property.jpg';
  const photoWidth = listingPhotoWidth || '1200';
  const photoHeight = listingPhotoHeight || '800';

  return {
    title: `${address} - ${city} Real Estate | Cheryl Towey`,
    description: `Photos and Property Details for ${address}. Get complete property information, maps, street view, schools, walk score and more. Request additional information, schedule a showing, save to your property organizer.`,
    keywords: `${address}, ${city} Real Estate, ${city} Property for Sale`,
    openGraph: {
      title: `${address} - ${city} Real Estate`,
      description: `Photos and Property Details for ${address}. Get complete property information, maps, street view, schools, walk score and more.`,
      images: [
        {
          url: photoUrl,
          width: parseInt(photoWidth),
          height: parseInt(photoHeight),
          alt: `${address} property photo`,
        },
      ],
      type: 'website',
      siteName: 'Cheryl Towey Real Estate',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${address} - ${city} Real Estate`,
      description: `Photos and Property Details for ${address}. Get complete property information, maps, street view, schools, walk score and more.`,
      images: [photoUrl],
    },
  };
}

export default async function ListingDetailPage({ params, searchParams }: ListingPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const {
    listingPhotoUrl,
    listingPhotoWidth,
    listingPhotoHeight,
    listingAddress,
    listingCity
  } = resolvedSearchParams;

  const address = listingAddress || 'Property';
  const city = listingCity || 'New Jersey';

  return (
    <div className="min-h-screen">
      {/* Property Header */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
              {address}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {city} Real Estate
            </p>
          </div>
        </div>
      </section>

      {/* Property Details - iHomefinder will inject content here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            {/* iHomefinder property widget will be rendered here */}
            <div id="property-details">
              <div className="text-center p-8 text-gray-600">
                Loading property details...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-light">
        <div className="container-max text-center">
          <h2 className="text-3xl font-light text-black mb-6">
            Interested in This Property?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact Cheryl Towey for more information, to schedule a showing, or to discuss your real estate needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn-primary">
              Contact Cheryl
            </a>
            <a href="/listing" className="btn-outline">
              View All Listings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
