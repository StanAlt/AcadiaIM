import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you write content with AI?",
    answer: "No. I write content personally but I let AI inform me on the right keywords to hit, the right length and structure of the content. This ensures authentic, high-quality content with data-driven optimization."
  },
  {
    question: "What are the costs?",
    answer: "The costs range from $7,500 - $15,000 a month depending on the level of service, content cadence, and personal involvement you need. We'll work together to find the right package for your business goals."
  },
  {
    question: "What other services do you offer?",
    answer: "I do data analysis, data storytelling, competitive analysis, marketing consulting, design, web development, and CRM management. Each service is tailored to support your growth strategy."
  },
  {
    question: "Do you work alone?",
    answer: "No, I rely on AI agents as well as a small tested and trusted team of designers, SEO specialists, and web developers. I write the copy myself to ensure your brand voice stays authentic and consistent."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="section-frame py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-acadia-navy mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with Acadia
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-acadia-coral"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-bold text-acadia-navy group-hover:text-acadia-coral transition-colors pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-acadia-coral flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="h-px bg-gradient-to-r from-acadia-coral to-acadia-gold mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Let's talk about your growth strategy.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
