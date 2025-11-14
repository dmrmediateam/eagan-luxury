'use client';

import { useState } from 'react';

export default function HomeValuation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NJ',
    zipCode: '',
    propertyType: 'single-family',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/home-valuation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit valuation request');
      }

      // Success!
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: 'NJ',
          zipCode: '',
          propertyType: 'single-family',
          bedrooms: '',
          bathrooms: '',
          squareFeet: '',
          yearBuilt: '',
          message: '',
        });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // Show error to user
      alert(error instanceof Error ? error.message : 'Failed to submit request. Please try again or contact us directly at 908.334.0971');
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gold/10 to-transparent p-12 rounded-sm border-2 border-gold text-center">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-light text-black mb-4">Thank You!</h3>
          <p className="text-base text-gray-dark mb-6 leading-relaxed">
            Your home valuation request has been received. Cheryl will personally review your property information and contact you within 24 hours with a comprehensive market analysis.
          </p>
          <p className="text-sm text-gray-dark">
            Need immediate assistance? Call <a href="tel:9083340971" className="text-gold hover:text-gold-dark font-semibold">908.334.0971</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-sm shadow-2xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Info Panel */}
          <div className="lg:col-span-1 bg-gradient-to-br from-gold to-gold-dark p-8 text-white">
            <h3 className="text-2xl font-serif font-light mb-6">What You'll Receive</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Accurate Market Value</h4>
                  <p className="text-xs opacity-90">Comprehensive analysis based on recent comparable sales</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Market Trends Report</h4>
                  <p className="text-xs opacity-90">Current market conditions in your neighborhood</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Pricing Strategy</h4>
                  <p className="text-xs opacity-90">Expert recommendations for listing your home</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">No Obligation</h4>
                  <p className="text-xs opacity-90">Free consultation with no pressure or commitment</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-xs opacity-90 mb-4">Questions? Contact Cheryl directly:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:9083340971" className="hover:underline">908.334.0971</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:cheryl.towey@weichert.com" className="hover:underline text-xs">cheryl.towey@weichert.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-2 p-8 md:p-10">
            <h3 className="text-xl font-serif font-light text-black mb-6">Property Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-gray-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-gray-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-dark mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                  />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label htmlFor="address" className="block text-xs font-semibold text-gray-dark mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street Address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs font-semibold text-gray-dark mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-xs font-semibold text-gray-dark mb-2">
                    State *
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm bg-white"
                  >
                    <option value="NJ">New Jersey</option>
                    <option value="NY">New York</option>
                    <option value="PA">Pennsylvania</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-xs font-semibold text-gray-dark mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                  />
                </div>
              </div>

              {/* Property Details */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-black mb-4">Property Details</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-semibold text-gray-dark mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm bg-white"
                    >
                      <option value="single-family">Single Family Home</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="multi-family">Multi-Family</option>
                      <option value="land">Land</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="yearBuilt" className="block text-xs font-semibold text-gray-dark mb-2">
                      Year Built
                    </label>
                    <input
                      type="number"
                      id="yearBuilt"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleChange}
                      placeholder="e.g., 2005"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label htmlFor="bedrooms" className="block text-xs font-semibold text-gray-dark mb-2">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="bathrooms" className="block text-xs font-semibold text-gray-dark mb-2">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      min="0"
                      step="0.5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="squareFeet" className="block text-xs font-semibold text-gray-dark mb-2">
                      Square Feet
                    </label>
                    <input
                      type="number"
                      id="squareFeet"
                      name="squareFeet"
                      value={formData.squareFeet}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-dark mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your property, recent upgrades, timeline, or any questions you have..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 px-8 rounded-sm transition-all duration-200 hover:shadow-lg text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Request...' : 'Request Free Home Valuation'}
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to be contacted by Cheryl Towey regarding your property valuation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

