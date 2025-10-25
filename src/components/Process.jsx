import React from 'react';
import { Brain, Users, FileText, Palette, Share2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Brain,
    title: "AI-Powered SEO Research",
    description: "We tap advanced AI agents to conduct comprehensive SEO research, identifying optimal keyword targeting and competitive differentiators.",
    color: "acadia-coral"
  },
  {
    number: "02",
    icon: Users,
    title: "Expert Discovery",
    description: "Drawing on 25 years of investment management and FinTech experience, we build a deep understanding of your business, your target audience and their workflows, and the gaps your product fills.",
    color: "acadia-gold"
  },
  {
    number: "03",
    icon: FileText,
    title: "Targeted Content Creation",
    description: "We create content that resonates with your audience, understanding nuanced customer journeys, the critical touch-points, and the complexities of the decision-making processes.",
    color: "acadia-teal"
  },
  {
    number: "04",
    icon: Palette,
    title: "Human Design & Refinement",
    description: "Our team ensures every piece is beautiful and perfectly aligned with your brand voice and strategic objectives.",
    color: "acadia-coral"
  },
  {
    number: "05",
    icon: Share2,
    title: "Multi-Channel Distribution",
    description: "Website blogs, whitepapers, social media, email campaigns, and video content—we maximize your reach across every relevant channel to grow your brand at record speed.",
    color: "acadia-gold"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-acadia-navy mb-6">
            Our 5-Step <span className="gradient-text">Growth Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that combines AI precision with human expertise to engineer measurable growth.
          </p>
        </div>
        
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-5">
            <img 
              src="/img/acadia-process-3.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ${
                      step.color === 'acadia-coral' ? 'bg-gradient-to-br from-acadia-coral to-acadia-navy' :
                      step.color === 'acadia-gold' ? 'bg-gradient-to-br from-acadia-gold to-acadia-navy' :
                      'bg-gradient-to-br from-acadia-teal to-acadia-navy'
                    }`}>
                      <step.icon className="w-16 h-16 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`text-6xl font-bold opacity-20 mb-4 ${
                      step.color === 'acadia-coral' ? 'text-acadia-coral' :
                      step.color === 'acadia-gold' ? 'text-acadia-gold' :
                      'text-acadia-teal'
                    }`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-acadia-navy mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
