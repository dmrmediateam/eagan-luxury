'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Communities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const serviceAreas = [
    { 
      name: 'Hackettstown', 
      slug: 'hackettstown',
      description: 'Cheryl\'s primary service area - charming Warren County town with historic homes, excellent schools, and modern conveniences' 
    },
    { 
      name: 'Andover', 
      slug: 'andover',
      description: 'Cheryl serves this picturesque Sussex County community with beautiful homes and scenic landscapes' 
    },
    { 
      name: 'Byram', 
      slug: 'byram',
      description: 'Cheryl specializes in this desirable Sussex County township with excellent schools and family-friendly neighborhoods' 
    },
    { 
      name: 'Blairstown', 
      slug: 'blairstown',
      description: 'Cheryl serves this historic Warren County town with stunning homes and rural charm' 
    },
    { 
      name: 'Chester', 
      slug: 'chester',
      description: 'Cheryl\'s expertise extends to this Morris County gem with luxury homes and excellent shopping and dining' 
    },
    { 
      name: 'Washington', 
      slug: 'washington',
      description: 'Cheryl serves this Warren County community with beautiful properties and convenient access to major highways' 
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-light">
      <div className="container-max">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Our Locations
          </h2>
          <p className="text-base text-gray-dark max-w-3xl mx-auto mt-8">
            Discover exceptional properties in New Jersey's most prestigious communities
          </p>
        </motion.div>

        {/* Service Areas Content */}
        <div className="max-w-5xl mx-auto">
          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Link
                  href={`/communities/${area.slug}`}
                  className="block bg-white p-6 rounded-sm border-l-4 border-gold hover:shadow-[0_4px_20px_rgba(184,150,73,0.25)] hover:border-gold-dark hover:-translate-y-1 transition-all duration-700 group shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative overflow-hidden"
                >
                  {/* Subtle gold gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-lg font-serif font-light text-black mb-3 group-hover:text-gold transition-colors duration-700">
                      {area.name}
                    </h4>
                    <p className="text-gray-dark text-xs leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mt-4 text-gold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-700">
                      View Properties
                      <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-700">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            className="text-center"
          >
            <Link 
              href="/listings" 
              className="inline-flex items-center text-black hover:text-gold transition-all duration-700 border-b-2 border-gold pb-1 text-base hover:border-gold-dark"
            >
              View Properties
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Communities;

