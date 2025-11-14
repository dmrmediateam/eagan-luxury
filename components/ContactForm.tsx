'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success!
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // Show error to user
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gray-light"
      >
        <div className="bg-white p-12 rounded-sm shadow-2xl border-t-4 border-gold text-center max-w-md">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h3 className="text-3xl font-serif font-light text-black mb-4">Thank You!</h3>
          <p className="text-gray-dark text-base leading-relaxed">
            Your message has been received. We'll get back to you soon.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-light overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-20 pb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4">
          Get In Touch
        </h2>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gold"></div>
          <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <div className="w-12 h-[2px] bg-gold"></div>
        </div>
        <p className="text-gray-dark max-w-2xl mx-auto px-6">
          We would be delighted to assist you with your luxury real estate needs.
        </p>
      </motion.div>

      {/* Main Contact Section - Half and Half */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-lg overflow-hidden">
          
          {/* LEFT SIDE - Black & Gold Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black text-white p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl"></div>
            
            {/* Decorative Pattern */}
            <div className="absolute top-8 right-8 opacity-10">
              <svg className="w-32 h-32 text-gold" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="20" cy="20" r="2" />
                <circle cx="40" cy="20" r="2" />
                <circle cx="60" cy="20" r="2" />
                <circle cx="80" cy="20" r="2" />
                <circle cx="20" cy="40" r="2" />
                <circle cx="40" cy="40" r="2" />
                <circle cx="60" cy="40" r="2" />
                <circle cx="80" cy="40" r="2" />
                <circle cx="20" cy="60" r="2" />
                <circle cx="40" cy="60" r="2" />
                <circle cx="60" cy="60" r="2" />
                <circle cx="80" cy="60" r="2" />
                <circle cx="20" cy="80" r="2" />
                <circle cx="40" cy="80" r="2" />
                <circle cx="60" cy="80" r="2" />
                <circle cx="80" cy="80" r="2" />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl font-serif font-light mb-4"
              >
                Contact <span className="text-gold">Cheryl</span>
              </motion.h3>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="w-24 h-[2px] bg-gold mb-12 origin-left"
              ></motion.div>
              
              {/* Contact Details */}
              <div className="space-y-10 mb-16">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-700">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-xs text-gold uppercase tracking-widest font-semibold">Phone</div>
                  </div>
                  <a href="tel:9083340971" className="text-xl sm:text-2xl font-serif font-light hover:text-gold transition-colors duration-700 block">
                    908.334.0971
                  </a>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-700">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-xs text-gold uppercase tracking-widest font-semibold">Email</div>
                  </div>
                  <a href="mailto:yournjrealtor1@gmail.com" className="text-lg sm:text-xl font-serif font-light hover:text-gold transition-colors duration-700 break-all block">
                    yournjrealtor1@gmail.com
                  </a>
                </motion.div>

                {/* Office */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-700">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-xs text-gold uppercase tracking-widest font-semibold">Office</div>
                  </div>
                  <address className="text-lg sm:text-xl font-serif font-light not-italic">
                    1625 NJ-10 East<br />
                    Morris Plains, NJ 07950
                  </address>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="border-t border-gold/20 pt-8"
              >
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  I'm dedicated to providing you with personalized service for all your real estate needs in <span className="text-gold">Hackettstown, Andover, Byram, Blairstown, Chester, and Washington</span>.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-10 flex gap-4"
              >
                <a href="https://www.facebook.com/homewithcheryl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-gold/30 hover:border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/at_home_with_cheryl/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-gold/30 hover:border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/cheryl-towey-35384864/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-gold/30 hover:border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - White Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 sm:p-12 lg:p-16"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-serif font-light text-black mb-4"
            >
              Send a Message
            </motion.h3>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="w-24 h-[2px] bg-gold mb-10 origin-left"
            ></motion.div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 bg-white focus:outline-none focus:border-gold transition-all duration-700 rounded-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 bg-white focus:outline-none focus:border-gold transition-all duration-700 rounded-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 bg-white focus:outline-none focus:border-gold transition-all duration-700 rounded-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 bg-white focus:outline-none focus:border-gold resize-none transition-all duration-700 rounded-sm"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.6 }}
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-4 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(184,150,73,0.5)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
