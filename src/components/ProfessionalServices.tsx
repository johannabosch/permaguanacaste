"use client";

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  link: string;
  features: string[];
  process: string[];
  benefits: string[];
}

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

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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

  // Close modal function
  const closeModal = () => {
    setSelectedService(null);
  };

  // Handle service click
  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const services: Service[] = [
    {
      id: 'land-selection',
      title: 'Pre-Purchase Guidance',
      subtitle: 'Start your journey with confidence.',
      description: 'For prospective landowners seeking to establish regenerative homesteads, reforested retreats, or thriving food forests in Costa Rica, we provide comprehensive pre-purchase guidance to ensure your investment aligns with your vision and values. Our deep local expertise helps you understand the ecological, logistical, and legal realities of each property, empowering you to make informed decisions and build with confidence from day one.',
      backgroundImage: '/images/land-selection.png',
      link: '/services/land-selection',
      features: ['On-site ecological walk-through', 'Resource & constraint analysis (soil, water, access, slope)', 'Preliminary design potential review', 'Local considerations & permitting insights'],
      process: ['Initial consultation & vision clarification', 'Property visit & comprehensive assessment', 'Ecological & logistical analysis', 'Detailed report with recommendations'],
      benefits: ['Informed land purchase decisions', 'Risk mitigation', 'Design potential assessment', 'Local expertise & guidance']
    },
    {
        id: 'masterplan',
        title: 'Masterplan Design',
        subtitle: 'Whole-System Property Planning',
        description: 'We craft integrated, long-term plans to bring your land\'s full potential to life—balancing your vision with regenerative design for a resilient, abundant future.',
        backgroundImage: '/images/masterplan-design.png',
        link: '/services/masterplan',
        features: ['Zoning & flow mapping', 'Infrastructure & water systems design', 'Integrated food, energy, and shelter planning', 'Scalable, phased implementation'],
        process: ['On-site consultation & landscape reading', 'Ecological & infrastructural planning', 'Client collaboration & design revisions', 'Final plan delivery with phased roadmap'],
        benefits: ['Maximized land use efficiency', 'Integrated water management', 'Sustainable food production', 'Long-term cost savings']
      },
    {
      id: 'site-assessments',
      title: 'Site Assessments',
      subtitle: 'Ecological Landscape Evaluation',
      description: 'Get to know your land before breaking ground. We offer in-depth assessments that uncover your site\'s natural assets and constraints to guide regenerative design.',
      backgroundImage: '/images/site-assessment.png',
      link: '/services/assessments',
      features: ['Topography & hydrology review', 'Soil health diagnostics', 'Climate profiling', 'Mapping of key resources'],
      process: ['On-site walk-through & observation', 'Soil and water testing', 'Climate and microclimate analysis', 'Comprehensive findings & recommendations report'],
      benefits: ['Informed decision making', 'Risk mitigation', 'Optimal system placement', 'Foundation for all future development']
    },
    {
      id: 'food-systems',
      title: 'Regenerative Food Systems',
      subtitle: 'Productive Ecosystems Rooted in Soil Health',
      description: 'We design edible landscapes and polyculture systems that feed people and the earth—building fertility, biodiversity, and resilience through ecological farming methods.',
      backgroundImage: '/images/food-systems.png',
      link: '/services/food-systems',
      features: ['Polyculture & agroforestry layout', 'Companion planting & crop rotation', 'Soil-building strategies', 'Biodiverse yield planning'],
      process: ['Landscape & soil analysis', 'Perennial & annual crop design', 'Succession & planting calendar', 'Implementation & follow-up support'],
      benefits: ['Increased biodiversity', 'Improved soil health', 'Higher yields', 'Reduced external inputs']
    },
    {
      id: 'pools',
      title: 'Biofiltered Swimming Pools',
      subtitle: 'Natural Pools & Water Features',
      description: 'Bring water to your space in a way that heals and nourishes. Our natural pools and ponds are designed to be chemical-free, self-regulating, and in tune with the landscape.',
      backgroundImage: '/images/pond-design.png',
      link: '/services/pools',
      features: ['Native planting & aquatic ecology', 'Natural filtration systems', 'Energy-efficient water management', 'Aesthetic & habitat-friendly design'],
      process: ['Visioning & site consult', 'Biofiltration system design', 'Build support & oversight', 'Commissioning & ecological calibration'],
      benefits: ['Chemical-free swimming', 'Lower maintenance costs', 'Enhanced biodiversity', 'Beautiful landscape feature']
    },
    {
      id: 'soil-health',
      title: 'Soil Health Management',
      subtitle: 'Living Soil, Thriving Systems',
      description: 'We restore your soil\'s natural vitality using organic practices that support microbial life, water retention, and long-term fertility.',
      backgroundImage: '/images/soil-health.png',
      link: '/services/soil-health',
      features: ['Composting systems', 'Mulching & soil structure enhancement', 'Mycorrhizal & microbial inoculation', 'Erosion control & slope stabilization'],
      process: ['In-depth soil testing', 'Organic amendment plan', 'Composting & cover crop strategy', 'Monitoring and adaptive support'],
      benefits: ['Improved water retention', 'Enhanced nutrient cycling', 'Increased carbon sequestration', 'Better plant health']
    },
    {
      id: 'signature-gardens',
      title: 'Signature Gardens',
      subtitle: 'Edible, Medicinal & Ecological Beauty',
      description: 'Create vibrant gardens that nourish the senses and the soil. We blend aesthetic design with ecological purpose for spaces that offer beauty, harvest, and habitat.',
      backgroundImage: '/images/signature-garden.png',
      link: '/services/signature-gardens',
      features: ['Edible & medicinal plants', 'Pollinator & wildlife gardens', 'Native & ornamental blends', 'Custom layouts for homes or retreats'],
      process: ['Visioning & layout planning', 'Species selection & sourcing', 'Installation planning', 'Seasonal care recommendations'],
      benefits: ['Year-round beauty', 'Fresh food production', 'Medicinal plant access', 'Wildlife support']
    },
    {
      id: 'landscaping-maintenance',
      title: 'Regular Landscaping & Maintenance',
      subtitle: 'Ongoing Landscape Care',
      description: 'Healthy landscapes require attention through every season. We offer personalized, year-round maintenance services to help your garden or land-based system flourish—whether you\'re on-site or abroad. From edible gardens to reforested zones, we care for your land with the same intention it was designed with—ensuring long-term beauty, productivity, and ecological health.',
      backgroundImage: '/images/landscape-maintenance.png',
      link: '/services/landscape-maintenance',
      features: ['Seasonal planting & harvesting', 'Tree pruning & vegetation control', 'Soil building & compost management', 'Irrigation system checks', 'Invasive species management', 'General upkeep & aesthetic care'],
      process: ['Initial landscape assessment', 'Customized maintenance plan creation', 'Scheduled seasonal care visits', 'Ongoing monitoring & adjustments'],
      benefits: ['Year-round landscape health', 'Maintained productivity & beauty', 'Professional care while away', 'Long-term ecological balance']
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="services" ref={containerRef} className="bg-white overflow-hidden min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeInUp}
              className="flex items-center justify-center space-x-3">
            <div className="flex flex-col items-center">            
              <p className="text-black text-center text-3xl mt-[80] lg:mt-[40px] lg:text-5xl font-luxury font-black mb-[-10] lg:max-w-3xl">  
              Our Services </p>

              <div className=" lg:block w-full h-px bg-black mb-5 mt-5"></div>
            </div>

            </motion.div>
          
          <p className="text-xl lg:text-2xl font-luxury italic text-gray-600 tracking-widest max-w-4xl mx-auto">
            Holistic permaculture and landscape design rooted in the ecology and culture of Costa Rica. We offer a range of tailored services that honour the unique rhythms of your land.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 h-96 border border-stone-100">
                
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-800/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  
                  {/* Bottom Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-luxury font-medium tracking-wide text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Call to Action */}
                    <div className="flex items-center text-emerald-300 font-luxury tracking-wider text-base lg:text-lg group-hover:text-emerald-200 transition-colors duration-300">
                      <span className="mr-2">Explore Service</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl"
                  animate={activeService === index ? { borderColor: 'rgba(52, 211, 153, 0.4)' } : { borderColor: 'transparent' }}
                  transition={{ duration: 0.4 }}
                />

              </div>
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

      {/* Service Detail Modal */}
      {selectedService && isMounted && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style={{ zIndex: 99999 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
          >
            {/* Sticky Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-stone-800/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-stone-700/80 transition-colors duration-200 z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedService.backgroundImage}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-800/40 to-transparent"></div>
                
                {/* Title and Subtitle */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl lg:text-4xl font-luxury font-medium tracking-wide text-white mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-emerald-200 font-luxury italic text-xl tracking-wide">
                    {selectedService.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg text-stone-700 leading-relaxed font-luxury">
                    {selectedService.description}
                  </p>
                </div>

                {/* Process */}
                <div className="mb-8">
                  <h3 className="text-xl font-luxury font-semibold text-stone-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Our Process
                  </h3>
                  <div className="space-y-3">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-emerald-100 font-luxury text-emerald-800 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-1 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-lg text-stone-600 font-luxury leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-luxury font-semibold text-stone-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-lg text-stone-600">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-luxury">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-stone-200">
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-luxury font-medium tracking-wide py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Book a free phone consultation now</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Services; 