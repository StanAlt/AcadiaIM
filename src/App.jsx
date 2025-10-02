import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
