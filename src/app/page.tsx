import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import About from '../components/About';
import Services from '../components/ProfessionalServices';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* White background wrapper for all content after hero */}
      <div className="bg-white relative z-10">
        <About />
        <Services />
        <ContactForm />
      </div>
    </main>
  );
}
