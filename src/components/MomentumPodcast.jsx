import React, { useState } from 'react';
import { Mic, ArrowRight, ExternalLink, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const podcastEpisodes = [
  {
    id: 1,
    title: "From Data Chaos to Clarity: How AI Empowers Hedge Funds to Act Faster",
    videoId: "GKiC3ZHE_34",
  },
  {
    id: 2,
    title: "How Canoe Intelligence Uses AI to Eliminate Private Fund Data Chaos",
    videoId: "LGXbyDO4akk",
  },
  {
    id: 3,
    title: "Real-Time AI in FinTech: How Conductor Is Redefining Fraud Detection",
    videoId: "XQL1hTSq5uM",
  },
  {
    id: 4,
    title: "FinTech for the Underserved: How AI Is Transforming Banking and Payments in Canada",
    videoId: "zjGanOovDw8",
  },
  {
    id: 5,
    title: "How Agentic AI Is Eliminating Finance Workflow Pain Between Contract and Cash",
    videoId: "GKiC3ZHE_34",
  },
  {
    id: 6,
    title: "How Agentic AI Is Eliminating Finance Workflow Pain Between Contract & Cash | Leonid Flek",
    videoId: "CeuM-ukbWqs",
  },
];

export default function MomentumPodcast() {
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const nextEpisode = () => {
    setCurrentEpisode((prev) => (prev + 1) % podcastEpisodes.length);
  };

  const prevEpisode = () => {
    setCurrentEpisode((prev) => (prev - 1 + podcastEpisodes.length) % podcastEpisodes.length);
  };
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
                Listen to the Podcast
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PL9bhmIuhdx_fzKk0al67sFiWF4Ky0v3Q-"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
              >
                View on YouTube
                <ExternalLink className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Prefer to start with results? Book a Growth Audit Call below.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-acadia-coral to-acadia-gold opacity-15 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-6 bg-white/5 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-xl">Watch Episodes</div>
                    <div className="text-gray-300 text-sm mt-1">Episode {currentEpisode + 1} of {podcastEpisodes.length}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevEpisode}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                      aria-label="Previous episode"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextEpisode}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                      aria-label="Next episode"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${podcastEpisodes[currentEpisode].videoId}`}
                  title={podcastEpisodes[currentEpisode].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6">
                <div className="flex gap-2 justify-center">
                  {podcastEpisodes.map((episode, index) => (
                    <button
                      key={episode.id}
                      onClick={() => setCurrentEpisode(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentEpisode
                          ? 'w-12 h-3 bg-acadia-coral shadow-lg shadow-acadia-coral/50'
                          : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
                      }`}
                      aria-label={`Go to episode ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
