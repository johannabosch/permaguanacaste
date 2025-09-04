"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
      ref={containerRef} 
      className="relative overflow-hidden bg-white"
    >
      <div className="relative z-10">
        {/* About Section */}
        <div>
          {/* Desktop Layout */}
          <div className="hidden lg:block relative min-h-[60vh] flex items-center justify-center">
            {/* Coffee Image - Left side */}
            <motion.div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/coffee.png"
                alt="Coffee fruits"
                width={600}
                height={400}
                className="max-w-[400px]"
              />
            </motion.div>

            {/* Center Text */}
            <div className="flex items-center justify-center min-h-[60vh] px-4 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center max-w-4xl z-20 relative"
              >
                {/* Description */}
                <motion.p
                  custom={2}
                  variants={fadeInUp}
                  className="text-2xl lg:text-2xl text-black leading-relaxed font-luxury max-w-2xl"
                >
                  {t.intro.description}
                </motion.p>
              </motion.div>
            </div>

            {/* Banana Image - Right side */}
            <motion.div
              className="absolute right-[-50] top-1/2 transform -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/banana.png"
                alt="banana tree"
                width={600}
                height={400}
                className="max-w-[500px] transform scale-x-[-1]"
              />
            </motion.div>
          </div>

          {/* Mobile Layout - Stacked vertically */}
          <div className="lg:hidden">
            {/* Coffee Image - Above and to the left */}
            <motion.div
              className="flex justify-start mt-8"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/coffee.png"
                alt="Coffee fruits"
                width={600}
                height={400}
                className="w-full max-w-[300px]"
              />
            </motion.div>

            {/* Text Content */}
            <div className="container px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Description */}
                <motion.p
                  custom={2}
                  variants={fadeInUp}
                  className="text-xl text-black leading-relaxed font-luxury mb-[-60]"
                >
                  {t.intro.description}
                </motion.p>
              </motion.div>
            </div>

            {/* Banana Image - Below paragraph, to the right */}
            <motion.div
              className="flex justify-end mr-[-40] mt-0"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/banana.png"
                alt="banana tree"
                width={600}
                height={400}
                className="w-full max-w-[300px] transform scale-x-[-1]"
              />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro; 