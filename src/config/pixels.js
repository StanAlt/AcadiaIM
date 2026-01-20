/**
 * Pixel Configuration for Acadia.im
 * 
 * This file manages all tracking pixels including the RB2B OEM pixel.
 * Configure your pixels here and they will be automatically loaded.
 * 
 * IMPORTANT: After your meeting with Robb, replace the RB2B_OEM_PIXEL_ID
 * with the actual pixel ID provided by RB2B.
 */

export const pixelConfig = {
  // RB2B OEM Configuration
  rb2b: {
    enabled: true, // Set to true after receiving your OEM pixel from RB2B
    pixelId: 'YOUR_RB2B_OEM_PIXEL_ID', // Replace with your actual RB2B OEM pixel ID
    // Domain routing configuration for your clients
    // RB2B OEM routes data based on the domain where the pixel fires
    domainRouting: {
      // Add your client domains here
      // Example: 'client1.com': 'client1_identifier'
    },
  },

  // Google Analytics (optional - add your GA4 ID if needed)
  googleAnalytics: {
    enabled: false,
    measurementId: 'G-XXXXXXXXXX', // Replace with your GA4 measurement ID
  },

  // Facebook Pixel (optional)
  facebook: {
    enabled: false,
    pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
  },

  // LinkedIn Insight Tag (optional)
  linkedin: {
    enabled: false,
    partnerId: 'YOUR_LINKEDIN_PARTNER_ID',
  },

  // Custom pixels - add any additional tracking pixels here
  custom: [
    // Example:
    // {
    //   name: 'CustomPixel',
    //   enabled: false,
    //   script: `<!-- Your custom pixel script here -->`,
    // }
  ],
};

// Environment-based configuration
export const getPixelConfig = () => {
  const isDevelopment = import.meta.env.DEV;
  
  if (isDevelopment) {
    // In development, you might want to disable certain pixels
    return {
      ...pixelConfig,
      // Optionally disable pixels in development
      // rb2b: { ...pixelConfig.rb2b, enabled: false },
    };
  }
  
  return pixelConfig;
};

export default pixelConfig;
