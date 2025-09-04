"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  id: string;
  title: string;
  description: string;
  backgroundImages: string[];
}

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
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
        ease: "easeOut" as const
      }
    })
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const services: Service[] = [
    {
      id: 'masterplan',
      title: t.services.items.masterplan.title,
      description: t.services.items.masterplan.description,
      backgroundImages: ['/images/masterplan-design.png']
    },
    {
      id: 'pools',
      title: t.services.items.pools.title,
      description: t.services.items.pools.description,
      backgroundImages: ['/images/pond-design.png', '/images/pond-design2.jpg', '/images/pond-design3.jpg']
    },
    {
      id: 'food-systems',
      title: t.services.items.foodSystems.title,
      description: t.services.items.foodSystems.description,
      backgroundImages: ['/images/food-systems.png']
    },
    {
      id: 'soil-health',
      title: t.services.items.soilHealth.title,
      description: t.services.items.soilHealth.description,
      backgroundImages: ['/images/soil-mgmt1.png']
    },
    {
      id: 'landscaping-maintenance',
      title: t.services.items.landscapingMaintenance.title,
      description: t.services.items.landscapingMaintenance.description,
      backgroundImages: ['/images/landscape-maintenance.png']
    }
  ];

  // Image carousel component for each service
  const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (images.length <= 1) return;

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0 
            }}
            transition={{ 
              duration: 1, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden bg-white"
      id="services"
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      
            <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <div className="relative z-10">
        {/* Services Section */}
        <div className="py-8 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl lg:text-5xl font-luxury font-black text-stone-800 mb-4">
                Our Services
              </h2>
              <div className="w-full h-px bg-black mx-auto mb-6"></div>
            </div>
              <p className="text-xl lg:text-2xl font-luxury italic text-stone-600 max-w-3xl lg:max-w-6xl mx-auto">
              We offer a range of services that honour the unique rhythms of your land. Drawing on our hands-on experience living and working in the tropics, we design projects that are both beautiful and ecologically resilient. Every design is tailored to your vision and your site's natural potential, creating spaces that thrive for years to come.              </p>
            </motion.div>

            {/* Services List */}
            <div className="space-y-20 lg:space-y-32">
              {services.map((service, index) => {
                const isEven = index % 2 === 0;

            return (
                  <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-center">
                    
                    {/* Mobile Header */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="lg:hidden text-center"
                    >
                      <h3 className="text-2xl font-luxury font-black" style={{ color: '#599559' }}>
                        {service.title}
                      </h3>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      variants={isEven ? fadeInLeft : fadeInRight}
                      className={`relative mb-4 lg:mb-0 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                      <ImageCarousel images={service.backgroundImages} title={service.title} />
                      
                      {/* Decorative elements */}
                      <div className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} w-32 h-32 bg-emerald-100 rounded-full opacity-20 blur-2xl`}></div>
                      <div className={`absolute -bottom-4 ${isEven ? '-left-4' : '-right-4'} w-24 h-24 bg-green-200 rounded-full opacity-30 blur-xl`}></div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      variants={isEven ? fadeInRight : fadeInLeft}
                      className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                      <div className={`${isEven ? 'lg:text-left' : 'lg:text-right'} text-center lg:text-inherit`}>
                        {/* Desktop Header - Shows only on desktop */}
                        <h3 className="hidden lg:block text-2xl lg:text-4xl font-luxury font-black mb-6" style={{ color: '#599559' }}>
                          {service.title}
                        </h3>
                        
                        {/* Mobile Paragraph - Shows on mobile below image, centered */}
                        <p className="lg:hidden text-base text-stone-700 leading-relaxed font-luxury text-center">
                          {service.description}
                        </p>
                        
                        {/* Desktop Paragraph - Shows only on desktop with alignment */}
                        <p className="hidden lg:block text-lg lg:text-xl text-stone-700 leading-relaxed font-luxury">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 