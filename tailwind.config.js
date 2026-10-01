/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        // Used by the Media House Journal section (headings + pull-quotes).
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#151a2b',
        haze: '#eef2f8',
        mist: '#e3e9f3',
        brand: {
          DEFAULT: '#2451c4',
          dark: '#1a3a91',
          light: '#3f6ae0',
        },
        teal: {
          glow: '#8fe3d6',
          deep: '#0f8f95',
        },
        gold: '#f2c14e',
        // Used by the Media House Journal section (eyebrow line, category
        // pills, "Journal." wordmark, article card scrim + modal chrome).
        navy: {
          950: '#0a0f1e',
          900: '#0d1526',
          800: '#101d33',
        },
        accent: {
          blue: '#2f5fd8',
          gold: '#d7a24a',
          orange: '#e08a3c',
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 22s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
