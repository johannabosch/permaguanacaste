"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MobileSidebar from './MobileSidebar';
import { navigationItems } from '@/config/navigation';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isOverWhiteBackground, setIsOverWhiteBackground] = useState(false);
  const { t } = useLanguage();
  
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
  const headerHeight = useTransform(
    scrollY, 
    [0, 100], 
    [100, 100]
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
            className="lg:hidden fixed top-0 left-0 right-0 z-40 px-4 bg-transparent pt-6"
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
              
              {/* Right side with Mobile menu */}
              <div className="flex items-center">
                {/* Mobile menu button */}
                <MobileSidebar />
              </div>
            </div>
          </motion.header>

          {/* Desktop Header - Shows when scrolled past hero */}
          <motion.header 
            className="hidden lg:block fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 bg-transparent pt-15"
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
                      width={320}
                      height={120}
                      className="h-25 w-auto lg:h-35 transition-all duration-500"
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
                  if (item.key === 'contact') {
                    // Contact button (always visible)
                    return (
                      <motion.div 
                        key={`contact-${item.href}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                      >
                        <Link 
                          href={item.href} 
                          className="border px-4 py-2 rounded-full transition-all duration-300 ease-out font-luxury tracking-widest flex items-center justify-center min-h-[40px] text-sm lg:text-xs"
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
                          {t.navigation[item.key as keyof typeof t.navigation]}
                        </Link>
                      </motion.div>
                    );
                  } else {
                    // Regular navigation items (only visible when white background appears)
                    return (
                      <motion.div 
                        key={`nav-${item.href}`}
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
                          className="px-4 py-2 transition-all duration-300 ease-out font-luxury tracking-widest rounded-full text-sm lg:text-xs"
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
                          {t.navigation[item.key as keyof typeof t.navigation]}
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
      
      {/* Sticky WhatsApp Button - Only visible when header shows */}
      {showHeader && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://wa.me/50683021304?text=Hi%20Permaguanacaste%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20permaculture%20design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA59] rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:shadow-3xl group"
          >
            <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;