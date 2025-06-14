"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ServiceCard {
  id: string;
  title: string;
  image: string;
  mobileImage: string; // Mobile version of the image
  link: string;
  x: number; // X position as percentage
  y: number; // Y position as percentage
  width: number; // Width in pixels
  height: number; // Height in pixels
  mobileWidth?: number; // Optional mobile width (defaults to width if not provided)
  mobileHeight?: number; // Optional mobile height (defaults to height if not provided)
}

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // You can easily adjust these x, y, width, and height values for each service
  const services: ServiceCard[] = [
    {
      id: 'food-systems',
      title: 'Food Systems',
      image: '/images/food-systems.png',
      mobileImage: '/images/food-systems-mobile.png',
      link: '/services/food-systems',
      x: 5,
      y: 30,
      width: 250,
      height: 250,
      mobileWidth: 120,
      mobileHeight: 120,
    },
    {
      id: 'soil-health',
      title: 'Soil Health',
      image: '/images/soil-health.png',
      mobileImage: '/images/soil-health-mobile.png',
      link: '/services/soil-health',
      x: 27,
      y:15,
      width: 200,
      height: 200,
      mobileWidth: 130,
      mobileHeight: 130,
    },
    {
      id: 'aquaculture',
      title: 'Aquaculture',
      image: '/images/aquaculture.png',
      mobileImage: '/images/aquaculture-mobile.png',
      link: '/services/aquaculture',
      x: 73,
      y: 15,
      width: 200,
      height: 200,
      mobileWidth: 115,
      mobileHeight: 115,
    },
    {
      id: 'assessments',
      title: 'Site Assessments',
      image: '/images/assessments.png',
      mobileImage: '/images/assessments-mobile.png',
      link: '/services/assessments',
      x: 27,
      y:45,
      width: 200,
      height: 200,
      mobileWidth: 125,
      mobileHeight: 125,
    },
  
    {
      id: 'signature-gardens',
      title: 'Signature Gardens',
      image: '/images/signature-gardens.png',
      mobileImage: '/images/gardens-mobile.png',
      link: '/services/signature-gardens',
      x: 73,
      y: 45,
      width: 200,
      height: 200,
      mobileWidth: 110,
      mobileHeight: 110,
    },
    {
        id: 'masterplan',
        title: 'Masterplan Design',
        image: '/images/masterplan.png',
        mobileImage: '/images/masterplan-mobile.png',
        link: '/services/masterplan',
        x: 50,
        y: 30,
        width: 250,
        height: 250,
        mobileWidth: 500,
        mobileHeight: 500,
      },    
      {
        id: 'pond',
        title: 'Pools',
        image: '/images/pools.png',
        mobileImage: '/images/ponds-mobile.png',
        link: '/services/pools',
        x: 95,
        y: 30,
        width: 250,
        height: 250,
        mobileWidth: 500,
        mobileHeight: 500,
      },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-maname tracking-wide text-green-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl font-anicizer italic text-gray-600 tracking-widest">
            Comprehensive Permaculture Solutions
          </p>
        </div>

        {/* Services Grid - Freely Positioned */}
        <div className="relative h-[600px] lg:h-[800px] mx-auto" style={{ width: '800px', maxWidth: '100%' }}>
          {services.map((service) => {
            const currentImage = isMobile ? service.mobileImage : service.image;
            const currentWidth = isMobile ? (service.mobileWidth || service.width) : service.width;
            const currentHeight = isMobile ? (service.mobileHeight || service.height) : service.height;

            return (
              <Link
                key={service.id}
                href={service.link}
                className={`absolute group cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                  service.id === 'masterplan' ? 'hover:z-20' : 'hover:z-10'
                }`}
                style={{
                  left: `${(service.x / 100) * 800}px`,
                  top: `${(service.y / 100) * (isMobile ? 600 : 800)}px`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: service.id === 'masterplan' ? 1 : 5,
                }}
              >
                <div className="relative">
                  {/* Hexagon Service Image */}
                  <div 
                    className="relative group-hover:drop-shadow-2xl transition-all duration-300"
                    style={{
                      width: `${currentWidth}px`,
                      height: `${currentHeight}px`,
                    }}
                  >
                    <style jsx>{`
                      @media (min-width: 1024px) {
                        .service-${service.id} {
                          width: ${service.width}px !important;
                          height: ${service.height}px !important;
                        }
                      }
                    `}</style>
                    <Image
                      src={currentImage}
                      alt={service.title}
                      width={currentWidth}
                      height={currentHeight}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                      style={{
                        transform: isMobile ? 'rotate(-90deg)' : 'none',
                      }}
                    />
                    
                    {/* Subtle glow effect behind hexagon */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-green-200/30 to-green-400/30 blur-xl transition-opacity duration-300 -z-10 ${
                      isMobile && service.id === 'masterplan'
                        ? 'opacity-0 group-hover:opacity-30 scale-125'
                        : 'opacity-0 group-hover:opacity-100 scale-150'
                    }`}></div>
                  </div>
                  
                

                  {/* Animated ring effect on hover */}
                  <div 
                    className={`absolute border-2 border-green-300/0 group-hover:border-green-300/50 transition-all duration-500 scale-150 group-hover:scale-125 group-hover:animate-pulse ${
                      isMobile && service.id === 'masterplan' 
                        ? 'rounded-xl' 
                        : 'rounded-full inset-0'
                    }`}
                    style={
                      isMobile && service.id === 'masterplan'
                        ? {
                            top: '0',
                            bottom: '0',
                            left: '25%',
                            right: '25%',
                          }
                        : {}
                    }
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-green-100/30 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Services; 