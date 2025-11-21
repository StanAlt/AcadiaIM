import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AcadiaLogo from './AcadiaLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

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
          <div className={`flex items-center transition-colors duration-300 ${
            isScrolled ? 'text-acadia-navy' : 'text-white'
          }`}>
            <AcadiaLogo className="h-12" />
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
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowResourcesDropdown(true)}
              onMouseLeave={() => setShowResourcesDropdown(false)}
            >
              <button 
                className={`font-medium transition-colors flex items-center gap-1 ${
                  isScrolled ? 'text-acadia-navy hover:text-acadia-coral' : 'text-white hover:text-acadia-gold'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${showResourcesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showResourcesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <a 
                    href="#blog"
                    className="block px-4 py-2 text-acadia-navy hover:bg-acadia-coral hover:text-white transition-colors"
                  >
                    📚 Blog
                  </a>
                  <a 
                    href="#growth-plan"
                    className="block px-4 py-2 text-acadia-navy hover:bg-acadia-coral hover:text-white transition-colors"
                  >
                    📊 Growth Apps
                  </a>
                  <a 
                    href="#podcast"
                    className="block px-4 py-2 text-gray-400 cursor-not-allowed"
                    onClick={(e) => e.preventDefault()}
                  >
                    🎙️ Podcast <span className="text-xs">(Soon)</span>
                  </a>
                </div>
              )}
            </div>
            
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
