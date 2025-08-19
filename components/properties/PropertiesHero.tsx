"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/home/NavbarNew';

interface PropertiesHeroProps {
  title?: string;
  subtitle?: string;
}

const PropertiesHero = ({ 
  title = "Find Your Perfect Home",
  subtitle = "Discover exceptional properties across New Jersey's most desirable communities. From charming historic homes to modern estates, find the perfect place to call home."
}: PropertiesHeroProps) => {
  return (
    <>
      <Navbar />
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-[5%] md:mx-[10%] lg:mx-[15%] w-full">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm uppercase tracking-wider">
                  All Properties Available
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm uppercase tracking-wider">
                  Filter by Your Preferences
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PropertiesHero;
