"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="story" ref={containerRef} className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
         <div>
          <h2 className="text-3xl lg:text-5xl font-luxury font-black text-stone-800 mb-4">
            {t.ourStory.title}
          </h2>
          <div className="w-full h-px bg-black mx-auto mb-6">
            
          </div>
         </div>
          
          <p className="text-lg lg:text-2xl font-luxury italic text-stone-600 max-w-3xl lg:max-w-7xl mx-auto">
          {t.ourStory.companyDescription}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section - Left on desktop, top on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative aspect-[1] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gabriel.jpg"
                alt="Permaguanacaste Owner"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-100 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-30 blur-xl"></div>
          </motion.div>

          {/* Text Content - Right on desktop, bottom on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            variants={fadeInRight}
            className="space-y-6"
          >
            <div className="space-y-4">
            <p className="text-base lg:text-xl text-stone-700 leading-relaxed font-luxury">
{t.ourStory.gabrielBio1}
</p>

<p className="text-base lg:text-xl text-stone-700 leading-relaxed font-luxury">
{t.ourStory.gabrielBio2}
</p>

            </div>

          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-200 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default OurStory; 