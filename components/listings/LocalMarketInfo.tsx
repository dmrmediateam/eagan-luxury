"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LocalMarketInfoProps {
  city: string;
  county: string;
}

// Market data for different cities in New Jersey
const marketData = {
  'Hackettstown': {
    description: 'A charming town in Warren County known for its historic downtown, excellent schools, and convenient access to major highways.',
    medianPrice: 425000,
    priceTrend: '+5.2%',
    daysOnMarket: 45,
    inventory: 'Low',
    schools: ['Hackettstown High School', 'Hackettstown Middle School', 'Willow Grove School'],
    amenities: ['Historic Downtown', 'Hackettstown Regional Medical Center', 'Centenary University', 'Route 80 Access'],
    commute: {
      'New York City': '75 minutes',
      'Philadelphia': '90 minutes',
      'Newark': '60 minutes'
    }
  },
  'Washington': {
    description: 'A peaceful community in Warren County offering a rural lifestyle with easy access to shopping and amenities.',
    medianPrice: 385000,
    priceTrend: '+3.8%',
    daysOnMarket: 52,
    inventory: 'Moderate',
    schools: ['Warren Hills Regional High School', 'Warren Hills Regional Middle School', 'Washington Elementary'],
    amenities: ['Washington Borough Park', 'Warren County Community College', 'Route 31 Access', 'Local Shopping'],
    commute: {
      'New York City': '80 minutes',
      'Philadelphia': '85 minutes',
      'Newark': '65 minutes'
    }
  },
  'Andover': {
    description: 'A scenic Sussex County town known for its natural beauty, excellent schools, and family-friendly atmosphere.',
    medianPrice: 425000,
    priceTrend: '+4.1%',
    daysOnMarket: 48,
    inventory: 'Low',
    schools: ['Newton High School', 'Andover Regional Middle School', 'Andover Elementary'],
    amenities: ['Kittatinny Valley State Park', 'Andover Borough Park', 'Route 206 Access', 'Local Farms'],
    commute: {
      'New York City': '85 minutes',
      'Philadelphia': '95 minutes',
      'Newark': '70 minutes'
    }
  },
  'Byram': {
    description: 'A picturesque township in Sussex County offering lakefront properties, excellent schools, and outdoor recreation.',
    medianPrice: 525000,
    priceTrend: '+6.2%',
    daysOnMarket: 38,
    inventory: 'Very Low',
    schools: ['Lenape Valley Regional High School', 'Byram Intermediate School', 'Byram Lakes Elementary'],
    amenities: ['Lake Hopatcong', 'Allamuchy Mountain State Park', 'Byram Township Park', 'Route 80 Access'],
    commute: {
      'New York City': '70 minutes',
      'Philadelphia': '100 minutes',
      'Newark': '55 minutes'
    }
  },
  'Blairstown': {
    description: 'A historic Warren County town known for its colonial architecture, excellent schools, and rural charm.',
    medianPrice: 550000,
    priceTrend: '+7.1%',
    daysOnMarket: 42,
    inventory: 'Low',
    schools: ['Blair Academy', 'North Warren Regional High School', 'Blairstown Elementary'],
    amenities: ['Historic Downtown', 'Delaware Water Gap', 'Blairstown Airport', 'Route 94 Access'],
    commute: {
      'New York City': '90 minutes',
      'Philadelphia': '110 minutes',
      'Newark': '75 minutes'
    }
  },
  'Chester': {
    description: 'A vibrant Morris County borough known for its excellent schools, shopping, and convenient location.',
    medianPrice: 675000,
    priceTrend: '+8.3%',
    daysOnMarket: 35,
    inventory: 'Very Low',
    schools: ['West Morris Central High School', 'Black River Middle School', 'Chester Elementary'],
    amenities: ['Chester Borough Park', 'Chester Public Library', 'Historic Downtown', 'Route 24 Access'],
    commute: {
      'New York City': '60 minutes',
      'Philadelphia': '105 minutes',
      'Newark': '45 minutes'
    }
  }
};

export function LocalMarketInfo({ city, county }: LocalMarketInfoProps) {
  const data = marketData[city as keyof typeof marketData] || {
    description: `A beautiful community in ${county} County offering excellent quality of life and convenient access to major amenities.`,
    medianPrice: 450000,
    priceTrend: '+4.5%',
    daysOnMarket: 50,
    inventory: 'Moderate',
    schools: ['Local Schools'],
    amenities: ['Local Amenities'],
    commute: {
      'New York City': '75 minutes',
      'Philadelphia': '90 minutes',
      'Newark': '60 minutes'
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-serif font-light mb-6">Local Market Information</h3>
      
      {/* Market Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200"
      >
        <h4 className="text-lg font-medium text-[#222223] mb-3">{city} Market Overview</h4>
        <p className="text-[#222223]/80 leading-relaxed mb-4">{data.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-lg font-medium text-[#222223]">{formatCurrency(data.medianPrice)}</div>
            <div className="text-sm text-[#222223]/70">Median Price</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium text-green-600">{data.priceTrend}</div>
            <div className="text-sm text-[#222223]/70">Price Trend</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium text-[#222223]">{data.daysOnMarket}</div>
            <div className="text-sm text-[#222223]/70">Avg. Days on Market</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium text-[#222223]">{data.inventory}</div>
            <div className="text-sm text-[#222223]/70">Inventory Level</div>
          </div>
        </div>
      </motion.div>

      {/* Schools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg border border-gray-200"
      >
        <h4 className="text-lg font-medium text-[#222223] mb-4">Local Schools</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.schools.map((school, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-[#222223]/80">{school}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Amenities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg border border-gray-200"
      >
        <h4 className="text-lg font-medium text-[#222223] mb-4">Local Amenities</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-[#222223]/80">{amenity}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Commute Times */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg border border-gray-200"
      >
        <h4 className="text-lg font-medium text-[#222223] mb-4">Commute Times</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(data.commute).map(([destination, time]) => (
            <div key={destination} className="text-center p-3 bg-gray-50 rounded">
              <div className="font-medium text-[#222223]">{destination}</div>
              <div className="text-sm text-[#222223]/70">{time}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Market Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 p-6 rounded-lg border border-blue-200"
      >
        <h4 className="text-lg font-medium text-[#222223] mb-4">Market Insights</h4>
        <div className="space-y-3 text-sm text-[#222223]/80">
          <p>
            <strong>Current Market:</strong> {city} is experiencing a {data.priceTrend.includes('+') ? 'strong' : 'moderate'} market with {data.inventory.toLowerCase()} inventory levels.
          </p>
          <p>
            <strong>Buyer Activity:</strong> Properties in this area typically sell within {data.daysOnMarket} days, indicating {data.daysOnMarket < 45 ? 'high' : 'moderate'} buyer demand.
          </p>
          <p>
            <strong>Investment Potential:</strong> With {county} County's growing economy and excellent school districts, properties in {city} offer strong long-term investment potential.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
