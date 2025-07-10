"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import About from './About';
import Services from './ProfessionalServices';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div>
      {/* New Intro Section */}
      <About />
      
      {/* Professional Services Section */}
      <Services />
      
      {/* Philosophy and other sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-luxury font-bold tracking-wide mb-6">
                Our Philosophy
              </h3>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed tracking-widest">
                We believe in working with nature, not against it. Our permaculture approach creates sustainable systems that benefit both people and the planet.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-luxury font-bold tracking-wide mb-6">
                Our Process
              </h3>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed mb-6">
                We begin with comprehensive site analysis, studying your land's topography, microclimates, 
                water patterns, and soil conditions. This foundation allows us to design systems that work 
                harmoniously with nature rather than against it.
              </p>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed">
                Through collaborative planning sessions, we integrate your vision with ecological principles, 
                creating detailed designs that maximize productivity while minimizing environmental impact. 
                Every element serves multiple functions, creating resilient and regenerative landscapes.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-luxury font-bold tracking-wide mb-6">
                Our Expertise
              </h3>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed mb-6">
                With years of experience in tropical permaculture design, we specialize in creating 
                food forests, water harvesting systems, natural building techniques, and integrated 
                aquaculture solutions perfectly suited to Costa Rica's unique climate.
              </p>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed">
                Our team combines traditional ecological knowledge with modern sustainable technologies, 
                ensuring your project benefits from both time-tested wisdom and innovative approaches 
                to regenerative land management.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-luxury font-bold tracking-wide mb-6">
                Our Impact
              </h3>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed mb-6">
                Every project we complete contributes to biodiversity restoration, carbon sequestration, 
                and community resilience. We measure success not just in beautiful landscapes, but in 
                thriving ecosystems that support both human and environmental wellbeing.
              </p>
              <p className="text-lg font-luxury text-gray-700 leading-relaxed">
                From small urban gardens to large-scale farm transformations, our designs create lasting 
                positive change that benefits current and future generations while honoring the natural 
                heritage of Guanacaste Province.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WhatWeDo; 