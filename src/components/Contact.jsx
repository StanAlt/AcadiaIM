import React, { useState } from 'react';
import { Send, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    monthlyBudget: ''
  });

  const [budgetError, setBudgetError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.monthlyBudget === '<5000') {
      setBudgetError('For now, Acadia is best for teams with at least a $5k/month marketing budget.');
      return;
    }

    setBudgetError('');
    
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Create mailto link with form data
    const subject = `Growth Audit Call Request - ${formData.company}`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0AMonthly Marketing Budget: ${formData.monthlyBudget}%0D%0A%0D%0AContext:%0D%0A`;
    window.location.href = `mailto:stan@acadia.im?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    if (e.target.name === 'monthlyBudget') {
      setBudgetError('');
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-frame py-24 bg-gradient-to-br from-acadia-navy via-acadia-teal to-acadia-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/img/acadia-process-5.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            Book a <span className="text-acadia-gold">Growth Audit Call</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            If you're investing $5k+/month in marketing, I'll run a free SEO + competitive analysis and map quick GTM wins in a 30-minute call.
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-200">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acadia-gold focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="group">
                <label htmlFor="company" className="block text-sm font-semibold mb-2 text-gray-200">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acadia-gold focus:border-transparent transition-all"
                  placeholder="Acme FinTech"
                />
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-200">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acadia-gold focus:border-transparent transition-all"
                placeholder="john@acmefintech.com"
              />
            </div>

            <div className="group">
              <label htmlFor="monthlyBudget" className="block text-sm font-semibold mb-2 text-gray-200">
                Monthly Marketing Budget *
              </label>
              <select
                id="monthlyBudget"
                name="monthlyBudget"
                required
                value={formData.monthlyBudget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-acadia-gold focus:border-transparent transition-all"
              >
                <option value="" disabled className="bg-acadia-navy">Select a range</option>
                <option value="5000-10000" className="bg-acadia-navy">$5k–$10k</option>
                <option value="10000-25000" className="bg-acadia-navy">$10k–$25k</option>
                <option value="25000+" className="bg-acadia-navy">$25k+</option>
                <option value="<5000" className="bg-acadia-navy">Under $5k</option>
              </select>
              {budgetError && (
                <p className="mt-3 text-sm text-acadia-gold font-semibold">
                  {budgetError}
                </p>
              )}
              <p className="mt-3 text-sm text-gray-300">
                We reply within 1 business day. No spam.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-acadia-coral text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Request a Call
              </button>
              
              <a 
                href="https://www.linkedin.com/in/stanalt/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </form>
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
