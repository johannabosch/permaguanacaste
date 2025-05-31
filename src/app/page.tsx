import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
    </main>
  );
}
