// Comprehensive list of cities that Cheryl Towey services
// Based on the codebase analysis from components and city pages

export interface ServiceArea {
  name: string;
  state: string;
  county: string;
  slug: string;
  isPrimary: boolean; // Primary service areas get more frequent updates
}

// Primary service areas - Cheryl's main focus cities
export const PRIMARY_SERVICE_AREAS: ServiceArea[] = [
  // Warren County - Primary Areas
  { name: 'Hackettstown', state: 'NJ', county: 'Warren', slug: 'hackettstown', isPrimary: true },
  { name: 'Washington', state: 'NJ', county: 'Warren', slug: 'washington', isPrimary: true },
  { name: 'Blairstown', state: 'NJ', county: 'Warren', slug: 'blairstown', isPrimary: true },
  
  // Sussex County - Primary Areas
  { name: 'Andover', state: 'NJ', county: 'Sussex', slug: 'andover', isPrimary: true },
  { name: 'Byram', state: 'NJ', county: 'Sussex', slug: 'byram', isPrimary: true },
  
  // Morris County - Primary Areas
  { name: 'Chester', state: 'NJ', county: 'Morris', slug: 'chester', isPrimary: true },
];

// Extended service areas - Cities where Cheryl also provides services
export const EXTENDED_SERVICE_AREAS: ServiceArea[] = [
  // Warren County - Extended
  { name: 'Belvidere', state: 'NJ', county: 'Warren', slug: 'belvidere', isPrimary: false },
  { name: 'Phillipsburg', state: 'NJ', county: 'Warren', slug: 'phillipsburg', isPrimary: false },
  { name: 'Oxford', state: 'NJ', county: 'Warren', slug: 'oxford', isPrimary: false },
  { name: 'Pohatcong', state: 'NJ', county: 'Warren', slug: 'pohatcong', isPrimary: false },
  { name: 'Franklin', state: 'NJ', county: 'Warren', slug: 'franklin', isPrimary: false },
  { name: 'Hope', state: 'NJ', county: 'Warren', slug: 'hope', isPrimary: false },
  { name: 'Alpha', state: 'NJ', county: 'Warren', slug: 'alpha', isPrimary: false },
  { name: 'Allamuchy', state: 'NJ', county: 'Warren', slug: 'allamuchy', isPrimary: false },
  { name: 'Frelinghuysen', state: 'NJ', county: 'Warren', slug: 'frelinghuysen', isPrimary: false },
  { name: 'Greenwich', state: 'NJ', county: 'Warren', slug: 'greenwich', isPrimary: false },
  { name: 'Hardwick', state: 'NJ', county: 'Warren', slug: 'hardwick', isPrimary: false },
  { name: 'Harmony', state: 'NJ', county: 'Warren', slug: 'harmony', isPrimary: false },
  { name: 'Independence', state: 'NJ', county: 'Warren', slug: 'independence', isPrimary: false },
  { name: 'Knowlton', state: 'NJ', county: 'Warren', slug: 'knowlton', isPrimary: false },
  { name: 'Liberty', state: 'NJ', county: 'Warren', slug: 'liberty', isPrimary: false },
  { name: 'Lopatcong', state: 'NJ', county: 'Warren', slug: 'lopatcong', isPrimary: false },
  { name: 'Mansfield', state: 'NJ', county: 'Warren', slug: 'mansfield', isPrimary: false },
  { name: 'White', state: 'NJ', county: 'Warren', slug: 'white', isPrimary: false },

  // Sussex County - Extended
  { name: 'Hopatcong', state: 'NJ', county: 'Sussex', slug: 'hopatcong', isPrimary: false },
  { name: 'Sparta', state: 'NJ', county: 'Sussex', slug: 'sparta', isPrimary: false },
  { name: 'Vernon', state: 'NJ', county: 'Sussex', slug: 'vernon', isPrimary: false },
  { name: 'Newton', state: 'NJ', county: 'Sussex', slug: 'newton', isPrimary: false },
  { name: 'Branchville', state: 'NJ', county: 'Sussex', slug: 'branchville', isPrimary: false },
  { name: 'Frankford', state: 'NJ', county: 'Sussex', slug: 'frankford', isPrimary: false },
  { name: 'Fredon', state: 'NJ', county: 'Sussex', slug: 'fredon', isPrimary: false },
  { name: 'Green', state: 'NJ', county: 'Sussex', slug: 'green', isPrimary: false },
  { name: 'Hamburg', state: 'NJ', county: 'Sussex', slug: 'hamburg', isPrimary: false },
  { name: 'Hampton', state: 'NJ', county: 'Sussex', slug: 'hampton', isPrimary: false },
  { name: 'Hardyston', state: 'NJ', county: 'Sussex', slug: 'hardyston', isPrimary: false },
  { name: 'Lafayette', state: 'NJ', county: 'Sussex', slug: 'lafayette', isPrimary: false },
  { name: 'Montague', state: 'NJ', county: 'Sussex', slug: 'montague', isPrimary: false },
  { name: 'Ogdensburg', state: 'NJ', county: 'Sussex', slug: 'ogdensburg', isPrimary: false },
  { name: 'Sandyston', state: 'NJ', county: 'Sussex', slug: 'sandyston', isPrimary: false },
  { name: 'Stanhope', state: 'NJ', county: 'Sussex', slug: 'stanhope', isPrimary: false },
  { name: 'Stillwater', state: 'NJ', county: 'Sussex', slug: 'stillwater', isPrimary: false },
  { name: 'Sussex', state: 'NJ', county: 'Sussex', slug: 'sussex', isPrimary: false },
  { name: 'Walpack', state: 'NJ', county: 'Sussex', slug: 'walpack', isPrimary: false },
  { name: 'Wantage', state: 'NJ', county: 'Sussex', slug: 'wantage', isPrimary: false },

  // Morris County - Extended
  { name: 'Morristown', state: 'NJ', county: 'Morris', slug: 'morristown', isPrimary: false },
  { name: 'Madison', state: 'NJ', county: 'Morris', slug: 'madison', isPrimary: false },
  { name: 'Chatham', state: 'NJ', county: 'Morris', slug: 'chatham', isPrimary: false },
  { name: 'Boonton', state: 'NJ', county: 'Morris', slug: 'boonton', isPrimary: false },
  { name: 'Butler', state: 'NJ', county: 'Morris', slug: 'butler', isPrimary: false },
  { name: 'Denville', state: 'NJ', county: 'Morris', slug: 'denville', isPrimary: false },
  { name: 'Dover', state: 'NJ', county: 'Morris', slug: 'dover', isPrimary: false },
  { name: 'East Hanover', state: 'NJ', county: 'Morris', slug: 'east-hanover', isPrimary: false },
  { name: 'Florham Park', state: 'NJ', county: 'Morris', slug: 'florham-park', isPrimary: false },
  { name: 'Hanover', state: 'NJ', county: 'Morris', slug: 'hanover', isPrimary: false },
  { name: 'Harding', state: 'NJ', county: 'Morris', slug: 'harding', isPrimary: false },
  { name: 'Jefferson', state: 'NJ', county: 'Morris', slug: 'jefferson', isPrimary: false },
  { name: 'Kinnelon', state: 'NJ', county: 'Morris', slug: 'kinnelon', isPrimary: false },
  { name: 'Lincoln Park', state: 'NJ', county: 'Morris', slug: 'lincoln-park', isPrimary: false },
  { name: 'Long Hill', state: 'NJ', county: 'Morris', slug: 'long-hill', isPrimary: false },
  { name: 'Mendham', state: 'NJ', county: 'Morris', slug: 'mendham', isPrimary: false },
  { name: 'Mine Hill', state: 'NJ', county: 'Morris', slug: 'mine-hill', isPrimary: false },
  { name: 'Montville', state: 'NJ', county: 'Morris', slug: 'montville', isPrimary: false },
  { name: 'Morris', state: 'NJ', county: 'Morris', slug: 'morris', isPrimary: false },
  { name: 'Mount Arlington', state: 'NJ', county: 'Morris', slug: 'mount-arlington', isPrimary: false },
  { name: 'Mount Olive', state: 'NJ', county: 'Morris', slug: 'mount-olive', isPrimary: false },
  { name: 'Netcong', state: 'NJ', county: 'Morris', slug: 'netcong', isPrimary: false },
  { name: 'Parsippany-Troy Hills', state: 'NJ', county: 'Morris', slug: 'parsippany-troy-hills', isPrimary: false },
  { name: 'Pequannock', state: 'NJ', county: 'Morris', slug: 'pequannock', isPrimary: false },
  { name: 'Randolph', state: 'NJ', county: 'Morris', slug: 'randolph', isPrimary: false },
  { name: 'Riverdale', state: 'NJ', county: 'Morris', slug: 'riverdale', isPrimary: false },
  { name: 'Rockaway', state: 'NJ', county: 'Morris', slug: 'rockaway', isPrimary: false },
  { name: 'Roxbury', state: 'NJ', county: 'Morris', slug: 'roxbury', isPrimary: false },
  { name: 'Wharton', state: 'NJ', county: 'Morris', slug: 'wharton', isPrimary: false },

  // Hunterdon County - Extended
  { name: 'Flemington', state: 'NJ', county: 'Hunterdon', slug: 'flemington', isPrimary: false },
  { name: 'Clinton', state: 'NJ', county: 'Hunterdon', slug: 'clinton', isPrimary: false },
  { name: 'Lambertville', state: 'NJ', county: 'Hunterdon', slug: 'lambertville', isPrimary: false },
  { name: 'Alexandria', state: 'NJ', county: 'Hunterdon', slug: 'alexandria', isPrimary: false },
  { name: 'Bethlehem', state: 'NJ', county: 'Hunterdon', slug: 'bethlehem', isPrimary: false },
  { name: 'Bloomsbury', state: 'NJ', county: 'Hunterdon', slug: 'bloomsbury', isPrimary: false },
  { name: 'Califon', state: 'NJ', county: 'Hunterdon', slug: 'califon', isPrimary: false },
  { name: 'Clinton Township', state: 'NJ', county: 'Hunterdon', slug: 'clinton-township', isPrimary: false },
  { name: 'Delaware', state: 'NJ', county: 'Hunterdon', slug: 'delaware', isPrimary: false },
  { name: 'East Amwell', state: 'NJ', county: 'Hunterdon', slug: 'east-amwell', isPrimary: false },
  { name: 'Frenchtown', state: 'NJ', county: 'Hunterdon', slug: 'frenchtown', isPrimary: false },
  { name: 'Glen Gardner', state: 'NJ', county: 'Hunterdon', slug: 'glen-gardner', isPrimary: false },
  { name: 'High Bridge', state: 'NJ', county: 'Hunterdon', slug: 'high-bridge', isPrimary: false },
  { name: 'Holland', state: 'NJ', county: 'Hunterdon', slug: 'holland', isPrimary: false },
  { name: 'Kingwood', state: 'NJ', county: 'Hunterdon', slug: 'kingwood', isPrimary: false },
  { name: 'Lebanon', state: 'NJ', county: 'Hunterdon', slug: 'lebanon', isPrimary: false },
  { name: 'Lebanon Township', state: 'NJ', county: 'Hunterdon', slug: 'lebanon-township', isPrimary: false },
  { name: 'Milford', state: 'NJ', county: 'Hunterdon', slug: 'milford', isPrimary: false },
  { name: 'Raritan', state: 'NJ', county: 'Hunterdon', slug: 'raritan', isPrimary: false },
  { name: 'Readington', state: 'NJ', county: 'Hunterdon', slug: 'readington', isPrimary: false },
  { name: 'Stockton', state: 'NJ', county: 'Hunterdon', slug: 'stockton', isPrimary: false },
  { name: 'Tewksbury', state: 'NJ', county: 'Hunterdon', slug: 'tewksbury', isPrimary: false },
  { name: 'Union', state: 'NJ', county: 'Hunterdon', slug: 'union', isPrimary: false },
  { name: 'West Amwell', state: 'NJ', county: 'Hunterdon', slug: 'west-amwell', isPrimary: false },
];

