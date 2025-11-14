'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alyssa Michelle',
    location: 'New Jersey',
    text: 'Cheryl is the most caring, professional, and hard working realtor there is! She will always go above and beyond for her clients and makes you feel like family. I had the pleasure of working with her through the buying process and selling process and could not imagine doing it without her. Highly recommend her!!',
    image: '/images/client-placeholder.svg',
  },
  {
    id: 2,
    name: 'Dominique Thorpe',
    location: 'New Jersey',
    text: 'Cheryl is the most professional, thoughtful and respectful real estate agent my wife and I have ever worked with. She\'s literally the cream of the crop in the business. She helped us purchase, rent AND sell our home during our time in New Jersey. What we appreciate most is that we both felt comfortable with her. She never put pressure on us in any way and really looked out for us giving her professional recommendations as buyers, landlords and sellers. If I had it my way she\'d be the only agent I\'d want to do business with in any state we love and appreciate her that much. I highly recommend her for your real estate needs. She\'s truly a gem.',
    image: '/images/client-placeholder.svg',
  },
  {
    id: 3,
    name: 'Christine Hering',
    location: 'New Jersey',
    text: 'Cheryl has become family! She incredibly invested in her clients well being and she goes above and beyond to make sure her clients\' best interests are in mind. I trusted her to give me not just her professional opinion, but an opinion she would give her own daughter or family member. She is knowledgeable, hard working and professional. I can\'t recommend her enough!',
    image: '/images/client-placeholder.svg',
  },
  {
    id: 4,
    name: 'David Hering',
    location: 'New Jersey',
    text: 'I cant say enough about how great of a person, realtor and now friend Cheryl is. She does it all, she has helped my entire family with finding the right home, selling, relocating and even finding quality tenants. As a real estate investor, I highly recommend Cheryl for all your real estate needs.',
    image: '/images/client-placeholder.svg',
  },
  {
    id: 5,
    name: 'Nick DeBalko',
    location: 'New Jersey',
    text: 'Cheryl was very helpful with finding our new home. When showing us around a house that she hasn\'t been at before, she would point out any issues that she would see, rather than just try to make the sale. I really appreciate this from a salesperson. She was beyond nice, and really made our first house buying experience very easy. We have already recommended her to our friends and family, and would highly recommend her to anyone.',
    image: '/images/client-placeholder.svg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-light to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="scroll-animate inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <svg className="w-6 h-6 mx-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-r from-gold via-gold to-transparent"></div>
            </div>
          </div>
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
            Client <span className="italic text-gold">Testimonials</span>
          </h2>
          <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto leading-relaxed">
            Trusted voices from our distinguished clientele who experienced our exceptional service firsthand.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Decorative Quote Marks */}
            <div className="absolute -top-6 -left-6 text-gold opacity-20 text-9xl font-serif leading-none pointer-events-none hidden lg:block">
              "
            </div>
            
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Client Info Card */}
              <div className="lg:col-span-4 relative">
                <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-700 group">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-gold animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Client Image */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6 group">
                      <div className="absolute inset-0 bg-gold rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <img 
                        src={current.image}
                        alt={current.name}
                        className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg opacity-40 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-xl text-black mb-2">{current.name}</h3>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-dark">
                        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{current.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <div className="text-xs uppercase tracking-widest text-gold font-semibold">
                      Verified Client
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content Card */}
              <div className="lg:col-span-8 relative">
                <div className="bg-white p-10 md:p-12 rounded-sm shadow-2xl border-t-4 border-gold relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:scale-[1.01] transition-all duration-700">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Counter and Quote */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="text-6xl text-gold font-serif leading-none">"</div>
                        <div className="text-xs text-gray-dark font-mono tracking-wider">
                          <span className="text-xl font-bold text-black">{String(currentIndex + 1).padStart(2, '0')}</span>
                          <span className="mx-2 text-gold">/</span>
                          <span className="text-gray-400">{String(testimonials.length).padStart(2, '0')}</span>
                        </div>
                      </div>
                      <div className="hidden md:block w-24 h-px bg-gradient-to-r from-gold to-transparent"></div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-dark text-base md:text-lg leading-relaxed mb-8 font-serif italic">
                      {current.text}
                    </blockquote>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-200">
                      <div className="text-xs uppercase tracking-widest text-gold font-semibold">
                        Cheryl Towey's Client Experience
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="flex gap-3">
                        <button 
                          onClick={prevTestimonial}
                          disabled={isAnimating}
                          className="group w-12 h-12 border-2 border-gray-300 hover:border-gold rounded-full flex items-center justify-center text-gray-dark hover:text-gold transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Previous testimonial"
                        >
                          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button 
                          onClick={nextTestimonial}
                          disabled={isAnimating}
                          className="group w-12 h-12 bg-gold hover:bg-gold-dark border-2 border-gold rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Next testimonial"
                        >
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setIsAnimating(false);
                      }, 300);
                    }
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-gold'
                      : 'w-8 bg-gray-300 hover:bg-gold-dark'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
