import { useEffect } from 'react';
import { getPixelConfig } from '../config/pixels';

/**
 * PixelManager Component
 * 
 * This component handles the loading and initialization of all tracking pixels,
 * including the RB2B OEM pixel for white-labeled de-identification solutions.
 * 
 * Usage: Include this component once in your App.jsx
 * 
 * How it works:
 * 1. On mount, it loads all enabled pixels from the configuration
 * 2. For RB2B OEM, it injects the pixel script that will fire on page loads
 * 3. The RB2B OEM pixel routes data based on the domain (as per their OEM program)
 */

const PixelManager = () => {
  useEffect(() => {
    const config = getPixelConfig();
    
    // Initialize RB2B OEM Pixel
    if (config.rb2b.enabled && config.rb2b.pixelId !== 'YOUR_RB2B_OEM_PIXEL_ID') {
      initializeRB2B(config.rb2b);
    }
    
    // Initialize Google Analytics
    if (config.googleAnalytics.enabled) {
      initializeGoogleAnalytics(config.googleAnalytics);
    }
    
    // Initialize Facebook Pixel
    if (config.facebook.enabled) {
      initializeFacebookPixel(config.facebook);
    }
    
    // Initialize LinkedIn Insight Tag
    if (config.linkedin.enabled) {
      initializeLinkedIn(config.linkedin);
    }
    
    // Initialize custom pixels
    config.custom.forEach((pixel) => {
      if (pixel.enabled) {
        initializeCustomPixel(pixel);
      }
    });
  }, []);

  return null; // This component doesn't render anything
};

/**
 * Initialize RB2B OEM Pixel
 * 
 * This is the core pixel for your white-labeled de-identification solution.
 * The pixel script is provided by RB2B when you join their OEM Partner Program.
 * 
 * IMPORTANT: Replace the script content with the actual OEM pixel script
 * provided by Robb after your meeting.
 */
const initializeRB2B = (rb2bConfig) => {
  // Check if script already exists to prevent duplicates
  if (document.getElementById('rb2b-oem-pixel')) {
    return;
  }

  // Create and inject the RB2B OEM pixel script
  // NOTE: This is a placeholder structure. Replace with actual RB2B OEM script
  // after receiving it from your OEM partnership meeting.
  
  const script = document.createElement('script');
  script.id = 'rb2b-oem-pixel';
  script.type = 'text/javascript';
  
  // RB2B OEM Pixel Script Template
  // The actual script will be provided by RB2B - this is the expected structure
  script.innerHTML = `
    !function () {
      var reb2b = window.reb2b = window.reb2b || [];
      if (reb2b.invoked) return;
      reb2b.invoked = true;
      reb2b.methods = ["identify", "collect"];
      reb2b.factory = function (method) {
        return function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          reb2b.push(args);
          return reb2b;
        };
      };
      for (var i = 0; i < reb2b.methods.length; i++) {
        var key = reb2b.methods[i];
        reb2b[key] = reb2b.factory(key);
      }
      reb2b.load = function (key) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/OOEM.js";
        var first = document.getElementsByTagName("script")[0];
        first.parentNode.insertBefore(script, first);
      };
      reb2b.SNIPPET_VERSION = "1.0.1";
      reb2b.load("${rb2bConfig.pixelId}");
    }();
  `;
  
  document.head.appendChild(script);
  
  console.log('[Acadia Pixel Manager] RB2B OEM pixel initialized');
};

/**
 * Initialize Google Analytics 4
 */
const initializeGoogleAnalytics = (gaConfig) => {
  if (document.getElementById('ga-script')) {
    return;
  }

  // Load gtag.js
  const gtagScript = document.createElement('script');
  gtagScript.id = 'ga-script';
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaConfig.measurementId}`;
  document.head.appendChild(gtagScript);

  // Initialize gtag
  const initScript = document.createElement('script');
  initScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaConfig.measurementId}');
  `;
  document.head.appendChild(initScript);
  
  console.log('[Acadia Pixel Manager] Google Analytics initialized');
};

/**
 * Initialize Facebook Pixel
 */
const initializeFacebookPixel = (fbConfig) => {
  if (document.getElementById('fb-pixel')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'fb-pixel';
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${fbConfig.pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
  
  console.log('[Acadia Pixel Manager] Facebook Pixel initialized');
};

/**
 * Initialize LinkedIn Insight Tag
 */
const initializeLinkedIn = (liConfig) => {
  if (document.getElementById('li-insight')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'li-insight';
  script.innerHTML = `
    _linkedin_partner_id = "${liConfig.partnerId}";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    (function(l) {
      if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
      window.lintrk.q=[]}
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);})(window.lintrk);
  `;
  document.head.appendChild(script);
  
  console.log('[Acadia Pixel Manager] LinkedIn Insight Tag initialized');
};

/**
 * Initialize Custom Pixel
 */
const initializeCustomPixel = (pixelConfig) => {
  const existingScript = document.getElementById(`custom-pixel-${pixelConfig.name}`);
  if (existingScript) {
    return;
  }

  const script = document.createElement('script');
  script.id = `custom-pixel-${pixelConfig.name}`;
  script.innerHTML = pixelConfig.script;
  document.head.appendChild(script);
  
  console.log(`[Acadia Pixel Manager] Custom pixel "${pixelConfig.name}" initialized`);
};

export default PixelManager;
