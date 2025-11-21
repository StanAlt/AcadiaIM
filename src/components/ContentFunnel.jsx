import React, { useState } from 'react';
import { Target, Users, TrendingUp, Search, Mail, Share2, FileText, Download, BarChart3, Bell, CheckCircle, Award, Eye } from 'lucide-react';

const funnelStages = [
  {
    id: 'attract',
    title: 'Attract',
    icon: Target,
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/20',
    goal: 'Get Traffic to Your Website',
    description: 'Cast a wide net with strategic content that captures attention and drives qualified traffic to your digital presence.',
    tools: [
      { name: 'SEO Blog Posts', icon: Search },
      { name: 'Email Campaigns', icon: Mail },
      { name: 'Social Media', icon: Share2 }
    ],
    metrics: ['Organic Traffic', 'Social Reach', 'Email Opens']
  },
  {
    id: 'engage',
    title: 'Engage',
    icon: Users,
    gradient: 'from-acadia-coral to-orange-500',
    bgGlow: 'bg-acadia-coral/20',
    goal: 'Nurture Leads & Convert Visitors to MQLs',
    description: 'Build trust and demonstrate expertise with valuable content that keeps your audience engaged and moving down the funnel.',
    tools: [
      { name: 'Whitepapers', icon: FileText },
      { name: 'Premium Downloads', icon: Download },
      { name: 'Interactive Dashboards', icon: BarChart3 },
      { name: 'Drip Campaigns', icon: Bell }
    ],
    metrics: ['Lead Quality', 'Time on Site', 'Content Downloads']
  },
  {
    id: 'convert',
    title: 'Convert',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
    bgGlow: 'bg-green-500/20',
    goal: 'Convert MQLs to Paying Clients',
    description: 'Close the deal with proof-driven content that removes objections and demonstrates clear ROI for decision-makers.',
    tools: [
      { name: 'Proof of Value Assets', icon: CheckCircle },
      { name: 'Case Studies', icon: Award },
      { name: 'Testimonials', icon: Users },
      { name: 'Demos & Trials', icon: Eye }
    ],
    metrics: ['Conversion Rate', 'Sales Velocity', 'Deal Size']
  }
];

export default function ContentFunnel() {
  const [hoveredStage, setHoveredStage] = useState(null);

  return (
    <section className="section-frame relative py-24 bg-gradient-to-br from-acadia-navy via-slate-900 to-acadia-navy overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-acadia-coral rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-acadia-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-acadia-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="section-title text-white mb-8">
            The Content <span className="gradient-text">Funnel</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic content at every stage of the buyer's journey—from first touch to closed deal
          </p>
        </div>

        {/* Funnel Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Interactive Stages */}
          <div className="space-y-6">
            {funnelStages.map((stage, index) => {
              const Icon = stage.icon;
              const isHovered = hoveredStage === stage.id;
              
              return (
                <div
                  key={stage.id}
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isHovered ? 'scale-105' : hoveredStage ? 'scale-95 opacity-50' : 'scale-100'
                  }`}
                  style={{ 
                    transitionDelay: hoveredStage ? '0ms' : `${index * 100}ms`,
                  }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${stage.bgGlow} rounded-2xl blur-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-gradient-to-r ${stage.gradient} p-[2px] rounded-2xl transition-all duration-500`}>
                    <div className="bg-slate-900 rounded-2xl p-8 h-full backdrop-blur-sm">
                      <div className="flex items-center gap-6">
                        {/* Icon Circle */}
                        <div className={`relative flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${stage.gradient} flex items-center justify-center transition-transform duration-500 ${
                          isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                        }`}>
                          <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                        </div>
                        
                        {/* Title & Number */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-5xl font-black text-white/20">0{index + 1}</span>
                            <h3 className="text-3xl font-bold text-white">{stage.title}</h3>
                          </div>
                          <p className="text-gray-300 font-medium">{stage.goal}</p>
                        </div>

                        {/* Hover Indicator */}
                        <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-br ${stage.gradient} transition-transform duration-500 ${
                          isHovered ? 'scale-150' : 'scale-100'
                        }`}></div>
                      </div>
                      
                      {/* Expanded Metrics - Show on hover */}
                      <div className={`mt-6 transition-all duration-500 overflow-hidden ${
                        isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="flex gap-3 flex-wrap">
                          {stage.metrics.map((metric, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-white/20"
                              style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < funnelStages.length - 1 && (
                    <div className="absolute left-10 top-full h-6 w-0.5 bg-gradient-to-b from-white/50 to-transparent mx-auto transform translate-y-0"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side - Details Panel */}
          <div className="relative min-h-[600px]">
            <div className="sticky top-24">
              {/* Default State */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredStage ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-acadia-coral to-acadia-gold flex items-center justify-center mb-12 animate-pulse-slow">
                    <TrendingUp className="w-12 h-12 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Three Stages in Your Funnel</h3>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-md">
                    Use SEO and thought leadership to get visitors. Nurture them with valuable content and drive them down the funnel.
                  </p>
                </div>
              </div>

              {/* Stage Details */}
              {funnelStages.map((stage) => {
                const isActive = hoveredStage === stage.id;
                
                return (
                  <div
                    key={stage.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3 pointer-events-none'
                    }`}
                  >
                    <div className={`bg-gradient-to-br ${stage.gradient} p-[2px] rounded-3xl h-full`}>
                      <div className="bg-slate-900 rounded-3xl p-12 h-full backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center`}>
                            {React.createElement(stage.icon, { className: "w-8 h-8 text-white", strokeWidth: 2 })}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-1">{stage.title}</h3>
                            <p className={`text-sm font-semibold bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent`}>
                              {stage.goal}
                            </p>
                          </div>
                        </div>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                          {stage.description}
                        </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <div className="w-1.5 h-6 bg-gradient-to-b from-acadia-coral to-acadia-gold rounded-full"></div>
                              Tools & Tactics
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              {stage.tools.map((tool, idx) => {
                                const ToolIcon = tool.icon;
                                return (
                                  <div 
                                    key={idx}
                                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                  >
                                    <ToolIcon className="w-5 h-5 text-acadia-gold flex-shrink-0" strokeWidth={2} />
                                    <span className="text-white font-medium text-sm">{tool.name}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <div className="w-1.5 h-6 bg-gradient-to-b from-acadia-gold to-acadia-coral rounded-full"></div>
                              Key Metrics
                            </h4>
                            <div className="flex gap-3 flex-wrap">
                              {stage.metrics.map((metric, idx) => (
                                <span 
                                  key={idx}
                                  className={`px-4 py-2 bg-gradient-to-r ${stage.gradient} text-white rounded-lg font-semibold text-sm hover:scale-105 transition-transform`}
                                  style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-white mb-6">
              Ready to build a content funnel that converts?
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center">
              Let's Build Your Funnel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
