"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // Framer Motion scroll tracking
  const { scrollY } = useScroll();
  
  // Transform scroll values to animation properties
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const headerHeight = useTransform(
    scrollY, 
    [0, 100], 
    [80, 60]
  );
  
  const logoScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.85]
  );
  
  // Change to dark grey instead of green
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(75, 85, 99, 1)"] // white to dark grey
  );

  // Black logo appears exactly when white background appears
  const logoFilter = useTransform(
    scrollY,
    [0, 100], // Same timing as the white background
    ["brightness(1)", "brightness(0.2) contrast(2)"] // Makes logo appear black
  );

  // PERMAGUANACASTE text fades in later and slower
  const permaguanacasteOpacity = useTransform(
    scrollY,
    [200, 500], // Much longer range for slower, longer transition
    [0, 1]
  );

  const permaguanacasteX = useTransform(
    scrollY,
    [200, 500], // Match the opacity range
    [50, 0] // More movement for smoother effect
  );

  return (
    <>
      {/* Mobile Header - Simple, non-sticky */}
      <header className="lg:hidden relative z-40 px-4">
        <div className="flex items-center justify-between w-full h-20">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/perma-logo.png"
              alt="Permaguanacaste Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Mobile Sidebar - Fixed position, separate from header */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <MobileSidebar />
      </div>

      {/* Desktop Header - With scroll effects */}
      <motion.header 
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 backdrop-blur-md border-b border-white/10"
        style={{
          background: headerBackground,
          height: headerHeight,
        }}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo and PERMAGUANACASTE text on the left */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <motion.div 
                style={{ 
                  scale: logoScale,
                  filter: logoFilter
                }}
              >
                <Image
                  src="/images/perma-logo.png"
                  alt="Permaguanacaste Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto lg:h-16 transition-all duration-500"
                />
              </motion.div>
            </Link>
            
            {/* PERMAGUANACASTE text that fades in slowly and much later */}
            <motion.div
              style={{
                opacity: permaguanacasteOpacity,
                x: permaguanacasteX,
                color: textColor,
              }}
              className="hidden lg:block"
              transition={{
                opacity: { duration: 1.2, ease: "easeOut" }, // Longer duration
                x: { duration: 1.2, ease: "easeOut" }
              }}
            >
              <span className="text-xl font-maname tracking-wide">
                P E R M A G U A N A C A S T E
              </span>
            </motion.div>
          </div>
          
          {/* Navigation buttons - Desktop Only */}
          <div className="hidden lg:flex items-baseline space-x-4">
            <motion.div style={{ color: textColor }}>
              <Link href="/about" className="hover:opacity-70 px-4 transition-all font-maname tracking-widest">
                ABOUT
              </Link>
            </motion.div>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.div 
                className="hover:opacity-70 px-4 transition-all font-maname tracking-widest flex items-center cursor-pointer"
                style={{ color: textColor }}
              >
                SERVICES
                <svg 
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
              
              <div className={`absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 py-3 z-50 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link 
                  href="/services/food-systems" 
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50/80 hover:text-green-800 transition-all duration-200 font-maname tracking-wide uppercase text-sm border-b border-gray-100/50"
                  onClick={() => setIsServicesOpen(false)}
                >
                  FOOD SYSTEMS
                </Link>
                <Link 
                  href="/services/soil-health" 
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50/80 hover:text-green-800 transition-all duration-200 font-maname tracking-wide uppercase text-sm border-b border-gray-100/50"
                  onClick={() => setIsServicesOpen(false)}
                >
                  SOIL HEALTH
                </Link>
                <Link 
                  href="/services/house-design" 
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50/80 hover:text-green-800 transition-all duration-200 font-maname tracking-wide uppercase text-sm border-b border-gray-100/50"
                  onClick={() => setIsServicesOpen(false)}
                >
                  HOUSE DESIGN
                </Link>
                <Link 
                  href="/services/aquaculture" 
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50/80 hover:text-green-800 transition-all duration-200 font-maname tracking-wide uppercase text-sm border-b border-gray-100/50"
                  onClick={() => setIsServicesOpen(false)}
                >
                  AQUACULTURE
                </Link>
                <Link 
                  href="/services/pond-swimming-pool-design" 
                  className="block px-6 py-3 text-gray-800 hover:bg-green-50/80 hover:text-green-800 transition-all duration-200 font-maname tracking-wide uppercase text-sm"
                  onClick={() => setIsServicesOpen(false)}
                >
                  POND & SWIMMING POOL DESIGN
                </Link>
              </div>
            </div>
            
            <motion.div style={{ color: textColor }}>
              <Link href="/learn" className="hover:opacity-70 px-4 transition-all font-maname tracking-widest">
                LEARN
              </Link>
            </motion.div>
            
            <motion.div style={{ color: textColor }}>
              <Link href="/projects" className="hover:opacity-70 px-4 transition-all font-maname tracking-widest">
                PROJECTS
              </Link>
            </motion.div>
            
            <motion.div 
              style={{ 
                color: textColor,
                borderColor: textColor
              }}
            >
              <Link 
                href="/contact" 
                className="bg-transparent border hover:bg-gray-600 hover:text-white px-4 py-2 rounded-full transition-all font-maname tracking-widest flex items-center justify-center min-h-[40px]"
              >
                CONTACT
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;