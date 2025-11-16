import React, { useState, useEffect, useRef } from 'react';
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
  const [activeSteps, setActiveSteps] = useState([]);
  const stepRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Calculate line progress based on active steps
  const lineProgress = activeSteps.length > 0 
    ? (activeSteps[activeSteps.length - 1] + 1) / steps.length * 100 
    : 0;

  return (
    <section id="process" className="section-frame py-24 bg-gray-50 bg-geometric-pattern overflow-hidden">
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
          
          {/* Animated Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 overflow-hidden">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-300 to-transparent opacity-30"></div>
            {/* Animated progress line */}
            <div 
              ref={lineRef}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-acadia-coral via-acadia-gold to-acadia-teal transition-all duration-1000 ease-out"
              style={{ height: `${lineProgress}%` }}
            >
              {/* Glowing dot at the end */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-acadia-gold rounded-full shadow-lg shadow-acadia-gold/50 animate-pulse"></div>
            </div>
          </div>
          
          {/* Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => {
              const isActive = activeSteps.includes(index);
              const isCompleted = activeSteps[activeSteps.length - 1] > index;
              
              return (
                <div 
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`group transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      {/* Glow effect for active step */}
                      {isActive && (
                        <div className={`absolute inset-0 rounded-full blur-2xl opacity-60 animate-pulse ${
                          step.color === 'acadia-coral' ? 'bg-acadia-coral' :
                          step.color === 'acadia-gold' ? 'bg-acadia-gold' :
                          'bg-acadia-teal'
                        }`}></div>
                      )}
                      
                      <div className={`relative w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 ${
                        isActive ? 'scale-110' : 'scale-100'
                      } ${
                        isCompleted ? 'ring-4 ring-green-400 ring-offset-4 ring-offset-gray-50' : ''
                      } ${
                        step.color === 'acadia-coral' ? 'bg-gradient-to-br from-acadia-coral to-acadia-navy' :
                        step.color === 'acadia-gold' ? 'bg-gradient-to-br from-acadia-gold to-acadia-navy' :
                        'bg-gradient-to-br from-acadia-teal to-acadia-navy'
                      }`}>
                        <step.icon 
                          className={`w-16 h-16 text-white transition-all duration-500 ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`} 
                          strokeWidth={2} 
                        />
                      </div>
                      
                      {/* Pulse rings for active step */}
                      {isActive && (
                        <>
                          <div className={`absolute inset-0 rounded-full border-4 animate-ping opacity-75 ${
                            step.color === 'acadia-coral' ? 'border-acadia-coral' :
                            step.color === 'acadia-gold' ? 'border-acadia-gold' :
                            'border-acadia-teal'
                          }`}></div>
                        </>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ${
                      isActive ? 'shadow-2xl -translate-y-1' : 'shadow-lg'
                    } ${
                      step.color === 'acadia-coral' && isActive ? 'ring-2 ring-acadia-coral/20' :
                      step.color === 'acadia-gold' && isActive ? 'ring-2 ring-acadia-gold/20' :
                      step.color === 'acadia-teal' && isActive ? 'ring-2 ring-acadia-teal/20' : ''
                    }`}>
                      <div className={`text-6xl font-bold mb-4 transition-all duration-500 ${
                        isActive ? 'opacity-40 scale-110' : 'opacity-20 scale-100'
                      } ${
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
