"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/perma-logo.png"
            alt="Permaguanacaste Logo"
            width={180}
            height={60}
            className="h-22 w-auto"
          />
        </Link>
        
        {/* Navigation buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/about" className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest">
            ABOUT
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest flex items-center">
              SERVICES
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
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
          
          <Link href="/learn" className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest">
            LEARN
          </Link>
          <Link href="/projects" className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest">
            PROJECTS
          </Link>
          <Link 
            href="/contact" 
            className="bg-transparent border border-white text-white hover:bg-white hover:text-green-800 px-3 pb-2 pt--1 h-10 rounded-full transition-colors font-maname tracking-widest flex items-center justify-center"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white/95 backdrop-blur-md rounded-xl border border-white/20 w-56 font-maname">
              <li><Link href="/about" className="uppercase tracking-wide">ABOUT</Link></li>
              <li>
                <details>
                  <summary className="uppercase tracking-wide">SERVICES</summary>
                  <ul className="p-2 bg-white/90 rounded-lg">
                    <li><Link href="/services/food-systems" className="uppercase tracking-wide text-xs">FOOD SYSTEMS</Link></li>
                    <li><Link href="/services/soil-health" className="uppercase tracking-wide text-xs">SOIL HEALTH</Link></li>
                    <li><Link href="/services/house-design" className="uppercase tracking-wide text-xs">HOUSE DESIGN</Link></li>
                    <li><Link href="/services/aquaculture" className="uppercase tracking-wide text-xs">AQUACULTURE</Link></li>
                    <li><Link href="/services/pond-swimming-pool-design" className="uppercase tracking-wide text-xs">POND & SWIMMING POOL DESIGN</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href="/learn" className="uppercase tracking-wide">LEARN</Link></li>
              <li><Link href="/projects" className="uppercase tracking-wide">PROJECTS</Link></li>
              <li><Link href="/contact" className="btn btn-primary btn-sm mt-2 uppercase tracking-wide">CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 