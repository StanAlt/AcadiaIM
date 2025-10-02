import React from 'react';
import { Target, TrendingUp, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "B2B FinTech Expertise",
    description: "We understand complex sales cycles and create content that resonates with sophisticated financial decision-makers."
  },
  {
    icon: TrendingUp,
    title: "Optimal Keyword Targeting",
    description: "AI-powered research identifies the exact keywords and topics that will drive qualified traffic and conversions."
  },
  {
    icon: Award,
    title: "Competitive Differentiation",
    description: "We position your brand uniquely in the market, highlighting what makes you stand out from competitors."
  },
  {
    icon: Zap,
    title: "Measurable Results",
    description: "Data-driven approach ensures every campaign delivers trackable, meaningful business outcomes."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-acadia-navy mb-6">
            Why Choose <span className="gradient-text">Acadia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique approach combines cutting-edge AI technology with deep FinTech industry knowledge to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-acadia-coral transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-acadia-coral to-acadia-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-acadia-navy mb-3 group-hover:text-acadia-coral transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service Channels */}
        <div className="mt-20 bg-gradient-to-br from-acadia-navy to-acadia-teal rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Content Distribution Channels</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">📝</div>
              <div className="font-semibold">Blog Posts</div>
            </div>
            <div>
              <div className="text-4xl mb-2">📄</div>
              <div className="font-semibold">Whitepapers</div>
            </div>
            <div>
              <div className="text-4xl mb-2">📱</div>
              <div className="font-semibold">Social Media</div>
            </div>
            <div>
              <div className="text-4xl mb-2">📧</div>
              <div className="font-semibold">Email</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🎥</div>
              <div className="font-semibold">Video</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
