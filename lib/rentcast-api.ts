// Use native fetch in Node.js 18+

const RENTCAST_API_KEY = 'ff192079f07f4b4b904bf26fd982428f';
const RENTCAST_BASE_URL = 'https://api.rentcast.io/v1';

export interface RentCastProperty {
  id: string;
  formattedAddress: string;
  addressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  county: string;
  latitude: number;
  longitude: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  lotSize: number;
  yearBuilt: number;
  lastSaleDate: string;
  lastSalePrice: number;
  propertyTaxes: number;
  ownerName: string;
  ownerType: string;
  estimatedValue: number;
  estimatedRent: number;
  pricePerSquareFoot: number;
  features: string[];
  heating: string;
  cooling: string;
  parking: string;
  stories: number;
  zoning: string;
  subdivision: string;
  school: {
    elementary: string;
    middle: string;
    high: string;
    district: string;
  };
}

export interface RentCastListing {
  id: string;
  propertyId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  price: number;
  pricePerSquareFoot: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  lotSize: number;
  yearBuilt: number;
  propertyType: string;
  listingType: 'Sale' | 'Rent';
  status: string;
  daysOnMarket: number;
  description: string;
  photos: string[];
  amenities: string[];
  listingDate: string;
  updatedDate: string;
  agentName?: string;
  brokerageName?: string;
  mlsNumber?: string;
}

export interface RentCastMarketData {
  city: string;
  state: string;
  zipCode: string;
  averagePrice: number;
  averageRent: number;
  pricePerSquareFoot: number;
  rentPerSquareFoot: number;
  inventory: number;
  daysOnMarket: number;
  priceChange: number;
  rentChange: number;
}

class RentCastAPIService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string = RENTCAST_API_KEY, baseUrl: string = RENTCAST_BASE_URL) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  private async makeRequest(endpoint: string, params: Record<string, any> = {}): Promise<any> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value.toString());
      }
    });

    console.log(`Making RentCast API request to: ${url.toString()}`);
    console.log(`Using API key: ${this.apiKey.substring(0, 8)}...`);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-Api-Key': this.apiKey,
        'User-Agent': 'Cheryl-Towey-Real-Estate/1.0'
      },
    });

    console.log(`Response status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error Response: ${errorText}`);
      throw new Error(`RentCast API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  }

  /**
   * Get property records by address, city, or coordinates
   */
  async getPropertyRecords(params: {
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    latitude?: number;
    longitude?: number;
    radius?: number;
    limit?: number;
    offset?: number;
  }): Promise<RentCastProperty[]> {
    const data = await this.makeRequest('/properties', params);
    return data;
  }

  /**
   * Get property record by ID
   */
  async getPropertyById(propertyId: string): Promise<RentCastProperty> {
    const data = await this.makeRequest(`/properties/${propertyId}`);
    return data;
  }

  /**
   * Get property value estimate
   */
  async getPropertyValue(address: string, city: string, state: string): Promise<any> {
    const data = await this.makeRequest('/avm/value', {
      address,
      city,
      state,
    });
    return data;
  }

  /**
   * Get property rent estimate
   */
  async getPropertyRent(address: string, city: string, state: string): Promise<any> {
    const data = await this.makeRequest('/avm/rent', {
      address,
      city,
      state,
    });
    return data;
  }

  /**
   * Get sale listings
   */
  async getSaleListings(params: {
    city?: string;
    state?: string;
    zipCode?: string;
    latitude?: number;
    longitude?: number;
    radius?: number;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    propertyType?: string;
    limit?: number;
    offset?: number;
  }): Promise<RentCastListing[]> {
    const data = await this.makeRequest('/listings/sale', params);
    return data;
  }

  /**
   * Get rental listings
   */
  async getRentalListings(params: {
    city?: string;
    state?: string;
    zipCode?: string;
    latitude?: number;
    longitude?: number;
    radius?: number;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    propertyType?: string;
    limit?: number;
    offset?: number;
  }): Promise<RentCastListing[]> {
    const data = await this.makeRequest('/listings/rental', params);
    return data;
  }

  /**
   * Get listing by ID
   */
  async getListingById(listingId: string, listingType: 'sale' | 'rental'): Promise<RentCastListing> {
    const data = await this.makeRequest(`/listings/${listingType}/${listingId}`);
    return data;
  }

  /**
   * Get market statistics
   */
  async getMarketStats(params: {
    city?: string;
    state?: string;
    zipCode?: string;
  }): Promise<RentCastMarketData> {
    const data = await this.makeRequest('/markets', params);
    return data;
  }

  /**
   * Get properties by city with comprehensive data
   */
  async getPropertiesByCity(city: string, state: string, limit: number = 50): Promise<RentCastProperty[]> {
    return this.getPropertyRecords({
      city,
      state,
      limit,
    });
  }

  /**
   * Get active sale listings by city
   */
  async getActiveSaleListingsByCity(city: string, state: string, limit: number = 50): Promise<RentCastListing[]> {
    return this.getSaleListings({
      city,
      state,
      limit,
    });
  }
}

export const rentcastAPI = new RentCastAPIService();
export default RentCastAPIService;
