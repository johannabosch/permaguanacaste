import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import AboutServices from '../components/AboutServices';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Content sections */}
      <AboutServices />
      <ContactForm />
      <Footer />
    </main>
  );
}
