"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  images: string[]; // Array of images for modal slideshow
  details: string;
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 'finca-permaguanacaste',
      title: t.projects.items.fincaPermaguanacaste.title,
      year: t.projects.items.fincaPermaguanacaste.year,
      category: t.projects.items.fincaPermaguanacaste.category,
      image: '/images/finca3.jpg',
      images: ['/images/finca3.jpg', '/images/finca2.jpg', '/images/finca1.jpg', '/images/finca4.jpg'],
      details: t.projects.items.fincaPermaguanacaste.details
    },
    {
      id: 'biofiltered-pond',
      title: t.projects.items.casaDelArbol.title,
      year: t.projects.items.casaDelArbol.year,
      category: t.projects.items.casaDelArbol.category,
      image: '/images/casa-arbol_1.jpg',
      images: ['/images/casa-arbol_1.jpg', '/images/casa-arbol_2.jpg', '/images/casa-arbol_3.jpg'],
      details: t.projects.items.casaDelArbol.details
    },
    {
      id: 'soil-workshop',
      title: t.projects.items.agroecologyWorkshop.title,
      year: t.projects.items.agroecologyWorkshop.year,
      category: t.projects.items.agroecologyWorkshop.category,
      image: '/images/workshop8.jpg',
      images: ['/images/workshop8.jpg', '/images/workshop4.jpg', '/images/workshop5.jpg', '/images/workshop6.jpg', '/images/workshop7.jpg', '/images/workshop9.jpg', '/images/workshop10.jpg', '/images/workshop11.jpg', '/images/workshop12.jpg', '/images/workshop13.jpg'],
      details: t.projects.items.agroecologyWorkshop.details
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to first image when opening modal
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Auto-advance images in modal
  useEffect(() => {
    if (!selectedProject || selectedProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [selectedProject]);

  // Animation variants
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden bg-gray-50 py-16 lg:py-24"
      id="projects"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-luxury font-black text-stone-800 mb-4">
            {t.projects.title}
          </h2>

          <div className="w-full h-px bg-black mx-auto mb-6"></div>

          <p className="text-xl lg:text-2xl font-luxury italic text-stone-600 max-w-4xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer touch-manipulation active:scale-95 transition-transform duration-150"
              onClick={() => openProject(project)}
              onTouchEnd={(e) => {
                e.preventDefault();
                openProject(project);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project);
                }
              }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white select-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white pointer-events-none">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl lg:text-2xl font-luxury font-bold mb-2">
                      {project.title}
                    </h3>
                    <div className="text-sm lg:text-base font-luxury opacity-90">
                      {project.year}
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Image */}
              <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-t-2xl overflow-hidden">
                {selectedProject.images.map((image, index) => (
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
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Image indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-luxury font-semibold rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="text-stone-600 font-luxury text-sm">
                     {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-luxury font-black text-stone-800 mb-4">
                  {selectedProject.title}
                </h2>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-luxury font-bold text-stone-800 mb-4">
                    Project Details
                  </h3>
                  <p className="text-stone-700 font-luxury leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 