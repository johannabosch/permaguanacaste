"use client";

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const PermaguanacasteIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-60 h-60 bg-green-300/15 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]) }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100/30 rounded-full blur-3xl"
        style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]) }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            
            {/* Logo Animation */}
            <motion.div
              variants={fadeInVariants}
              className="flex items-center space-x-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/perma-logo.png"
                  alt="Permaguanacaste Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20"
                />
              </motion.div>
              <motion.div
                className="h-12 w-px bg-gradient-to-b from-green-600 to-green-300"
                initial={{ height: 0 }}
                whileInView={{ height: 48 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.h1
                variants={slideInVariants}
                className="text-2xl lg:text-3xl font-maname tracking-wider text-green-800"
              >
                PERMAGUANACASTE
              </motion.h1>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={fadeInVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-maname tracking-wide text-gray-900 leading-tight"
            >
              Designing
              <motion.span
                className="block text-green-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Sustainable
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Futures
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.div
              variants={fadeInVariants}
              className="space-y-6"
            >
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-anicizer">
                We are landscape architects and permaculture designers creating 
                regenerative ecosystems that harmonize human needs with natural systems.
              </p>
              
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {[
                  "20+ Years Experience",
                  "Guanacaste Expertise", 
                  "Regenerative Design",
                  "Sustainable Solutions"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={slideInVariants}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    />
                    <span className="text-gray-600 font-maname tracking-wide text-sm lg:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeInVariants}
              className="pt-6"
            >
              <motion.button
                className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-maname tracking-widest text-sm hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                EXPLORE OUR SERVICES
                <motion.svg
                  className="w-4 h-4 ml-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/hero.jpg"
                alt="Permaculture Landscape"
                width={600}
                height={400}
                className="w-full h-80 lg:h-96 object-cover"
              />
              
              {/* Overlay with floating elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              
              {/* Floating Stats */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-green-700"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    100+
                  </motion.div>
                  <div className="text-xs text-gray-600 font-maname tracking-wide">
                    PROJECTS
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-green-700"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    20+
                  </motion.div>
                  <div className="text-xs text-gray-600 font-maname tracking-wide">
                    YEARS
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative geometric shapes */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-20"
              initial={{ rotate: 0, scale: 0 }}
              whileInView={{ rotate: 45, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-15"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

          </motion.div>

        </div>

        {/* Bottom Stats Section */}
        <motion.div
          className="mt-20 pt-12 border-t border-green-200/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Hectares Designed" },
              { number: "50+", label: "Food Systems" },
              { number: "25+", label: "Swimming Pools" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="text-3xl lg:text-4xl font-bold text-green-700 mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm lg:text-base text-gray-600 font-maname tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PermaguanacasteIntro; 