import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/img/Acadia-Logo.png" 
              alt="Acadia" 
              className="h-12 transition-all duration-300"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#process" className={`font-medium transition-colors ${
              isScrolled ? 'text-acadia-navy hover:text-acadia-coral' : 'text-white hover:text-acadia-gold'
            }`}>
              Our Process
            </a>
            <a href="#services" className={`font-medium transition-colors ${
              isScrolled ? 'text-acadia-navy hover:text-acadia-coral' : 'text-white hover:text-acadia-gold'
            }`}>
              Services
            </a>
            <a href="#about" className={`font-medium transition-colors ${
              isScrolled ? 'text-acadia-navy hover:text-acadia-coral' : 'text-white hover:text-acadia-gold'
            }`}>
              About
            </a>
            <a href="#contact" className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              isScrolled 
                ? 'bg-acadia-coral text-white hover:bg-opacity-90' 
                : 'bg-white text-acadia-navy hover:bg-opacity-90'
            }`}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
