# Pixel Infrastructure for Acadia.im

This document explains the pixel infrastructure built into Acadia.im to support RB2B's OEM Partner Program and other tracking pixels.

## Overview

The pixel infrastructure consists of three main components:

1. **PixelManager Component** (`src/components/PixelManager.jsx`) — Handles loading and initializing all tracking pixels
2. **Pixel Configuration** (`src/config/pixels.js`) — Central configuration file for all pixels
3. **usePixelTracking Hook** (`src/hooks/usePixelTracking.js`) — React hook for tracking events across all pixels

## Quick Start: Enabling RB2B OEM Pixel

After your meeting with Robb and receiving your RB2B OEM pixel ID:

### Step 1: Update the Configuration

Open `src/config/pixels.js` and update the RB2B configuration:

```javascript
rb2b: {
  enabled: true,  // Change from false to true
  pixelId: 'YOUR_ACTUAL_RB2B_OEM_PIXEL_ID',  // Replace with your pixel ID
  domainRouting: {
    // Add your client domains here if needed
  },
},
```

### Step 2: Deploy

Commit and push your changes:

```bash
git add .
git commit -m "Enable RB2B OEM pixel"
git push
```

That's it! The pixel will automatically load on all pages.

## File Structure

```
src/
├── config/
│   └── pixels.js          # Pixel configuration
├── components/
│   └── PixelManager.jsx   # Pixel loading component
├── hooks/
│   └── usePixelTracking.js # Event tracking hook
└── App.jsx                 # Main app (includes PixelManager)
```

## Configuration Options

### RB2B OEM Pixel

```javascript
rb2b: {
  enabled: true,
  pixelId: 'YOUR_RB2B_OEM_PIXEL_ID',
  domainRouting: {
    // Optional: Configure domain-based routing for your clients
    'client1.com': 'client1_id',
    'client2.com': 'client2_id',
  },
},
```

### Google Analytics 4

```javascript
googleAnalytics: {
  enabled: true,
  measurementId: 'G-XXXXXXXXXX',
},
```

### Facebook Pixel

```javascript
facebook: {
  enabled: true,
  pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
},
```

### LinkedIn Insight Tag

```javascript
linkedin: {
  enabled: true,
  partnerId: 'YOUR_LINKEDIN_PARTNER_ID',
},
```

### Custom Pixels

```javascript
custom: [
  {
    name: 'MyCustomPixel',
    enabled: true,
    script: `
      // Your custom pixel JavaScript code here
    `,
  },
],
```

## Tracking Events

Use the `usePixelTracking` hook to track events across all enabled pixels:

```jsx
import usePixelTracking from '../hooks/usePixelTracking';

function MyComponent() {
  const { trackEvent, trackConversion, identifyUser, trackPageView } = usePixelTracking();

  const handleButtonClick = () => {
    trackEvent('button_click', { button_name: 'cta_hero' });
  };

  const handleFormSubmit = (formData) => {
    // Track the conversion
    trackConversion('lead', {
      form_name: 'contact',
      value: 100,
    });

    // Identify the user for RB2B enrichment
    identifyUser({
      email: formData.email,
      name: formData.name,
      company: formData.company,
    });
  };

  return (
    <button onClick={handleButtonClick}>Click Me</button>
  );
}
```

### Available Tracking Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `trackEvent(name, data)` | Track a custom event | `name`: string, `data`: object |
| `trackPageView(path, title)` | Track a page view | `path`: string (optional), `title`: string (optional) |
| `identifyUser(userData)` | Identify a user for enrichment | `userData`: { email, name, company } |
| `trackConversion(type, data)` | Track a conversion event | `type`: string, `data`: object |

## How It Works

### 1. Initialization

When the app loads, `PixelManager` is rendered in `App.jsx`. It runs once on mount and:

- Reads the configuration from `pixels.js`
- Injects the appropriate script tags into the document head
- Initializes each enabled pixel

### 2. Event Tracking

When you call tracking methods from `usePixelTracking`:

- The hook checks which pixels are enabled
- It calls the appropriate tracking function for each pixel
- Events are sent to all enabled platforms simultaneously

### 3. RB2B OEM Integration

The RB2B OEM pixel works by:

1. Loading the RB2B script with your OEM pixel ID
2. Automatically identifying website visitors
3. Routing data based on the domain where the pixel fires
4. Sending enriched visitor data to your OEM account

## Development vs Production

By default, all pixels are loaded in both development and production. To disable pixels in development:

```javascript
// In src/config/pixels.js
export const getPixelConfig = () => {
  const isDevelopment = import.meta.env.DEV;
  
  if (isDevelopment) {
    return {
      ...pixelConfig,
      rb2b: { ...pixelConfig.rb2b, enabled: false },
      // Disable other pixels as needed
    };
  }
  
  return pixelConfig;
};
```

## Debugging

Open your browser's developer console to see tracking logs:

```
[Acadia Pixel Manager] RB2B OEM pixel initialized
[Acadia Tracking] RB2B event: button_click { button_name: 'cta_hero' }
[Acadia Tracking] RB2B user identified: { email: '...', name: '...' }
```

## Compliance Notes

### GDPR / CCPA

Before enabling tracking pixels, ensure you have:

1. A privacy policy that discloses the use of tracking technologies
2. Cookie consent mechanism (if required in your jurisdiction)
3. User opt-out capabilities

### RB2B Compliance

RB2B provides their own compliance documentation. Refer to:
- [RB2B Privacy Policy](https://www.rb2b.com/privacy)
- [RB2B Terms of Service](https://www.rb2b.com/terms)
- [RB2B Data Protection Addendum](https://support.rb2b.com/en)

## Support

For questions about:
- **This pixel infrastructure**: Review this documentation or check the code comments
- **RB2B OEM Program**: Contact Robb at robb@rb2b.com
- **Acadia.im website**: Contact stan@acadia.im
