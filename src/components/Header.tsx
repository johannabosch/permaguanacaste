"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MobileSidebar from './MobileSidebar';
import { navigationItems } from '@/config/navigation';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isOverWhiteBackground, setIsOverWhiteBackground] = useState(false);
  
  // Framer Motion scroll tracking
  const { scrollY } = useScroll();
  
  // Track scroll position to show/hide header and detect white background sections
  useEffect(() => {
    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      
      // Show header after scrolling down 50px
      setShowHeader(currentScrollY > 50);
      
      // Detect if we're over white background sections
      // The white background starts after the hero section
      // We need to get the hero height to determine when white sections begin
      const heroElement = document.querySelector('section'); // First section should be hero
      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        // Consider we're over white background when we've scrolled past most of the hero
        // and the header is positioned over white content
        const whiteBackgroundStart = heroHeight * 0.8; // Start detecting white background at 80% of hero height
        setIsOverWhiteBackground(currentScrollY > whiteBackgroundStart);
      }
    };

    window.addEventListener('scroll', updateHeaderVisibility);
    window.addEventListener('resize', updateHeaderVisibility); // Handle screen size changes
    
    // Initial call
    updateHeaderVisibility();
    
    return () => {
      window.removeEventListener('scroll', updateHeaderVisibility);
      window.removeEventListener('resize', updateHeaderVisibility);
    };
  }, []);
  
  // Transform scroll values to animation properties
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"]
  );
  
  const headerHeight = useTransform(
    scrollY, 
    [0, 100], 
    [100, 100]
  );
  
  // Dynamic text color based on background
  const getCurrentTextColor = () => {
    return isOverWhiteBackground ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
  };

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
            className="lg:hidden fixed top-5 left-0 right-0 z-40 px-4 bg-transparent"
            variants={mobileHeaderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between w-full h-16">
              {/* Logo on the left - bigger */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/permalogo.png"
                  alt="Permaguanacaste Logo"
                  width={240}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
              
              {/* Mobile menu button */}
              <MobileSidebar />
            </div>
          </motion.header>

          {/* Desktop Header - Shows when scrolled past hero */}
          <motion.header 
            className="hidden lg:block fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 bg-transparent"
            style={{
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
                      width={280}
                      height={95}
                      className="h-20 w-auto lg:h-24 transition-all duration-500"
                    />
                  </motion.div>
                </Link>
              </div>
              
              {/* Navigation buttons - Desktop Only */}
              <motion.div 
                className="hidden lg:flex items-center space-x-1 px-6 py-3 rounded-full transition-all duration-500 ease-out"
                style={{
                  backgroundColor: isOverWhiteBackground ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  backdropFilter: isOverWhiteBackground ? 'blur(8px)' : 'none',
                  boxShadow: isOverWhiteBackground ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none',
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {navigationItems.map((item) => {
                  if (item.label === 'CONTACT') {
                    // Contact button (always visible)
                    return (
                      <motion.div 
                        key={item.href}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                      >
                        <Link 
                          href={item.href} 
                          className="border px-4 py-2 rounded-full transition-all duration-300 ease-out font-luxury tracking-widest flex items-center justify-center min-h-[40px]"
                          style={{
                            backgroundColor: isOverWhiteBackground ? '#599559' : 'transparent',
                            borderColor: isOverWhiteBackground ? '#599559' : 'white',
                            color: 'white'
                          }}
                          onMouseEnter={(e) => {
                            if (isOverWhiteBackground) {
                              e.currentTarget.style.backgroundColor = '#4a7c4a';
                              e.currentTarget.style.borderColor = '#4a7c4a';
                            } else {
                              e.currentTarget.style.backgroundColor = 'white';
                              e.currentTarget.style.color = 'black';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isOverWhiteBackground) {
                              e.currentTarget.style.backgroundColor = '#599559';
                              e.currentTarget.style.borderColor = '#599559';
                              e.currentTarget.style.color = 'white';
                            } else {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'white';
                            }
                          }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  } else {
                    // Regular navigation items (only visible when white background appears)
                    return (
                      <motion.div 
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: isOverWhiteBackground ? 1 : 0,
                          x: isOverWhiteBackground ? 0 : -10
                        }}
                        transition={{ duration: 0.3, delay: isOverWhiteBackground ? 0.1 : 0 }}
                        style={{ 
                          display: isOverWhiteBackground ? 'block' : 'none'
                        }}
                      >
                        <Link 
                          href={item.href} 
                          className="px-4 py-2 transition-all duration-300 ease-out font-luxury tracking-widest rounded-full"
                          style={{
                            color: isOverWhiteBackground ? '#374151' : 'white',
                          }}
                          onMouseEnter={(e) => {
                            if (isOverWhiteBackground) {
                              e.currentTarget.style.color = '#599559';
                              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                            } else {
                              e.currentTarget.style.color = '#d1d5db';
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = isOverWhiteBackground ? '#374151' : 'white';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  }
                })}
              </motion.div>
            </div>
          </motion.header>
        </>
      )}
    </AnimatePresence>
  );
};

export default Header;