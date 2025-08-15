"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoanCalculatorProps {
  propertyPrice: number;
  propertyAddress: string;
}

export function LoanCalculator({ propertyPrice, propertyAddress }: LoanCalculatorProps) {
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Calculate loan details
  useEffect(() => {
    const loanAmount = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate > 0 && numberOfPayments > 0) {
      const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const total = payment * numberOfPayments;
      const interest = total - loanAmount;

      setMonthlyPayment(payment);
      setTotalPayment(total);
      setTotalInterest(interest);
    }
  }, [propertyPrice, downPayment, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-[#F9F9F9] p-6 rounded-lg">
      <h3 className="text-xl font-serif font-light mb-4">Loan Calculator</h3>
      
      <div className="space-y-4">
        {/* Property Price */}
        <div>
          <label className="block text-sm font-medium text-[#222223]/70 mb-2">
            Property Price
          </label>
          <div className="text-lg font-medium text-[#222223]">
            {formatCurrency(propertyPrice)}
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-[#222223]/70 mb-2">
            Down Payment ({downPayment}%)
          </label>
          <input
            type="range"
            min="3.5"
            max="50"
            step="0.5"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-[#222223]/60 mt-1">
            <span>3.5%</span>
            <span>50%</span>
          </div>
          <div className="text-sm text-[#222223] mt-1">
            {formatCurrency(propertyPrice * (downPayment / 100))}
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-[#222223]/70 mb-2">
            Interest Rate ({interestRate}%)
          </label>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-[#222223]/60 mt-1">
            <span>2%</span>
            <span>10%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-[#222223]/70 mb-2">
            Loan Term ({loanTerm} years)
          </label>
          <div className="flex gap-2">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 py-2 px-3 text-sm rounded border transition-colors ${
                  loanTerm === term
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'bg-white text-[#222223] border-gray-300 hover:border-yellow-500'
                }`}
              >
                {term} years
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg border border-gray-200"
        >
          <h4 className="font-medium text-[#222223] mb-3">Monthly Payment</h4>
          <div className="text-2xl font-serif text-[#222223] mb-4">
            {formatCurrency(monthlyPayment)}
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Principal & Interest:</span>
              <span className="text-[#222223]">{formatCurrency(monthlyPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Property Tax (est.):</span>
              <span className="text-[#222223]">{formatCurrency(propertyPrice * 0.015 / 12)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#222223]/70">Insurance (est.):</span>
              <span className="text-[#222223]">{formatCurrency(propertyPrice * 0.005 / 12)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-medium">
                <span className="text-[#222223]">Total Monthly:</span>
                <span className="text-[#222223]">
                  {formatCurrency(monthlyPayment + (propertyPrice * 0.015 / 12) + (propertyPrice * 0.005 / 12))}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="text-xs text-[#222223]/60 space-y-1">
          <div className="flex justify-between">
            <span>Loan Amount:</span>
            <span>{formatCurrency(propertyPrice * (1 - downPayment / 100))}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Interest:</span>
            <span>{formatCurrency(totalInterest)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Payment:</span>
            <span>{formatCurrency(totalPayment)}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-[#222223]/50 mt-4 p-3 bg-gray-100 rounded">
          <p>
            This calculator provides estimates only. Actual rates and payments may vary. 
            Contact a mortgage lender for personalized quotes.
          </p>
        </div>
      </div>
    </div>
  );
}