// Complete list of all service areas
export const ALL_SERVICE_AREAS: ServiceArea[] = [
  ...PRIMARY_SERVICE_AREAS,
  ...EXTENDED_SERVICE_AREAS
];

// Helper functions
export function getPrimaryServiceAreas(): ServiceArea[] {
  return PRIMARY_SERVICE_AREAS;
}

export function getAllServiceAreas(): ServiceArea[] {
  return ALL_SERVICE_AREAS;
}

export function getServiceAreasByCounty(county: string): ServiceArea[] {
  return ALL_SERVICE_AREAS.filter(area => area.county === county);
}

export function isServiceArea(cityName: string, state: string = 'NJ'): boolean {
  return ALL_SERVICE_AREAS.some(area => 
    area.name.toLowerCase() === cityName.toLowerCase() && 
    area.state === state
  );
}

export function getServiceAreaInfo(cityName: string, state: string = 'NJ'): ServiceArea | undefined {
  return ALL_SERVICE_AREAS.find(area => 
    area.name.toLowerCase() === cityName.toLowerCase() && 
    area.state === state
  );
}

// Export for RentCast sync script
export function getServiceAreasForSync(primaryOnly: boolean = false): Array<{city: string, state: string}> {
  const areas = primaryOnly ? PRIMARY_SERVICE_AREAS : ALL_SERVICE_AREAS;
  return areas.map(area => ({
    city: area.name,
    state: area.state
  }));
}

