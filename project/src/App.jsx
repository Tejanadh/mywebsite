import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Gallery from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Pricing />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;