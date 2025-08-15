// MLS and IDX Compliant Property Types
export interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  county: string;
  region?: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

export interface PropertyDetails {
  // Basic Information
  mlsNumber: string;
  webId?: string;
  propertyType: string;
  status: 'Active' | 'Pending' | 'Sold' | 'Withdrawn' | 'Expired';
  listDate: string;
  closeDate?: string;
  
  // Pricing
  listPrice: number;
  originalPrice?: number;
  soldPrice?: number;
  pricePerSqFt?: number;
  
  // Property Specifications
  bedrooms: number;
  fullBaths: number;
  halfBaths: number;
  totalBaths: number;
  squareFootage: number;
  lotSize: number;
  lotSizeAcres: number;
  yearBuilt: number;
  
  // Property Features
  style: string;
  construction: string;
  roof: string;
  exterior: string;
  foundation: string;
  
  // Interior Features
  flooring: string[];
  heating: string;
  cooling: string;
  appliances: string[];
  fireplace: boolean;
  fireplaceFeatures?: string;
  basement: string;
  
  // Exterior Features
  garageSpaces: number;
  garageType: string;
  parkingSpaces: number;
  pool: boolean;
  poolFeatures?: string;
  deck: boolean;
  porch: boolean;
  
  // Utilities
  sewer: string;
  water: string;
  utilities: string[];
  fuelType: string;
  
  // Financial
  taxes: number;
  taxYear: number;
  taxAssessedValue: number;
  hoaFee?: number;
  hoaFrequency?: string;
  
  // School Information
  elementarySchool?: string;
  middleSchool?: string;
  highSchool?: string;
  
  // Additional Information
  directions: string;
  zoning?: string;
  floodZone?: boolean;
  propertyCondition?: string;
  propertySubType?: string;
  
  // IDX Compliance
  showingInstructions?: string;
  virtualTourUrl?: string;
  photoCount: number;
  lastUpdated: string;
  dataSource: string;
  disclaimer: string;
}

export interface PropertyAgent {
  name: string;
  email: string;
  phone: string;
  office: string;
  officePhone: string;
  officeAddress: string;
  photo?: string;
  licenseNumber?: string;
}

export interface PropertyOffice {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  order: number;
  isPrimary: boolean;
}

export interface PropertyPricingHistory {
  date: string;
  price: number;
  priceChange?: number;
  description: string;
}

export interface PropertySchool {
  name: string;
  type: 'Elementary' | 'Middle' | 'High';
  rating?: number;
  distance?: number;
}

export interface PropertyNearby {
  type: 'Restaurant' | 'Shopping' | 'Transportation' | 'Entertainment';
  name: string;
  distance: number;
  address: string;
}

export interface Property {
  id: string;
  slug: string;
  
  // Basic Information
  title: string;
  description: string;
  address: PropertyAddress;
  details: PropertyDetails;
  
  // Media
  images: PropertyImage[];
  virtualTourUrl?: string;
  videoUrl?: string;
  
  // Agent Information
  agent: PropertyAgent;
  office: PropertyOffice;
  
  // Additional Data
  pricingHistory: PropertyPricingHistory[];
  schools: PropertySchool[];
  nearbyAmenities: PropertyNearby[];
  
  // SEO and Marketing
  keywords: string[];
  features: string[];
  highlights: string[];
  
  // IDX Compliance
  showingInstructions?: string;
  lastUpdated: string;
  dataSource: string;
  disclaimer: string;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
}

// IDX Compliance Types
export interface IDXDisclaimer {
  text: string;
  required: boolean;
  type: 'general' | 'financial' | 'legal';
}

export interface IDXCompliance {
  disclaimers: IDXDisclaimer[];
  dataSource: string;
  lastUpdated: string;
  showingInstructions?: string;
  virtualTourUrl?: string;
  photoCount: number;
  mlsNumber: string;
  webId?: string;
}

// Database Schema Types
export interface PropertyDatabase {
  properties: Property[];
  agents: PropertyAgent[];
  offices: PropertyOffice[];
  images: PropertyImage[];
  compliance: IDXCompliance;
}
