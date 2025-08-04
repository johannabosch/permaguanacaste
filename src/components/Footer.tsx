"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationItems } from '@/config/navigation';

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 lg:pt-16 pb-6 lg:pb-8 relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Company Info - Hidden on mobile, shown on larger screens */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="hidden lg:block lg:col-span-1"
          >

          </motion.div>

          {/* Contact Information - First on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
            className="order-1 md:order-2 lg:order-3 lg:col-span-1"
          >
            <h3 className="text-gray-900 font-luxury font-bold text-base lg:text-lg mb-4 lg:mb-6 tracking-widest">
              CONTACT
            </h3>
            <div className="space-y-2 lg:space-y-3">
              <a 
                href="tel:+50683021304"
                className="flex items-center text-gray-700 font-luxury text-sm tracking-wide hover:text-emerald-600 transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+506 8302 1304</span>
              </a>
              <a 
                href="mailto:permaguanacaste.com@gmail.com"
                className="flex items-center text-gray-700 font-luxury text-sm tracking-wide hover:text-emerald-600 transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="break-all">permaguanacaste@gmail.com</span>
              </a>
              <div className="flex items-start text-gray-700 font-luxury text-sm tracking-wide">
                <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Guanacaste Province<br/>Costa Rica</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUp}
            className="order-2 md:order-1 lg:order-2 lg:col-span-1"
          >
            <h3 className="text-gray-900 font-luxury font-bold text-base lg:text-lg mb-4 lg:mb-6 tracking-widest">
              NAVIGATION
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-700 font-luxury text-sm tracking-wide hover:text-emerald-600 transition-colors duration-300 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media - Spans full width on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeInUp}
            className="order-3 md:col-span-2 lg:col-span-1 lg:order-4"
          >
            <h3 className="text-gray-900 font-luxury font-bold text-base lg:text-lg mb-4 lg:mb-6 tracking-widest">
              FOLLOW US
            </h3>
            <div className="flex space-x-4 justify-start md:justify-start lg:justify-start">
              <motion.a 
                href="https://www.facebook.com/PermaGuanacasteCostaRica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/permaguanacaste/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://api.whatsapp.com/send?phone=50683021304&text=Hi%20Permaguanacaste%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20permaculture%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeInUp}
          className="border-t border-gray-300 pt-6 lg:pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          <p className="text-gray-600 font-luxury text-xs lg:text-sm tracking-wide text-center lg:text-left">
            © {new Date().getFullYear()} Permaguanacaste. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link 
              href="/privacy"
              className="text-gray-600 font-luxury text-xs lg:text-sm tracking-wide hover:text-emerald-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="text-gray-600 font-luxury text-xs lg:text-sm tracking-wide hover:text-emerald-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 