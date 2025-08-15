"use client";

import React from 'react';

interface PropertyTaxesProps {
  listing: any;
}

export function PropertyTaxes({ listing }: PropertyTaxesProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate estimated taxes based on property value
  const estimatedTaxes = listing.listPrice ? Math.round(Number(listing.listPrice) * 0.015) : 0;
  const taxAssessedValue = listing.listPrice ? Math.round(Number(listing.listPrice) * 0.85) : 0;

  return (
    <div>
      <h3 className="text-2xl font-serif font-light mb-6">Property Taxes</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Estimated Annual Taxes:</span>
              <span className="text-[#222223] font-medium">{formatCurrency(estimatedTaxes)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Monthly Tax Payment:</span>
              <span className="text-[#222223] font-medium">{formatCurrency(estimatedTaxes / 12)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Tax Assessed Value:</span>
              <span className="text-[#222223] font-medium">{formatCurrency(taxAssessedValue)}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Tax Rate:</span>
              <span className="text-[#222223] font-medium">1.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Tax Year:</span>
              <span className="text-[#222223] font-medium">2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#222223]/70">County:</span>
              <span className="text-[#222223] font-medium">{listing.county}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-[#222223]/70 text-sm">
            <strong>Note:</strong> Property taxes are estimates based on current market value. 
            Actual taxes may vary. Contact the county assessor's office for current tax information.
          </p>
        </div>
      </div>
    </div>
  );
}
