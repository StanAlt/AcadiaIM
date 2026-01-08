import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const [yearsCount, setYearsCount] = useState(5);
  const [stepsCount, setStepsCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate years counter from 5 to 25
    const yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        if (prev >= 25) {
          clearInterval(yearsInterval);
          return 25;
        }
        return prev + 1;
      });
    }, 50);

    // Animate steps counter from 1 to 5
    const stepsInterval = setInterval(() => {
      setStepsCount(prev => {
        if (prev >= 5) {
          clearInterval(stepsInterval);
          return 5;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(stepsInterval);
    };
  }, []);

  return (
    <section className="section-frame relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-acadia-navy via-acadia-teal to-acadia-navy">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/acadia-hero-composite.png" 
            alt="Acadia Lighthouse" 
            className="w-full h-full object-cover animate-subtle-zoom"
          />
        </div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-acadia-coral/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-acadia-gold/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-acadia-teal/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-acadia-navy/50 to-acadia-navy"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="space-y-8">
          <h1 className="section-title text-white leading-tight animate-slide-up">
            Engineer Growth with
            <span className="block mt-2">
              <span className="gradient-text">Content That </span>
              <span className="relative inline-block">
                <span className="gradient-text">Resonates</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-acadia-coral to-acadia-gold animate-underline-expand"></span>
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            We combine 25 years of FinTech & Investment Management expertise with modern marketing strategies to build thought leadership that drives measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up animation-delay-400">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Book a Growth Audit Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#process" className="btn-secondary group">
              See How We Work
            </a>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Animated Years Counter */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-acadia-coral transition-all duration-500 hover:scale-105 animate-scale-in animation-delay-600 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-acadia-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-acadia-coral mb-2 tabular-nums">
                  {yearsCount}+
                </div>
                <div className="text-white font-medium">Years Experience</div>
              </div>
            </div>
            
            {/* Animated Steps Counter */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-acadia-gold transition-all duration-500 hover:scale-105 animate-scale-in animation-delay-800 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-acadia-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-acadia-gold mb-2 tabular-nums">
                  {stepsCount}-Step
                </div>
                <div className="text-white font-medium">Growth Process</div>
              </div>
            </div>
            
            {/* Multi-Channel with Striking Animation */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-acadia-coral transition-all duration-500 hover:scale-105 animate-scale-in animation-delay-1000 group overflow-hidden">
              {/* Animated lightning bolt effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-full animate-lightning-pulse">
                  <Zap className="absolute top-2 right-2 w-6 h-6 text-acadia-coral animate-spark" />
                  <Zap className="absolute bottom-2 left-2 w-4 h-4 text-acadia-gold animate-spark-delayed" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-acadia-coral/30 via-acadia-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-acadia-coral mb-2 group-hover:animate-pulse-glow">
                  Multi-Channel
                </div>
                <div className="text-white font-medium">Distribution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
