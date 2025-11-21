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
    state: 'FL',
    zipCode: '',
    propertyType: 'single-family',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: 'FL',
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
      alert(error instanceof Error ? error.message : 'Failed to submit request. Please try again or contact us directly at 727.637.1019');
    }
  };

  if (isSubmitted) {
    return (
      <div className="tile-muted text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-light text-ink mb-4">Thank You</h3>
        <p className="text-base text-ink-soft mb-6 leading-relaxed">
          Your home valuation request has been received. Our team will review your property information and contact you within 24 hours with a comprehensive market analysis.
        </p>
        <p className="text-sm text-graphite">
          Need immediate assistance? Call <a href="tel:7276371019" className="text-accent hover:underline">727.637.1019</a>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Info Panel */}
      <div className="tile-muted">
        <p className="eyebrow mb-4">What You'll Receive</p>
        <div className="rule mb-8" />
        
        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-sm font-medium text-ink mb-2">Accurate Market Value</h4>
            <p className="text-xs text-ink-soft leading-relaxed">Comprehensive analysis based on recent comparable sales</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-ink mb-2">Market Trends Report</h4>
            <p className="text-xs text-ink-soft leading-relaxed">Current market conditions in your area</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-ink mb-2">Pricing Strategy</h4>
            <p className="text-xs text-ink-soft leading-relaxed">Expert recommendations for listing your property</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-ink mb-2">No Obligation</h4>
            <p className="text-xs text-ink-soft leading-relaxed">Free consultation with no pressure or commitment</p>
          </div>
        </div>

        <div className="pt-6 border-t border-line">
          <p className="text-xs uppercase tracking-[0.2em] text-graphite mb-4">Questions? Contact us:</p>
          <div className="space-y-3 text-sm">
            <a href="tel:7276371019" className="block text-ink hover:text-accent transition-colors">
              727.637.1019
            </a>
            <a href="mailto:info@eaganluxury.com" className="block text-ink hover:text-accent transition-colors break-all">
              info@eaganluxury.com
            </a>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="lg:col-span-2 tile">
        <p className="eyebrow mb-4">Property Information</p>
        <div className="rule mb-8" />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              />
            </div>
          </div>

          {/* Property Address */}
          <div>
            <label htmlFor="address" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
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
              className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="city" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                State *
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              >
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="NC">North Carolina</option>
                <option value="SC">South Carolina</option>
                <option value="TN">Tennessee</option>
                <option value="AL">Alabama</option>
                <option value="TX">Texas</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                ZIP Code *
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="pt-6 border-t border-line">
            <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-6">Property Details</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="propertyType" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                >
                  <option value="single-family">Single Family Home</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="waterfront">Waterfront Estate</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="villa">Villa</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="land">Land</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="yearBuilt" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                  Year Built
                </label>
                <input
                  type="number"
                  id="yearBuilt"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  placeholder="e.g., 2005"
                  className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label htmlFor="bedrooms" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                  Bedrooms
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                />
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
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
                  className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                />
              </div>
              <div>
                <label htmlFor="squareFeet" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                  Square Feet
                </label>
                <input
                  type="number"
                  id="squareFeet"
                  name="squareFeet"
                  value={formData.squareFeet}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
              Additional Information (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us more about your property, recent upgrades, timeline, or any questions you have..."
              className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending Request...' : 'Request Free Home Valuation'}
            </button>
            <p className="text-xs text-graphite text-center mt-4">
              By submitting this form, you agree to be contacted by Eagan Luxury regarding your property valuation.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
