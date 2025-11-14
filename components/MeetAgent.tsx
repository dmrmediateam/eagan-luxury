'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MeetAgent = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const textInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="team">
      <div className="container-max">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Meet Cheryl Towey Services
          </h2>
          <p className="text-base text-gray-dark mt-8">
            Your trusted real estate professional in New Jersey
          </p>
        </motion.div>

        {/* Agent Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Agent Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 relative overflow-hidden shadow-lg group"
          >
            {/* Gold Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src="/images/1752608667829.jpeg" 
              alt="Cheryl Towey - Real Estate Agent" 
              className="w-full h-auto aspect-square object-cover object-center scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
            />
          </motion.div>

          {/* Agent Info */}
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="text-2xl font-serif font-light text-black mb-4"
            >
              Cheryl Towey Services
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="text-base text-secondary mb-6"
            >
              Cheryl Towey Services Agent
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="text-gray-dark leading-relaxed space-y-4 mb-8 text-sm"
            >
              <p>
                Cheryl Towey Services is a dedicated real estate professional serving New Jersey's most desirable communities. With over 15 years of experience in the real estate industry, Cheryl specializes in residential properties throughout Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.
              </p>
              <p>
                Her deep knowledge of local markets, commitment to exceptional client service, and personalized approach make her the trusted choice for buyers and sellers throughout New Jersey. Cheryl understands that buying or selling a home is one of life's most important decisions, and she is committed to guiding her clients through every step of the process with professionalism, integrity, and care.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <Link 
                href="/about" 
                className="text-black hover:text-gold transition-colors duration-700 border-b-2 border-gold pb-1 text-base inline-block hover:border-gold-dark"
              >
                Learn More About Cheryl
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetAgent;

