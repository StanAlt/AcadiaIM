import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Cameron Hight",
    title: "Founder & CEO",
    company: "AlphaTheory",
    image: "/img/Testimonials/testimonial-1.png",
    quote: "Stan brings more than marketing expertise. His depth of knowledge and experience in the investment management industry paired with a passion for data and analytics helps him create content that resonates with our customers. It has not only helped us generate hundreds of leads but also helped us rank highly on search engines and LLMs with the terms we care about most. For anyone in Fintech and looking to grow, I would highly recommend working with Stan and his team at Acadia."
  },
  {
    id: 2,
    name: "Benjamin Arnold",
    title: "Founder",
    company: "Meraki Global Advisors",
    image: "/img/Testimonials/testimonial-2.png",
    quote: "Working with Stan and his team at Acadia was great. We were able to secure the top spot in Google and achieved multiple LLM mentions for our most important keywords. He helped us build a world-class library of thought leadership that helped grow our brand."
  },
  {
    id: 3,
    name: "Charles Poliacof",
    title: "CEO",
    company: "Knoema",
    image: "/img/Testimonials/testimonial-3.png",
    quote: "I have worked with Stan for years before hiring his services at Knoema. Highly recommend Stan's company Acadia.im to anyone who needs to take their marketing to the next level."
  },
  {
    id: 4,
    name: "Qaisar Hasan",
    title: "Founder & CEO",
    company: "Maiden Century",
    image: "/img/Testimonials/testimonial-4.png",
    quote: "Stan was a great resource and valued partner to Maiden Century in its early years, helping firm up our reputation as a thought leader in the decision intelligence & alternative data vertical. His ability to boil complex narratives into more easily digestible nuggets was invaluable."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-frame py-24 bg-gradient-to-br from-acadia-navy via-acadia-teal to-acadia-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-acadia-coral rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-acadia-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-acadia-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See what FinTech founders and CEOs say about working with Acadia
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-acadia-coral/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={current.image}
                  alt={current.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isAnimating ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-acadia-navy/30 to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-acadia-coral" />
                </div>

                <div className={`transition-all duration-500 ${
                  isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}>
                  {/* Quote Text */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 relative z-10">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-acadia-coral to-acadia-gold rounded-full"></div>
                    <div>
                      <div className="text-2xl font-bold text-acadia-navy mb-1">
                        {current.name}
                      </div>
                      <div className="text-lg text-acadia-teal font-semibold">
                        {current.title}
                      </div>
                      <div className="text-md text-gray-600">
                        @ {current.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-white hover:bg-acadia-coral text-acadia-navy hover:text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-white hover:bg-acadia-coral text-acadia-navy hover:text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              disabled={isAnimating}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-acadia-coral shadow-lg shadow-acadia-coral/50'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
              } disabled:cursor-not-allowed`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-white/60 font-semibold">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
}
