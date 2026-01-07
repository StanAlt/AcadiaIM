import React from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost({ slug }) {
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-acadia-navy mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <a href="#blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </a>
        </div>
      </section>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <a 
          href="#blog" 
          className="inline-flex items-center gap-2 text-acadia-navy hover:text-acadia-coral transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </a>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden bg-gray-200">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-acadia-coral text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-acadia-navy mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-acadia-coral to-acadia-teal rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <button 
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 text-acadia-coral hover:text-acadia-navy transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </button>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed space-y-6"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              >
                {post.content.split('\n').map((paragraph, index) => {
                  // Handle h3 headers (### )
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-acadia-navy mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  // Handle h2 headers (## )
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-acadia-navy mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  // Handle bold text
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-acadia-navy text-lg">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  // Handle regular paragraphs
                  if (paragraph.trim()) {
                    return (
                      <p 
                        key={index} 
                        className="mb-4"
                        dangerouslySetInnerHTML={{ 
                          __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-acadia-navy">$1</strong>') 
                        }}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-acadia-navy to-acadia-teal rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Implement These Strategies?</h3>
              <p className="text-gray-100 mb-6">
                Let's build a growth marketing engine that drives real pipeline for your FinTech.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white text-acadia-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Let's Talk Growth
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {previousPost && (
            <a 
              href={`#blog/${previousPost.slug}`}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-acadia-coral"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <ArrowLeft className="w-4 h-4" />
                Previous Article
              </div>
              <h3 className="font-bold text-acadia-navy group-hover:text-acadia-coral transition-colors">
                {previousPost.title}
              </h3>
            </a>
          )}
          
          {nextPost && (
            <a 
              href={`#blog/${nextPost.slug}`}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-acadia-coral md:text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                Next Article
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-acadia-navy group-hover:text-acadia-coral transition-colors">
                {nextPost.title}
              </h3>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
