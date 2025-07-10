"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

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

  return (
    <section 
      id="about"
      ref={containerRef} 
      className="relative pt-0 pb-20 lg:pt-0 lg:pb-32 bg-white overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-green-200/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-green-300/8 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container mt-20 mx-auto px-4 lg:px-8">
        
        {/* Background Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none mt-10 mb-10"
        >
          <motion.div
            custom={4}
            variants={fadeInUp}
            className="relative">
            <Image
              src="/images/map.png"
              alt="Guanacaste Location Map"
              width={300}
              height={350}
              className="w-auto h-auto max-w-[600px] max-h-[450px] object-contain"
              priority={true}
            />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center relative z-10">
          
          {/* Text Content - Now Full Width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 max-w-4xl mx-auto text-center"
          >
            {/* Connecting tagline */}
            <motion.div
              custom={0}
              variants={fadeInUp}
              className="flex items-center justify-center space-x-3">
            <div className="flex flex-col items-center">            
              <p className="text-black text-center text-3xl mt-[80] lg:mt-[40px] lg:text-5xl font-luxury font-black mb-[-10] lg:max-w-3xl">  
              Your Vision, Our Expertise </p>

              <div className=" lg:block w-full h-px bg-black mb-5 mt-5"></div>
            </div>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeInUp}
              className="text-2xl lg:text-2xl text-black leading-relaxed font-luxury">
              We blend classic permaculture principles, like water harvesting, companion planting, and soil regeneration, with the grounded, place-based knowledge of Guanacaste's people, who have lived in harmony with this land for centuries.
              </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About; 
