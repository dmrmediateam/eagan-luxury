import { groq } from "next-sanity";
import { client } from "@/lib/client";

// Query to get all listings
export async function getAllListings() {
	return client.fetch(
		groq`*[_type == "listing"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      status,
      isFeatured,
      price,
      "address": address.street + ", " + address.region + ", " + address.state + " " + address.zipCode,
      "region": address.region,
      "state": address.state,
      "heroImage": heroMedia.heroImage,
      propertyDetails {
        beds,
        baths,
        sqft,
        lotSizeAcres,
        yearBuilt,
        propertyType,
        hasPool,
        hasSpa,
        hasView
      },
      features,
      publishedAt,
      buyerOrSeller,
      floorPlan {
        floorPlanImage,
        floorPlanPdf
      },
      sitePlan {
        sitePlanImage,
        sitePlanPdf
      }
    }`
	);
}

// Query to get a listing by slug
export async function getListingBySlug(slug: string) {
	return client.fetch(
		groq`*[_type == "listing" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      status,
      isFeatured,
      price,
      "address": {
        "full": address.street + ", " + address.region + ", " + address.state + " " + address.zipCode,
        "street": address.street,
        "region": address.region,
        "state": address.state,
        "zipCode": address.zipCode
      },
      heroMedia {
        "heroImage": heroImage,
        "heroVideo": heroVideo,
        "heroVideoUrl": heroVideoUrl,
        "heroVideoFile": heroVideoFile,
        "thumbnail": thumbnail
      },
      propertyDetails {
        beds,
        baths,
        sqft,
        lotSizeAcres,
        yearBuilt,
        propertyType,
        stories,
        parkingSpaces,
        hasPool,
        hasSpa,
        hasView,
        viewDescription,
        hasFireplace,
        fireplaceCount
      },
      features,
      interiorFeatures {
        roomTypes,
        kitchenFeatures,
        bathroomFeatures,
        flooring,
        heating,
        cooling,
        appliances
      },
      exteriorFeatures {
        exteriorFeatures,
        patioAndPorch,
        poolFeatures,
        spaFeatures,
        fencing
      },
      constructionDetails {
        architecturalStyle,
        constructionMaterials,
        foundation,
        roofType,
        isNewConstruction
      },
      utilities {
        electric,
        gas,
        water,
        sewer,
        greenEnergyFeatures
      },
      description,
      "gallery": gallery[] {
        asset {
          _ref,
          _type
        },
        alt
      },
      propertyTabs[] {
        _key,
        tabTitle,
        tabContent
      },
      location,
      pointsOfInterest[] {
        name,
        category,
        description,
        location,
        highlights
      },
      financialDetails {
        pricePerSqFt,
        taxAssessedValue,
        annualTaxAmount,
        dateOnMarket
      },
      publishedAt,
      buyerOrSeller,
      floorPlan {
        floorPlanImage,
        floorPlanPdf
      },
      sitePlan {
        sitePlanImage,
        sitePlanPdf
      }
    }`,
		{ slug }
	);
}
