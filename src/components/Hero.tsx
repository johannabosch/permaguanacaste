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
      
      // Calculate text movement - starts at 320px and moves up with scroll
      const maxOffset = 320; // Starting position
      const scrollThreshold = window.innerHeight * 2.3; // Slightly reduced threshold
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
        window.scrollTo(0, scrollThreshold);
      }
    };

    // Prevent scroll momentum on mobile
    const preventScrollBounce = (e: TouchEvent) => {
      if (!textAnimationComplete && window.scrollY >= window.innerHeight * 2.3) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchmove', preventScrollBounce, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchmove', preventScrollBounce);
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
    <section ref={heroRef} className="h-[320vh] lg:h-[180vh] w-full relative">
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
        className="absolute inset-0 flex flex-col items-start justify-start pl-4 lg:pl-8 pt-16"
        style={{
          marginTop: isClient && window.innerWidth < 1024 ? `${textOffset}px` : '0px',
          transition: textAnimationComplete ? 'none' : 'margin-top 0.1s ease-out'
        }}
      >
        <div className="mb-2 w-full max-w-none lg:max-w-6xl flex justify-center">
          <div 
            className={`w-16 h-16 lg:w-16 lg:h-16 relative transition-transform duration-300 ease-in-out ${
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
        <div className="w-full max-w-none lg:max-w-6xl">
          <div className="max-w-md lg:max-w-2xl mx-auto">
            <Image
              src="/images/hero-perma-mobile.png"
              alt="Permaguanacaste"
              width={1500}
              height={375}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        
        {/* Description Text with extra spacing */}
        <div className="w-full max-w-none lg:max-w-6xl mt-4 mb-[32rem] lg:mb-96 space-y-12 px-8 lg:px-16">
          <p className="text-white text-3xl lg:text-5xl font-luxury leading-relaxed">
            We are landscape and permaculture experts rooted in the wild heart of the rainforest.
          </p>
          
          <div className="space-y-2">
            <p className="text-white text-xl lg:text-4xl font-luxury leading-relaxed">
              Guided by nature's rhythms—like the timeless flow of a Guanacaste waterfall—we nurture regenerative landscapes, crafting ecosystems that breathe, grow, and sustain over generations.


            </p>
          </div>
          
          
          <div>
            <p className="text-white text-xl lg:text-3xl font-luxury leading-relaxed text-left lg:text-justify">
              <span className="font-bold">We guide landowners in transforming their properties into vibrant, self-sustaining ecosystems.</span> Whether you're stewarding a homestead, vacation retreat, or rewilding project, we help shape spaces that are not only beautiful, but ecologically resilient and deeply nourishing.
            </p>
          </div>
          
          <div>
            <p className="text-white text-xl lg:text-3xl font-luxury leading-relaxed text-left lg:text-justify">
              Our approach blends classic permaculture principles, like water harvesting, companion planting, and soil regeneration, with the grounded, place-based knowledge of Guanacaste's people, who have lived in harmony with this land for centuries.
            </p>
          </div>
          
          <div>
            <p className="text-white text-xl lg:text-3xl font-luxury leading-relaxed text-left lg:text-justify">
              We don't believe in one-size-fits-all templates. Instead, we listen: to your needs, to the microclimate, to the rhythms of the seasons. The result is a site-specific plan that evolves organically over time—slow, intentional, and rooted in abundance.
            </p>
          </div>
          

        </div>
      </div>
      
      {/* Scroll indicator - only show when text animation is complete */}
      {textAnimationComplete && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero; 