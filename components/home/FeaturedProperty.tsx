"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { client } from "@/lib/client";
import { SanityListing } from "@/types/sanity";
import { useEffect, useState } from "react";
import { urlForImage } from "@/lib/sanity-utils";

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: custom * 0.1,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

// Function to fetch the most expensive active listing
async function getMostExpensiveListing(): Promise<SanityListing | null> {
	const query = groq`
    *[_type == "listing" && status == "active" && defined(heroMedia.heroImage.asset._ref)] | order(price desc) [0] {
      _id,
      title,
      slug,
      price,
      address {
        street,
        region,
        state,
        zipCode
      },
      propertyDetails,
      heroMedia {
        heroImage {
          asset {
            _ref
          }
        }
      }
    }
  `;

	try {
		const listing = await client.fetch<SanityListing>(query);
		return listing;
	} catch (error) {
		console.error("Failed to fetch most expensive listing:", error);
		return null;
	}
}

export function FeaturedProperty() {
	const [listing, setListing] = useState<SanityListing | null>(null);
	const [imageUrl, setImageUrl] = useState<string>("/media/featured.jpg");

	useEffect(() => {
		const fetchListing = async () => {
			const result = await getMostExpensiveListing();
			setListing(result);

			if (result?.heroMedia?.heroImage?.asset?._ref) {
				const url =
					urlForImage(result.heroMedia.heroImage)?.url() ||
					"/media/featured.jpg";
				setImageUrl(url);
			}
		};

		fetchListing();
	}, []);

	// Format address
	const formattedAddress = listing?.address
		? `${listing.address.street || ""}, ${listing.address.region || ""}, ${listing.address.state || ""} ${listing.address.zipCode || ""}`.toUpperCase()
		: "";

	// Format price
	const formattedPrice = listing?.price
		? new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
				maximumFractionDigits: 0
			}).format(listing.price)
		: "";

	return (
		<section className="bg-luxury-offwhite relative section-padding">
			<div className="container-luxury">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center mb-16">
					<motion.h2
						custom={0}
						variants={textVariants}
						className="text-luxury-charcoal font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
						Featured Property
					</motion.h2>
					<motion.div
						custom={1}
						variants={textVariants}
						className="luxury-divider mx-auto"></motion.div>
				</motion.div>

				{/* Property Card */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="max-w-6xl mx-auto overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-shadow duration-500">
					{/* Image */}
					<motion.div
						custom={2}
						variants={textVariants}
						className="relative w-full h-[70vh] overflow-hidden">
						<Image
							src={imageUrl}
							alt="Featured Property"
							className="object-cover object-center"
							width={2000}
							height={1200}
							priority
							style={{ width: "100%", height: "100%" }}
						/>
					</motion.div>

					{/* Property Details */}
					<motion.div
						custom={3}
						variants={textVariants}
						className="bg-luxury-white p-8 md:p-12">
						<h3 className="text-luxury-charcoal font-serif text-xl md:text-2xl mb-4">
							{listing ? formattedAddress : "Luxury Property"}
						</h3>
						<p className="text-luxury-gold font-serif text-2xl md:text-3xl mb-6">
							{listing ? formattedPrice : "$3,500,000"}
						</p>
						<p className="text-luxury-charcoal/80 mb-8">
							{listing?.propertyDetails
								? `${listing.propertyDetails.beds || 0} Beds | ${listing.propertyDetails.baths || 0} Baths | ${listing.propertyDetails.sqft?.toLocaleString() || 0} Sq Ft`
								: "4 Beds | 3.5 Baths | 3,200 Sq Ft"}
						</p>
						<Link
							href={
								listing?.slug?.current
									? `/listings/${listing.slug.current}`
									: "/listings/active"
							}
							className="btn-secondary inline-block">
							View Details
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
