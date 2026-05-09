import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF4FF',
          100: '#D9E8FF',
          200: '#B3CEFF',
          300: '#7EADFF',
          400: '#4080FF',
          500: '#1A56F0',
          600: '#1A3A5C',
          700: '#142E4A',
          800: '#0E2337',
          900: '#081825',
        },
        gold: {
          50: '#FFFDF0',
          400: '#F0C040',
          500: '#D4A017',
          600: '#B8860B',
        },
        teal: {
          400: '#26A69A',
          500: '#00897B',
          600: '#00695C',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6B7280',
          700: '#495057',
          800: '#343A40',
          900: '#1C1C1E',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        display: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(26, 58, 92, 0.08)',
        'card-hover': '0 8px 40px rgba(26, 58, 92, 0.16)',
        cta: '0 4px 24px rgba(212, 160, 23, 0.35)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
