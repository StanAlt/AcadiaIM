import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/img/StanProfile (3).png" 
                alt="Stan - Founder of Acadia" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-acadia-coral to-acadia-gold opacity-20 rounded-2xl transform translate-x-4 translate-y-4"></div>
          </div>
          
          {/* Content Side */}
          <div>
            <h2 className="section-title text-acadia-navy mb-6">
              Led by <span className="gradient-text">25 Years</span> of Expertise
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Acadia is founded by <strong className="text-acadia-navy">Stan</strong>, bringing over 25 years of deep experience in investment management, data analysis, and FinTech innovation.
              </p>
              <p>
                This extensive background provides a unique advantage: we don't just understand content marketing—we understand the complex decision-making processes, long sales cycles, and sophisticated needs of B2B FinTech buyers.
              </p>
              <p>
                By combining this hard-earned expertise with cutting-edge AI technology, we create content strategies that truly resonate with your target audience and drive measurable business growth.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-acadia-coral">
              <h3 className="text-xl font-bold text-acadia-navy mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To engineer sustainable growth for FinTech companies by combining AI-powered insights with human expertise and strategic content creation.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
