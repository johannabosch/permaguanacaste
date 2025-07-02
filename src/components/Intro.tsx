"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Text animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Image gallery data
  const galleryImages = [
    { src: '/images/masterplan-design.png', alt: 'Masterplan Design', title: 'Design Excellence' },
    { src: '/images/food-systems.png', alt: 'Food Systems', title: 'Regenerative Agriculture' },
    { src: '/images/aquaculture.png', alt: 'Aquaculture', title: 'Water Systems' },
    { src: '/images/site-assessment.png', alt: 'Site Assessment', title: 'Strategic Planning' },
    { src: '/images/signature-garden.png', alt: 'Signature Gardens', title: 'Living Landscapes' },
    { src: '/images/soil-health.png', alt: 'Soil Health', title: 'Earth Restoration' }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-green-200/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-green-300/8 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story & Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Connecting tagline */}
            <motion.div
              custom={0}
              variants={fadeInUp}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-0.5 bg-green-500"></div>
              <span className="text-green-600 font-maname tracking-widest text-sm uppercase">
                Your Vision, Our Expertise
              </span>
            </motion.div>

            {/* Main statement */}
            <motion.h2
              custom={1}
              variants={fadeInUp}
              className="text-3xl lg:text-5xl font-maname tracking-wide text-gray-800 leading-tight"
            >
              Transforming Land Into
              <motion.span 
                className="block text-green-600 mt-2"
                animate={{ 
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                Living Ecosystems
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeInUp}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed font-anicizer"
            >
              From initial site assessment to masterplan implementation, we guide you through every step of creating sustainable, productive landscapes that work with nature's wisdom.
            </motion.p>

            {/* Process highlights */}
            <motion.div
              custom={3}
              variants={fadeInUp}
              className="space-y-4"
            >
              {[
                "Site analysis & opportunity mapping",
                "Custom design solutions",
                "Phased implementation planning"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-maname tracking-wide">{item}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column - Photo Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            
            {/* Main Image Container */}
            <motion.div
              custom={4}
              variants={fadeInUp}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 1.1
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Image Title */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      y: index === currentImageIndex ? 0 : 20
                    }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <h3 className="text-white font-maname text-xl lg:text-2xl tracking-wide">
                      {image.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-green-400 mt-2"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image Indicators */}
            <motion.div
              custom={5}
              variants={fadeInUp}
              className="flex justify-center space-x-2 mt-6"
            >
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-green-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </motion.div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 lg:-right-8">
              <motion.div
                custom={6}
                variants={fadeInUp}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl font-maname text-gray-900 font-bold">100+</div>
                <div className="text-xs text-gray-600 font-anicizer">Projects</div>
              </motion.div>
            </div>

            <div className="absolute -bottom-4 -left-4 lg:-left-8">
              <motion.div
                custom={7}
                variants={fadeInUp}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-2xl font-maname text-gray-900 font-bold">15+</div>
                <div className="text-xs text-gray-600 font-anicizer">Years</div>
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Bottom CTA - Scroll encouragement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex flex-col items-center space-y-4"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-gray-600 font-maname tracking-widest text-sm">
              DISCOVER OUR SERVICES
            </span>
            <motion.div
              className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center"
              animate={{
                borderColor: ["rgba(34, 197, 94, 0.5)", "rgba(34, 197, 94, 1)", "rgba(34, 197, 94, 0.5)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <motion.div
                className="w-1 h-3 bg-green-500 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Intro; 
