/**
 * usePixelTracking Hook
 * 
 * A custom React hook for tracking events across all configured pixels.
 * Use this hook to track custom events like form submissions, button clicks,
 * page views, and conversions.
 * 
 * Usage:
 * const { trackEvent, trackPageView, identifyUser } = usePixelTracking();
 * 
 * // Track a custom event
 * trackEvent('form_submit', { formName: 'contact' });
 * 
 * // Track a page view
 * trackPageView('/blog/my-post');
 * 
 * // Identify a user (for RB2B enrichment)
 * identifyUser({ email: 'user@example.com' });
 */

import { useCallback } from 'react';
import { getPixelConfig } from '../config/pixels';

const usePixelTracking = () => {
  /**
   * Track a custom event across all enabled pixels
   * @param {string} eventName - Name of the event
   * @param {object} eventData - Additional event data
   */
  const trackEvent = useCallback((eventName, eventData = {}) => {
    const config = getPixelConfig();
    
    // RB2B Event Tracking
    if (config.rb2b.enabled && window.reb2b) {
      try {
        window.reb2b.collect({
          event: eventName,
          ...eventData,
        });
        console.log(`[Acadia Tracking] RB2B event: ${eventName}`, eventData);
      } catch (e) {
        console.warn('[Acadia Tracking] RB2B tracking error:', e);
      }
    }
    
    // Google Analytics Event
    if (config.googleAnalytics.enabled && window.gtag) {
      try {
        window.gtag('event', eventName, eventData);
        console.log(`[Acadia Tracking] GA4 event: ${eventName}`, eventData);
      } catch (e) {
        console.warn('[Acadia Tracking] GA4 tracking error:', e);
      }
    }
    
    // Facebook Pixel Event
    if (config.facebook.enabled && window.fbq) {
      try {
        window.fbq('trackCustom', eventName, eventData);
        console.log(`[Acadia Tracking] Facebook event: ${eventName}`, eventData);
      } catch (e) {
        console.warn('[Acadia Tracking] Facebook tracking error:', e);
      }
    }
    
    // LinkedIn Event
    if (config.linkedin.enabled && window.lintrk) {
      try {
        window.lintrk('track', { conversion_id: eventName });
        console.log(`[Acadia Tracking] LinkedIn event: ${eventName}`);
      } catch (e) {
        console.warn('[Acadia Tracking] LinkedIn tracking error:', e);
      }
    }
  }, []);

  /**
   * Track a page view across all enabled pixels
   * @param {string} pagePath - The page path (optional, defaults to current path)
   * @param {string} pageTitle - The page title (optional)
   */
  const trackPageView = useCallback((pagePath = null, pageTitle = null) => {
    const config = getPixelConfig();
    const path = pagePath || window.location.pathname + window.location.hash;
    const title = pageTitle || document.title;
    
    // Google Analytics Page View
    if (config.googleAnalytics.enabled && window.gtag) {
      try {
        window.gtag('event', 'page_view', {
          page_path: path,
          page_title: title,
        });
        console.log(`[Acadia Tracking] GA4 page view: ${path}`);
      } catch (e) {
        console.warn('[Acadia Tracking] GA4 page view error:', e);
      }
    }
    
    // Facebook Page View
    if (config.facebook.enabled && window.fbq) {
      try {
        window.fbq('track', 'PageView');
        console.log(`[Acadia Tracking] Facebook page view: ${path}`);
      } catch (e) {
        console.warn('[Acadia Tracking] Facebook page view error:', e);
      }
    }
  }, []);

  /**
   * Identify a user for enrichment (primarily for RB2B)
   * @param {object} userData - User identification data
   * @param {string} userData.email - User's email address
   * @param {string} userData.name - User's name (optional)
   * @param {string} userData.company - User's company (optional)
   */
  const identifyUser = useCallback((userData) => {
    const config = getPixelConfig();
    
    // RB2B User Identification
    if (config.rb2b.enabled && window.reb2b) {
      try {
        window.reb2b.identify(userData);
        console.log('[Acadia Tracking] RB2B user identified:', userData);
      } catch (e) {
        console.warn('[Acadia Tracking] RB2B identify error:', e);
      }
    }
  }, []);

  /**
   * Track a conversion event (e.g., form submission, signup)
   * @param {string} conversionType - Type of conversion
   * @param {object} conversionData - Additional conversion data
   */
  const trackConversion = useCallback((conversionType, conversionData = {}) => {
    const config = getPixelConfig();
    
    // Track as event with conversion prefix
    trackEvent(`conversion_${conversionType}`, conversionData);
    
    // Facebook specific conversion tracking
    if (config.facebook.enabled && window.fbq) {
      try {
        // Map common conversion types to Facebook standard events
        const fbEventMap = {
          lead: 'Lead',
          signup: 'CompleteRegistration',
          contact: 'Contact',
          download: 'Lead',
        };
        
        const fbEvent = fbEventMap[conversionType] || 'Lead';
        window.fbq('track', fbEvent, conversionData);
        console.log(`[Acadia Tracking] Facebook conversion: ${fbEvent}`);
      } catch (e) {
        console.warn('[Acadia Tracking] Facebook conversion error:', e);
      }
    }
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    identifyUser,
    trackConversion,
  };
};

export default usePixelTracking;
