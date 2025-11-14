'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - video moves slower than content
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: videoY }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.2]"
          src="/videos/young-couple-walking-outside-their-luxury-estate-1080p-2025-08-29-04-38-27-utc.mov"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
      
      {/* Black Gradient Overlay from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-30% to-black/50"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 text-left text-white px-6 sm:px-12 lg:px-20 max-w-7xl">
        {/* Hero Name with Gold Accent Line */}
        <div className="inline-block mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light tracking-[-0.03em] text-white relative pb-4"
          >
            Cheryl Towey
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[2px] bg-gold origin-center"
            />
          </motion.h1>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-xl sm:text-2xl lg:text-3xl mb-6 tracking-wide font-serif font-light text-white"
        >
          Weichert Realtors
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="text-sm sm:text-base mb-10 text-white tracking-wide"
        >
          New Jersey • Hackettstown • Andover • Byram • Blairstown • Chester • Washington
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link 
            href="/listings" 
            className="btn-primary w-full sm:w-auto text-xs sm:text-sm text-white transition-all duration-700 hover:shadow-[0_0_20px_rgba(184,150,73,0.6)]"
          >
            View Listings
          </Link>
          <Link 
            href="/contact" 
            className="btn-outline border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-xs sm:text-sm font-semibold transition-all duration-700"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;