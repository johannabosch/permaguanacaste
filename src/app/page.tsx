import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Image from 'next/image';

// Bouncing scroll arrow component
function ScrollArrow() {
  return (
    <div className="flex justify-center py-8 relative z-10">
      <div className="animate-bounce">
        <Image
          src="/images/ARROW.png"
          alt="Scroll down arrow"
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
          />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* White background wrapper for all content after hero */}
      <div className="bg-white relative z-10 pt-32 lg:pt-20">
        <ScrollArrow />
        <WhatWeDo />
      </div>
    </main>
  );
}
