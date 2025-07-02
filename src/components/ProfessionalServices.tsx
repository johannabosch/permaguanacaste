"use client";

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundImage: string;
  link: string;
  features: string[];
}

const ProfessionalServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services: Service[] = [
    {
        id: 'masterplan',
        title: 'Masterplan Design',
        subtitle: 'Comprehensive Property Planning',
        description: 'Complete property transformation plans that integrate all systems for maximum efficiency and sustainability.',
        image: '/images/masterplan.png',
        backgroundImage: '/images/masterplan-design.png',
        link: '/services/masterplan',
        features: ['Zoning & Layout', 'Infrastructure Planning', 'System Integration', 'Phased Implementation']
      },
    {
      id: 'site-assessments',
      title: 'Site Assessments',
      subtitle: 'Comprehensive Land Analysis',
      description: 'Thorough evaluation of your land\'s potential, constraints, and opportunities for sustainable development.',
      image: '/images/assessments.png',
      backgroundImage: '/images/site-assessment.png',
      link: '/services/assessments',
      features: ['Topographic Analysis', 'Soil Testing', 'Climate Assessment', 'Resource Mapping']
    },

    {
      id: 'food-systems',
      title: 'Regen Food Systems',
      subtitle: 'Sustainable Agriculture Solutions',
      description: 'Design comprehensive food production systems that work in harmony with natural ecosystems, maximizing yield while building soil health.',
      image: '/images/food-systems.png',
      backgroundImage: '/images/food-systems.png',
      link: '/services/food-systems',
      features: ['Polyculture Design', 'Crop Rotation Planning', 'Companion Planting', 'Yield Optimization']
    },
    {
      id: 'pools',
      title: 'Biofiltered Swimming Pools',
      subtitle: 'Eco-Friendly Water Features',
      description: 'Design beautiful, natural swimming pools and water features that work with nature\'s filtration systems.',
      image: '/images/pools.png',
      backgroundImage: '/images/pond-design.png',
      link: '/services/pools',
      features: ['Natural Filtration', 'Swimming Pool Design', 'Pond Ecosystems', 'Water Conservation']
    },
    {
      id: 'soil-health',
      title: 'Soil Health Management',
      subtitle: 'Building Living Soil Systems',
      description: 'Restore and maintain soil vitality through natural methods that enhance microbial activity and nutrient cycling.',
      image: '/images/soil-health.png',
      backgroundImage: '/images/soil-health.png',
      link: '/services/soil-health',
      features: ['Soil Testing & Analysis', 'Composting Systems', 'Cover Crop Integration', 'Erosion Control']
    },
    {
      id: 'signature-gardens',
      title: 'Signature Gardens',
      subtitle: 'Beautiful & Productive Landscapes',
      description: 'Design stunning ornamental gardens that also provide food, medicine, and ecological benefits.',
      image: '/images/signature-gardens.png',
      backgroundImage: '/images/signature-garden.png',
      link: '/services/signature-gardens',
      features: ['Aesthetic Design', 'Edible Landscaping', 'Medicinal Plants', 'Wildlife Habitat']
    },
    {
      id: 'aquaculture',
      title: 'Aquaculture',
      subtitle: 'Integrated Water & Fish Production',
      description: 'Create productive aquatic systems that integrate seamlessly with terrestrial food production and water management.',
      image: '/images/aquaculture.png',
      backgroundImage: '/images/aquaculture.png',
      link: '/services/aquaculture',
      features: ['Fish Pond Design', 'Aquaponics Systems', 'Water Quality Management', 'Species Selection']
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-maname tracking-wide text-green-800 mb-6">
            Professional Services
          </h2>
          <p className="text-lg lg:text-xl font-anicizer italic text-gray-600 tracking-widest max-w-4xl mx-auto">
            Comprehensive permaculture solutions tailored to your unique landscape and vision
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
            >
              <Link href={service.link}>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-96">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.backgroundImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    
                    {/* Service Icon */}
                    <motion.div 
                      className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                      animate={activeService === index ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                      />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={activeService === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl lg:text-3xl font-maname tracking-wide text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-green-200 font-anicizer italic text-lg mb-4 tracking-wide">
                        {service.subtitle}
                      </p>
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={activeService === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center text-white/80 text-sm"
                            initial={{ x: -20, opacity: 0 }}
                            animate={activeService === index ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Call-to-Action */}
                    <motion.div
                      className="flex items-center text-white font-maname tracking-widest text-sm mt-6 group-hover:text-green-300 transition-colors duration-300"
                      animate={activeService === index ? { x: 10 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      LEARN MORE
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>

                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl"
                    animate={activeService === index ? { borderColor: 'rgba(34, 197, 94, 0.5)' } : { borderColor: 'transparent' }}
                    transition={{ duration: 0.3 }}
                  />

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-green-200/10 rounded-full blur-xl"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-green-300/10 rounded-full blur-xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        />

      </div>
    </section>
  );
};

export default ProfessionalServices; 