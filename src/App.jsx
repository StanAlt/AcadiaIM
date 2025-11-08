import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Process from './components/Process';
import ContentFunnel from './components/ContentFunnel';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <ContentFunnel />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
