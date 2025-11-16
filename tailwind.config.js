/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acadia-teal': '#1e5f6f',
        'acadia-coral': '#e86842',
        'acadia-navy': '#0a2540',
        'acadia-gold': '#f5a142',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Crimson Pro"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
