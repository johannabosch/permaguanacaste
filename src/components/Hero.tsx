'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [textOffset, setTextOffset] = useState(320); // Start at 320px (equivalent to mt-80)
  const [isClient, setIsClient] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  const rotatingImages = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png'
  ];

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded');
        video.play().catch(console.error);
      });

      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
      });
    }
  }, []);

  // Handle scroll effect with controlled page scrolling
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate text movement - starts at 320px and moves up with scroll
      const maxOffset = 320; // Starting position
      
      // Get actual hero element height instead of using fixed calculations
      const heroElement = heroRef.current;
      if (!heroElement) return;
      
      const heroHeight = heroElement.offsetHeight;
      
      // Calculate a more content-aware threshold based on screen size
      const screenWidth = window.innerWidth;
      let scrollThreshold;
      
      if (screenWidth < 768) {
        // Mobile: 80% of hero height
        scrollThreshold = heroHeight * 0.8;
      } else if (screenWidth < 1024) {
        // Medium screens: 90% of hero height (more content to scroll through)
        scrollThreshold = heroHeight * 0.9;
      } else {
        // Large screens: 95% of hero height (even more content)
        scrollThreshold = heroHeight * 0.95;
      }
      
      const scrollProgress = Math.min(currentScrollY / scrollThreshold, 1);
      const newOffset = maxOffset * (1 - scrollProgress);
      
      setScrollY(currentScrollY);
      setTextOffset(newOffset);
      
      // Check if text animation is complete
      if (scrollProgress >= 1 && !textAnimationComplete) {
        setTextAnimationComplete(true);
      }
      
      // If text animation isn't complete, prevent scrolling past hero
      if (!textAnimationComplete && currentScrollY > scrollThreshold) {
        window.scrollTo({ top: scrollThreshold, behavior: 'auto' });
      }
    };

    // Prevent scroll momentum on mobile
    const preventScrollBounce = (e: TouchEvent) => {
      const heroElement = heroRef.current;
      if (!heroElement) return;
      
      const heroHeight = heroElement.offsetHeight;
      const screenWidth = window.innerWidth;
      let scrollThreshold;
      
      if (screenWidth < 768) {
        scrollThreshold = heroHeight * 0.8;
      } else if (screenWidth < 1024) {
        scrollThreshold = heroHeight * 0.9;
      } else {
        scrollThreshold = heroHeight * 0.95;
      }
      
      if (!textAnimationComplete && window.scrollY >= scrollThreshold) {
        e.preventDefault();
      }
    };

    // Prevent wheel scrolling past hero
    const preventWheelScroll = (e: WheelEvent) => {
      const heroElement = heroRef.current;
      if (!heroElement) return;
      
      const heroHeight = heroElement.offsetHeight;
      const screenWidth = window.innerWidth;
      let scrollThreshold;
      
      if (screenWidth < 768) {
        scrollThreshold = heroHeight * 0.8;
      } else if (screenWidth < 1024) {
        scrollThreshold = heroHeight * 0.9;
      } else {
        scrollThreshold = heroHeight * 0.95;
      }
      
      if (!textAnimationComplete && window.scrollY >= scrollThreshold && e.deltaY > 0) {
        e.preventDefault();
      }
    };

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('touchmove', preventScrollBounce, { passive: false });
      document.addEventListener('wheel', preventWheelScroll, { passive: false });
      window.addEventListener('resize', handleScroll); // Recalculate on resize
      
      // Initial call to set correct state
      handleScroll();
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchmove', preventScrollBounce);
      document.removeEventListener('wheel', preventWheelScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isClient, textAnimationComplete]);

  // Handle rotating images animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % rotatingImages.length
        );
      }, 150);
      
      setTimeout(() => {
        setIsSpinning(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingImages.length]);

  return (
    <section ref={heroRef} className="h-[150vh] md:h-[200vh] lg:h-[160vh] w-full relative">
      {/* Video Background - Fixed */}
      <div className="fixed inset-0 w-full h-screen">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center lg:object-center"
          style={{ objectPosition: '60% center' }}
        >
          <source src="/images/waterfall.mp4" type="video/mp4" />
        </video>
        
        {/* Black fade gradient overlay from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Rotating Images and Hero Logo - with scroll effect */}
      <div 
        className="absolute inset-0 flex flex-col pl-2 lg:pl-8 pt-16"
        style={{
          marginTop: isClient ? `${textOffset}px` : '0px',
          transition: textAnimationComplete ? 'none' : 'margin-top 0.1s ease-out'
        }}
      >
        {/* Rotating images and PERMAGUANACASTE */}
        <div className="flex flex-col items-center justify-center ml-8 lg:ml-10 mt-[1vw]">

          <div className="w-full max-w-none lg:max-w-6xl flex justify-center lg:justify-center">
          <div 
            className={`w-16 h-16 lg:w-20 lg:h-20 relative transition-transform duration-300 ease-in-out ${
              isSpinning ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
            }`}
          
          >
            <Image
              src={rotatingImages[currentImageIndex]}
              alt={`Rotating image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>


            {/* Hero Logo */}
            <div className="lg:justify-center max-w-md lg:max-w-lg">
            <Image
              src="/images/hero-perma.png"
              alt="Permaguanacaste"
                  width={400}
                  height={200}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Description Text with extra spacing */}
        <div className="w-full max-w-none lg:max-w-6xl mt-0 mb-[40rem] lg:mb-[30rem] px-8 lg:px-24 lg:pr-24">
          <div className="space-y-12">
            <div className="flex flex-col items-left">            
              <p className="text-white text-left text-3xl mt-[80] lg:mt-[40px] lg:text-5xl font-luxury mb-[-10] lg:max-w-3xl">  
              Where water shapes the land, <br></br> we grow systems that thrive. </p>

              <div className=" lg:block w-full h-px bg-[#dbd2ce] mb-5 mt-5"></div>

              <p className="text-white text-xl lg:text-3xl font-luxury mt-0 text-left lg:text-justify">
                <span className="italic">
                  Design, guidance, and the tools to bring your land to life.
                </span>
              </p>
            </div>

            <div>
              <p className="text-white text-2xl text-left lg:max-w-4xl lg:text-4xl font-luxury  ">
              We are permaculture and landscape design specialists based in Guanacaste, Costa Rica.
              We support landowners in developing ecologically sound, self-sustaining systems—integrating traditional ecological knowledge with contemporary regenerative design principles to foster resilience, biodiversity, and long-term landscape health.</p>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Hero; 