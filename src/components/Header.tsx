"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  
  // Framer Motion scroll tracking
  const { scrollY } = useScroll();
  
  // Track scroll position to show/hide header
  useEffect(() => {
    const updateHeaderVisibility = () => {
      const heroHeight = window.innerHeight; // 100vh
      setShowHeader(window.scrollY > heroHeight * 0.9); // Show when 90% past hero
    };

    window.addEventListener('scroll', updateHeaderVisibility);
    return () => window.removeEventListener('scroll', updateHeaderVisibility);
  }, []);
  
  // Transform scroll values to animation properties
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const headerHeight = useTransform(
    scrollY, 
    [0, 100], 
    [100, 100]
  );
  
  // Change to dark grey
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(75, 85, 99, 1)", "rgba(75, 85, 99, 1)"] // dark grey
  );

  // Logo always visible when header shows
  const logoOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, 1]
  );

  // Animation variants for smooth drop-down
  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 1,
        duration: 0.6,
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const
      }
    }
  };

  const mobileHeaderVariants = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 25,
        duration: 0.5,
      }
    },
    exit: {
      y: -80,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showHeader && (
        <>
          {/* Mobile Header - Shows when scrolled past hero */}
          <motion.header 
            className="lg:hidden fixed top-0 left-0 right-0 z-40 px-4 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
            variants={mobileHeaderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between w-full h-16">
              {/* Logo on the left */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/permalogo.png"
                  alt="Permaguanacaste Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              
              {/* Mobile menu button */}
              <MobileSidebar />
            </div>
          </motion.header>

          {/* Desktop Header - Shows when scrolled past hero */}
          <motion.header 
            className="hidden lg:block fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 backdrop-blur-md border-b border-white/10 shadow-lg"
            style={{
              background: headerBackground,
              height: headerHeight,
            }}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between w-full h-full">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <motion.div 
                    style={{ opacity: logoOpacity }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <Image
                      src="/images/permalogo.png"
                      alt="Permaguanacaste Logo"
                      width={220}
                      height={75}
                      className="h-16 w-auto lg:h-20 transition-all duration-500"
                    />
                  </motion.div>
                </Link>
              </div>
              
              {/* Navigation buttons - Desktop Only */}
              <motion.div 
                className="hidden lg:flex items-baseline space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
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
              </motion.div>
            </div>
          </motion.header>
        </>
      )}
    </AnimatePresence>
  );
};

export default Header;