import React from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-acadia-navy via-acadia-teal to-acadia-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/img/acadia-process-5.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="section-title mb-6">
          Ready to Engineer <span className="text-acadia-gold">Your Growth?</span>
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Let's discuss how AI-powered content strategy can transform your B2B FinTech marketing and drive measurable results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:info@acadia.im" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-acadia-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            info@acadia.im
          </a>
          
          <a 
            href="https://www.linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-acadia-coral text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-acadia-gold font-bold mb-2">Step 1</div>
              <div className="text-sm">Initial consultation to understand your goals and challenges</div>
            </div>
            <div>
              <div className="text-acadia-gold font-bold mb-2">Step 2</div>
              <div className="text-sm">Comprehensive AI-powered research and strategy development</div>
            </div>
            <div>
              <div className="text-acadia-gold font-bold mb-2">Step 3</div>
              <div className="text-sm">Implementation and ongoing optimization for maximum impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
