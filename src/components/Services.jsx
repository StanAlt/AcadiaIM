import React, { useState } from 'react';
import { Target, TrendingUp, Award, Zap, FileText, BookOpen, Share2, Mail, Video } from 'lucide-react';

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

const channels = [
  {
    icon: FileText,
    title: "Blog Posts",
    description: "SEO-optimized content that drives traffic and gets you mentioned in LLMs like ChatGPT",
    details: "We create SEO-focused content that gets your website more traffic and creates more ways for your prospects to find you. Our blog posts are optimized to be mentioned in large language models like ChatGPT, expanding your reach beyond traditional search.",
    color: "from-acadia-coral to-acadia-navy"
  },
  {
    icon: BookOpen,
    title: "Whitepapers",
    description: "Premium long-form content that creates MQLs and showcases your expertise",
    details: "Premium long-form content, when gated, creates marketing qualified leads (MQLs) and engages your visitors. We help them learn about your thought process and how you work with clients, establishing you as a trusted authority in your space.",
    color: "from-acadia-gold to-acadia-navy"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Build brand awareness and drive visitors through strategic LinkedIn posting",
    details: "Get more visitors and build powerful brand awareness through strategic social media content. We focus on LinkedIn posting to reach B2B FinTech decision-makers where they're most active and engaged.",
    color: "from-acadia-teal to-acadia-navy"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Engage prospects with relevant, value-add content and increase touchpoints",
    details: "Email helps engage your prospects with relevant, value-add content that keeps your brand top-of-mind. We create more touchpoints to interact with clients and prospects, nurturing relationships throughout the sales cycle.",
    color: "from-acadia-coral to-acadia-gold"
  },
  {
    icon: Video,
    title: "Video",
    description: "Showcase your product, testimonials, and speaking engagements",
    details: "Video content helps you showcase your product, present compelling testimonials, and make the most of your speaking engagements and podcast appearances. We turn your thought leadership into engaging visual content.",
    color: "from-acadia-gold to-acadia-teal"
  }
];

export default function Services() {
  const [hoveredChannel, setHoveredChannel] = useState(null);

  return (
    <section id="services" className="section-frame py-24 bg-white bg-geometric-pattern">
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
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-acadia-coral transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
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
        
        {/* Content Distribution Channels - Interactive */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-acadia-navy mb-4">
              Content Distribution <span className="gradient-text">Channels</span>
            </h3>
            <p className="text-lg text-gray-600">Complex B2B Sales require control of multiple touchpoints</p>
          </div>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {channels.map((channel, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredChannel(index)}
                onMouseLeave={() => setHoveredChannel(null)}
              >
                {/* Channel Card */}
                <div className={`relative bg-gradient-to-br ${channel.color} rounded-2xl p-8 text-white cursor-pointer transition-all duration-300 ${
                  hoveredChannel === index ? 'shadow-2xl -translate-y-1' : 'shadow-lg hover:shadow-xl'
                }`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      hoveredChannel === index ? 'scale-105 rotate-3' : ''
                    }`}>
                      <channel.icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="font-bold text-xl">{channel.title}</h4>
                    <p className="text-sm text-white/80 leading-relaxed">{channel.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Full-Width Detail Panel - Fixed Height Container */}
          <div className="relative min-h-[280px] mb-8">
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              hoveredChannel !== null 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
              {hoveredChannel !== null && (
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-acadia-gold p-8 md:p-12 h-full">
                  <div className="flex items-start gap-6 max-w-5xl mx-auto">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${channels[hoveredChannel].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      {React.createElement(channels[hoveredChannel].icon, { 
                        className: "w-8 h-8 text-white", 
                        strokeWidth: 2 
                      })}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-acadia-navy mb-4">
                        {channels[hoveredChannel].title}
                      </h4>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {channels[hoveredChannel].details}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
