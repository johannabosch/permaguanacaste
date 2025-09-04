'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Services from '../components/Services';
import OurStory from '../components/OurStory';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import LanguageSelection from '../components/LanguageSelection';

export default function Home() {
  const { isLanguageSelected } = useLanguage();

  // Show language selection page if no language has been selected
  if (!isLanguageSelected) {
    return <LanguageSelection />;
  }

  // Show main content if language has been selected
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Content sections */}
      <Intro />
      <Projects />
      <Services />
      <OurStory />
      <ContactForm />
      <Footer />
    </main>
  );
}
