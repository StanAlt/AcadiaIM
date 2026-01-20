import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Process from './components/Process';
import ContentFunnel from './components/ContentFunnel';
import Services from './components/Services';
import GrowthPlanner from './components/GrowthPlanner';
import About from './components/About';
import Testimonials from './components/Testimonials';
import MomentumPodcast from './components/MomentumPodcast';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Newsletter from './components/Newsletter';
import PixelManager from './components/PixelManager';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [blogSlug, setBlogSlug] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      
      if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        setCurrentRoute('blogPost');
        setBlogSlug(slug);
        window.scrollTo(0, 0);
      } else if (hash === 'blog') {
        setCurrentRoute('blog');
        setBlogSlug(null);
        window.scrollTo(0, 0);
      } else if (hash === 'newsletter') {
        setCurrentRoute('newsletter');
        setBlogSlug(null);
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('home');
        setBlogSlug(null);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Pixel Manager - Handles all tracking pixels including RB2B OEM */}
      <PixelManager />
      
      <Navigation />
      
      {currentRoute === 'blog' && <Blog />}
      {currentRoute === 'blogPost' && <BlogPost slug={blogSlug} />}
      {currentRoute === 'newsletter' && <Newsletter />}
      
      {currentRoute === 'home' && (
        <>
          <Hero />
          <Process />
          <ContentFunnel />
          <Services />
          <GrowthPlanner />
          <About />
          <Testimonials />
          <MomentumPodcast />
          <FAQ />
          <Contact />
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
