import React from 'react';
import { Mic, ArrowRight, ExternalLink, Headphones } from 'lucide-react';

export default function MomentumPodcast() {
  return (
    <section id="podcast" className="section-frame relative py-24 bg-gradient-to-br from-acadia-navy via-slate-900 to-acadia-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-10 w-72 h-72 bg-acadia-coral rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-acadia-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-16 left-1/2 w-72 h-72 bg-acadia-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white font-semibold">
              <Mic className="w-4 h-4 text-acadia-gold" />
              Momentum Podcast
            </div>

            <h2 className="section-title text-white mt-6 mb-6">
              GTM, SEO, and Thought Leadership for <span className="gradient-text">B2B FinTech</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Short, operator-level episodes for FinTech teams who want stronger positioning, clearer messaging, and a repeatable pipeline.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-acadia-gold transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-acadia-coral to-acadia-gold flex items-center justify-center shadow-lg">
                    <Headphones className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Quick Wins</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      Actionable tactics you can apply immediately—no fluff.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-acadia-coral transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-acadia-teal to-acadia-navy flex items-center justify-center shadow-lg">
                    <Mic className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Real GTM</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      Positioning, competitive analysis, and content that converts.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://momo.castos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Listen to Momentum
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://momo.castos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
              >
                View All Episodes
                <ExternalLink className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Prefer to start with results? Book a Growth Audit Call below.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-acadia-coral to-acadia-gold opacity-15 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 shadow-2xl">
              <div className="flex items-center justify-between gap-6 mb-10">
                <div>
                  <div className="text-white font-bold text-2xl">What you’ll get</div>
                  <div className="text-gray-300 mt-2">A fast way to learn how we think and work.</div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-acadia-gold to-acadia-coral flex items-center justify-center shadow-xl">
                  <Mic className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-acadia-gold mt-2"></div>
                  <div>
                    <div className="text-white font-semibold">Positioning and messaging teardowns</div>
                    <div className="text-gray-300 text-sm mt-1">Make your value proposition obvious in under 5 seconds.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-acadia-coral mt-2"></div>
                  <div>
                    <div className="text-white font-semibold">SEO + content strategy that drives pipeline</div>
                    <div className="text-gray-300 text-sm mt-1">Topics, structure, and distribution for long sales cycles.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-acadia-teal mt-2"></div>
                  <div>
                    <div className="text-white font-semibold">Competitive analysis and GTM frameworks</div>
                    <div className="text-gray-300 text-sm mt-1">Find your wedge and communicate it with confidence.</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://momo.castos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold transition-all"
                >
                  Open the podcast site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
