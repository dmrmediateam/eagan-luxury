/**
 * Utility functions for property-related operations
 */

/**
 * Generates a URL-friendly slug from a property address
 * @param street - Street address
 * @param city - City name
 * @param state - State abbreviation
 * @param zipCode - ZIP code
 * @returns URL-friendly slug
 */
export function generatePropertySlug(street: string, city: string, state: string, zipCode: string): string {
  // Convert to lowercase and replace spaces/special characters with hyphens
  const cleanStreet = street.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters except spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

  const cleanCity = city.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const cleanState = state.toLowerCase();

  return `${cleanStreet}-${cleanCity}-${cleanState}-${zipCode}`;
}

/**
 * Generates a property URL from address components
 * @param street - Street address
 * @param city - City name
 * @param state - State abbreviation
 * @param zipCode - ZIP code
 * @returns Full property URL
 */
export function generatePropertyUrl(street: string, city: string, state: string, zipCode: string): string {
  const slug = generatePropertySlug(street, city, state, zipCode);
  return `/listing/${slug}`;
}

/**
 * Parses a property slug back to address components
 * @param slug - Property slug
 * @returns Object with address components
 */
export function parsePropertySlug(slug: string): { street: string; city: string; state: string; zipCode: string } | null {
  try {
    // Split by hyphens and reconstruct
    const parts = slug.split('-');
    
    if (parts.length < 4) {
      return null;
    }

    // Find the ZIP code (last part)
    const zipCode = parts[parts.length - 1];
    
    // Find the state (second to last part)
    const state = parts[parts.length - 2];
    
    // Everything else is street and city
    const remainingParts = parts.slice(0, -2);
    
    // Try to separate street and city (this is approximate)
    // Usually the last remaining part is the city
    const city = remainingParts[remainingParts.length - 1];
    const street = remainingParts.slice(0, -1).join('-');
    
    return {
      street: street.replace(/-/g, ' '),
      city: city.replace(/-/g, ' '),
      state: state.toUpperCase(),
      zipCode
    };
  } catch {
    return null;
  }
}

/**
 * Formats a property address for display
 * @param street - Street address
 * @param city - City name
 * @param state - State abbreviation
 * @param zipCode - ZIP code
 * @returns Formatted address string
 */
export function formatPropertyAddress(street: string, city: string, state: string, zipCode: string): string {
  return `${street}, ${city}, ${state} ${zipCode}`;
}

/**
 * Validates if a property slug is valid
 * @param slug - Property slug to validate
 * @returns True if valid, false otherwise
 */
export function isValidPropertySlug(slug: string): boolean {
  // Basic validation: should contain hyphens and be reasonable length
  return slug.length > 10 && slug.includes('-') && /^[a-z0-9-]+$/.test(slug);
}

/**
 * Example usage:
 * 
 * const slug = generatePropertySlug("94 Hoagland Rd", "Blairstown", "NJ", "07825");
 * // Returns: "94-hoagland-rd-blairstown-nj-07825"
 * 
 * const url = generatePropertyUrl("94 Hoagland Rd", "Blairstown", "NJ", "07825");
 * // Returns: "/listing/94-hoagland-rd-blairstown-nj-07825"
 * 
 * const address = parsePropertySlug("94-hoagland-rd-blairstown-nj-07825");
 * // Returns: { street: "94 Hoagland Rd", city: "Blairstown", state: "NJ", zipCode: "07825" }
 */

export function parseSlugToAddress(slug: string): {
	street: string;
	city: string;
	state: string;
	zipCode: string;
} {
	try {
		// Remove the .html extension if present
		const cleanSlug = slug.replace(/\.html$/, '')
		
		// Split by dashes and reconstruct
		const parts = cleanSlug.split('-')
		
		// Find the state and zip code parts
		const stateZipIndex = parts.findIndex(part => 
			part === 'nj' || part === 'NJ' || 
			/^\d{5}$/.test(part) || /^\d{5}-\d{4}$/.test(part)
		)
		
		if (stateZipIndex === -1) {
			throw new Error('Invalid slug format')
		}
		
		// Extract components
		const streetParts = parts.slice(0, stateZipIndex - 1)
		const city = parts[stateZipIndex - 1]
		const state = parts[stateZipIndex]
		const zipCode = parts[stateZipIndex + 1] || ''
		
		return {
			street: streetParts.join(' '),
			city: city.replace(/([A-Z])/g, ' $1').trim(),
			state: state.toUpperCase(),
			zipCode: zipCode
		}
	} catch {
		// Return default values if parsing fails
		return {
			street: 'Unknown Street',
			city: 'Unknown City',
			state: 'NJ',
			zipCode: '00000'
		}
	}
}
