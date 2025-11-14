import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-frame relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-acadia-navy via-acadia-teal to-acadia-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/img/acadia-hero-composite.png" 
          alt="Acadia Lighthouse" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-acadia-navy/50 to-acadia-navy"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="section-title text-white leading-tight animate-slide-up">
            Engineer Growth with
            <span className="block gradient-text mt-2 animate-pulse-slow">Content That Resonates</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            We combine deep AI research with 25 years of FinTech expertise to create content that drives measurable growth in complex B2B sales cycles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up animation-delay-400">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Start Your Growth Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#process" className="btn-secondary group">
              See How We Work
            </a>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-acadia-coral transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-600">
              <div className="text-4xl font-bold text-acadia-coral mb-2">25+</div>
              <div className="text-white font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-acadia-gold transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-700">
              <div className="text-4xl font-bold text-acadia-gold mb-2">5-Step</div>
              <div className="text-white font-medium">Growth Process</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-acadia-coral transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-800">
              <div className="text-4xl font-bold text-acadia-coral mb-2">Multi-Channel</div>
              <div className="text-white font-medium">Distribution</div>
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
