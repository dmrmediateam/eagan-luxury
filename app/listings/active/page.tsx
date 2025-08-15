import { getListingsWithMedia } from '@/lib/db'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Listing } from '@/types/listing'

export const metadata: Metadata = {
  title: 'Active Listings | Cheryl Towey - New Jersey Real Estate Agent',
  description: 'Browse all active real estate listings in New Jersey. Find your perfect home in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.',
  keywords: 'New Jersey Real Estate, Active Listings, Cheryl Towey, Weichert Realtors, Hackettstown, Andover, Byram, Blairstown, Chester, Washington',
}

export default async function ActiveListingsPage() {
  const listings = await getListingsWithMedia({ 
    status: 'Active',
    limit: 50 
  })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // Format price
  const formatPrice = (price?: number) => {
    if (!price) return "Price on request"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  // Format address
  const formatAddress = (listing: Listing) => {
    return `${listing.addressFull}, ${listing.city}, ${listing.state} ${listing.postalCode}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6">
              Active Listings
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-[#222223]/70 max-w-3xl mx-auto">
              Discover exceptional properties in New Jersey. Browse our current listings in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20">
        <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
          {listings.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {listings.map((listing) => (
                <motion.div
                  key={listing.id}
                  variants={itemVariants}
                  className="bg-white border border-[#E5E5E5] shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <Link href={`/listing/${listing.listingKey}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={listing.media[0]?.url || '/chery-towey.jpg'}
                        alt={formatAddress(listing)}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 px-3 py-2 rounded">
                        <span className="text-secondary font-medium">
                          {formatPrice(listing.listPrice)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-light mb-2 text-[#222223]">
                        {formatAddress(listing)}
                      </h3>
                      
                      <p className="text-[#222223]/70 mb-4">
                        {listing.bedsTotal} Beds • {listing.bathsFull} Baths • {listing.livingArea?.toLocaleString()} Sq Ft
                      </p>
                      
                      <div className="flex items-center text-secondary text-sm uppercase tracking-wider">
                        <span>View Details</span>
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-serif font-light mb-4">No Active Listings</h2>
              <p className="text-[#222223]/70 mb-8">
                Currently, there are no active listings available. Please check back soon or contact Cheryl for the latest properties.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-secondary text-[#222223] font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-secondary-dark"
              >
                Contact Cheryl
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
