'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section ref={heroRef} className="h-[120vh] md:h-[140vh] lg:h-[120vh] w-full relative overflow-x-hidden">
      {/* Image Background - Only for Hero section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/food-systems.png"
          alt="Food Systems Background"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
        
        {/* Black fade gradient overlay from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 pointer-events-none"></div>
      </div>

      {/* Centered Logo and Content - Static positioning */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 lg:px-8 pt-100 md:pt-28 lg:pt-24 w-full overflow-x-hidden">
        {/* Centered Permaguanacaste Logo */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-8 w-full"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/images/perma-logo.png"
            alt="Permaguanacaste Logo"
            width={400}
            height={400}
            className="w-50 h-50 lg:w-80 lg:h-80 object-contain drop-shadow-2xl max-w-full"
            priority
          />
        </motion.div>

        {/* Description Text with extra spacing */}
        <motion.div 
          className="w-full max-w-none lg:max-w-6xl mt-0 mb-[8rem] lg:mb-[10rem] px-4 md:px-8 lg:px-24"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-8 w-full">
            <motion.div 
              className="flex flex-col items-center text-center w-full"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >            
              <p className="text-white text-center text-2xl lg:text-5xl font-luxury mb-4 lg:max-w-3xl w-full max-w-full">  
              Where water shapes the land, <br></br> we build systems that thrive. </p>

              <motion.div 
                className="w-full max-w-sm md:max-w-md lg:max-w-full h-px bg-[#dbd2ce] mb-5 mt-5"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              ></motion.div>

              <motion.p 
                className="text-white text-xl lg:text-3xl font-luxury mt-0 text-center w-full max-w-[70vw]"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              >
                <span className="italic">
                  Permaculture design and guidance, and the tools to bring your land to life.
                </span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;