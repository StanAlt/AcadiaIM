import React, { useState } from 'react';
import { TrendingUp, Brain, BarChart3, Database, ArrowRight, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Google Sheets integration will be configured here
      const response = await fetch('https://script.google.com/macros/s/AKfycbxytxmiY96aZuxyUtSs9FIpyAp5nLB71k1lRSZUBcmQYLHrFG0QxJ_d33Idv4fAAAHB/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      setSubmitMessage('✓ Thanks for subscribing! Check your inbox on Monday mornings.');
      setName('');
      setEmail('');
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-acadia-navy via-acadia-navy to-gray-900 pt-20">
      {/* Header */}
      <header className="border-b border-acadia-coral/20 bg-acadia-navy/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                <span className="text-acadia-gold">Momentum</span> Weekly
              </h1>
              <p className="text-gray-300">by Acadia.im</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Issue #1</p>
              <p className="text-sm text-gray-400">November 18-23, 2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Subscription */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Weekly Pulse on Institutional FinTech Innovation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Welcome to Momentum Weekly, your essential briefing on the B2B fintech platforms transforming 
              institutional investing. We track the AI research tools, risk analytics platforms, alternative 
              data providers, and workflow automation solutions that hedge funds, asset managers, and investment 
              banks rely on to stay ahead.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-acadia-coral" />
                <span>AI Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-acadia-gold" />
                <span>Risk Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-acadia-coral" />
                <span>Alt Data</span>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-acadia-coral" />
              <h3 className="text-2xl font-bold text-acadia-navy">Subscribe</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Get Momentum Weekly delivered to your inbox every Monday morning. Stay ahead of the institutional fintech curve.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acadia-coral focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acadia-coral focus:border-transparent transition-all"
                  placeholder="you@company.com"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-acadia-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="w-5 h-5" />
              </button>
              
              {submitMessage && (
                <p className={`text-sm text-center ${submitMessage.includes('✓') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Published every Monday. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Issue Preview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Issue Highlights</h2>
          <p className="text-gray-400">November 18-23, 2025</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Research Platforms */}
          <div className="bg-white/5 backdrop-blur-sm border border-acadia-coral/20 rounded-xl p-6 hover:bg-white/10 transition-all">
            <Brain className="w-10 h-10 text-acadia-coral mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">AI Research & Intelligence</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• AlphaSense crosses $500M ARR milestone</li>
              <li>• Finster AI raises $15M for investment banking workflows</li>
              <li>• Hebbia expands to San Francisco, appoints new CTO</li>
            </ul>
          </div>

          {/* Wealth & Risk Analytics */}
          <div className="bg-white/5 backdrop-blur-sm border border-acadia-gold/20 rounded-xl p-6 hover:bg-white/10 transition-all">
            <BarChart3 className="w-10 h-10 text-acadia-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Wealth & Risk Analytics</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Addepar appoints first European C-suite executive</li>
              <li>• MSCI launches private credit risk model</li>
              <li>• $8T+ in assets aggregated on unified platforms</li>
            </ul>
          </div>

          {/* Alternative Data */}
          <div className="bg-white/5 backdrop-blur-sm border border-acadia-coral/20 rounded-xl p-6 hover:bg-white/10 transition-all">
            <Database className="w-10 h-10 text-acadia-coral mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Alternative Data & Intelligence</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Neudata: Alt data budgets rising, AI adoption doubles</li>
              <li>• JPMorgan secures paid data access from 95% of aggregators</li>
              <li>• Index data shaping portfolio construction strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-acadia-coral/10 to-acadia-gold/10 border border-acadia-coral/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-acadia-gold" />
            <h2 className="text-2xl font-bold text-white">Five Key Themes Shaping Institutional FinTech</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-acadia-coral">•</span> AI-Native Platforms
              </h4>
              <p className="text-sm mb-4">
                Purpose-built AI platforms (AlphaSense, Finster, Hebbia) replacing generic tools with 
                finance-specific workflows that handle MNPI and compress weeks of analysis into minutes.
              </p>

              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-acadia-gold">•</span> Workflow Automation
              </h4>
              <p className="text-sm mb-4">
                End-to-end automation replacing manual processes. Investment banks save 30-40 hours per deal; 
                PE firms save 20-30 hours on screening and diligence.
              </p>

              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-acadia-coral">•</span> Data Integration
              </h4>
              <p className="text-sm">
                Unified platforms combining structured data (FactSet, Preqin) with unstructured intelligence 
                (expert calls, documents) eliminate system toggling.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-acadia-gold">•</span> Alternative Data Growth
              </h4>
              <p className="text-sm mb-4">
                Budgets rising across hedge funds and asset managers as AI adoption doubles. Index data and 
                tracking datasets increasingly shape portfolio construction.
              </p>

              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-acadia-coral">•</span> Risk Analytics Innovation
              </h4>
              <p className="text-sm mb-4">
                Private credit risk models, portfolio risk management advances, and ESG analytics expansion 
                address institutional demand for transparency.
              </p>

              <div className="bg-white/5 p-4 rounded-lg border border-acadia-gold/20 mt-4">
                <p className="text-sm italic">
                  <strong className="text-white">By the Numbers:</strong> Alt data budgets ↑ • AI adoption: 2x YoY • 
                  $8T+ assets on unified platforms • 30-40 hours saved per deal • 92% accuracy on complex analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-acadia-coral to-acadia-gold rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Miss the Next Issue
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join institutional investors, analysts, and fintech leaders who start their week with Momentum Weekly. 
            Every Monday morning, delivered to your inbox.
          </p>
          <a 
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-white text-acadia-navy px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-acadia-coral/20 bg-acadia-navy/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                <span className="text-acadia-gold">Momentum</span> Weekly
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Your weekly briefing on B2B fintech platforms serving institutional investors. Every Monday morning, 
                we deliver insights on AI research tools, risk analytics, alternative data, and workflow automation.
              </p>
              <p className="text-xs text-gray-400">
                Crafted by <a href="https://acadia.im" className="text-acadia-coral hover:underline">Acadia.im</a> — 
                Engineering growth through AI-powered content strategy for B2B fintech.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">About Acadia.im</h4>
              <p className="text-sm text-gray-300 mb-3">
                With 15+ years of institutional finance experience—from hedge funds to building and selling 
                fintech company Novus—we understand the platforms that drive your competitive edge.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  <strong>Contact:</strong> <a href="mailto:hello@acadia.im" className="text-acadia-coral hover:underline">hello@acadia.im</a>
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Web:</strong> <a href="https://acadia.im" className="text-acadia-coral hover:underline">acadia.im</a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-acadia-coral/20 text-center">
            <p className="text-xs text-gray-400">
              © 2025 Acadia.im. All rights reserved. • Momentum Weekly is published every Monday morning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
