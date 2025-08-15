# MLS Database Setup Guide

This guide will help you set up the RESO-aligned MLS database for Cheryl Towey's real estate website.

## Prerequisites

1. **PostgreSQL Database** (version 12 or higher)
2. **Node.js** (version 18 or higher)
3. **PostGIS Extension** (optional, for advanced geospatial features)

## Environment Configuration

1. Create a `.env` file in the root directory:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/cheryl_real_estate"
```

2. Replace the connection string with your actual PostgreSQL credentials.

## Database Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npm run db:generate
```

### 3. Create Database Tables
```bash
npm run db:migrate
```

### 4. Setup Database Extensions and Views
```bash
npm run db:setup
```

### 5. Seed Database with Sample Data
```bash
npm run db:seed
```

## Database Schema Overview

The database follows RESO (Real Estate Standards Organization) standards and includes:

### Core Tables
- **`mls`** - MLS registry information
- **`listing`** - Property listings with full RESO compliance
- **`media`** - Photos, videos, and 3D tours
- **`member`** - Agent information
- **`office`** - Office information
- **`open_house`** - Open house schedules
- **`room`** - Room details and dimensions
- **`unit`** - Multi-family unit information

### History Tables
- **`price_history`** - Price change tracking
- **`status_history`** - Status change tracking

### Lookup Tables
- **`lookup_value`** - Standardized codes and values

### Materialized Views
- **`listing_search`** - Optimized view for fast search results

## Sample Data

The seed script creates:

1. **Garden State Multiple Listing Service** as the default MLS
2. **Cheryl Towey** as the primary agent
3. **Weichert Realtors** office information
4. **6 sample listings** (one in each of Cheryl's top cities):
   - Hackettstown, NJ
   - Andover, NJ
   - Byram, NJ
   - Blairstown, NJ (Cheryl's featured listing)
   - Chester, NJ
   - Washington, NJ

## Database Management Commands

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes to database
npm run db:push

# Create and apply migrations
npm run db:migrate

# Deploy migrations to production
npm run db:migrate:deploy

# Seed database with sample data
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio

# Refresh search materialized view
npm run db:refresh-search

# Setup database extensions and views
npm run db:setup
```

## API Integration

The database includes helper functions in `lib/db.ts`:

- `getListingsWithMedia()` - Get listings with primary photos
- `getListingByKey()` - Get detailed listing information
- `getListingsByCity()` - Get listings by city
- `searchListings()` - Search listings by text
- `getAgentByKey()` - Get agent information
- `getOfficeByKey()` - Get office information

## RESO Compliance

The database schema is designed to be RESO-compliant and includes:

- Standard property fields (beds, baths, square footage, etc.)
- RESO StandardStatus values
- Property types and subtypes
- Agent and office information
- Media management
- Price and status history tracking

## Geospatial Features

If PostGIS is available, the database will:
- Enable PostGIS extension
- Use geography points for location data
- Create spatial indexes for location-based queries

Without PostGIS, the database uses standard latitude/longitude coordinates.

## Production Deployment

For production deployment:

1. Set up a production PostgreSQL database
2. Configure environment variables
3. Run migrations: `npm run db:migrate:deploy`
4. Seed the database: `npm run db:seed`
5. Set up the materialized view: `npm run db:setup`

## Troubleshooting

### Common Issues

1. **Connection Error**: Verify your DATABASE_URL in `.env`
2. **Permission Error**: Ensure your database user has CREATE EXTENSION privileges
3. **PostGIS Not Available**: The system will fall back to standard coordinates

### Reset Database

To completely reset the database:

```bash
# Drop and recreate database
npx prisma db push --force-reset

# Re-run setup
npm run db:setup
npm run db:seed
```

## Support

For database-related issues, check:
1. Prisma documentation: https://www.prisma.io/docs
2. PostgreSQL documentation: https://www.postgresql.org/docs
3. RESO standards: https://www.reso.org/
