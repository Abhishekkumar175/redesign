/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          light: '#0d2548',
        },
        slate: {
          brand: '#3E5C76',
        },
        accent: {
          DEFAULT: '#F1592A',
          dark: '#D6491E',
        },
        muted: '#5B6472',
        border: '#E4E7EC',
        'alt-bg': '#F5F7FA',
        'body-text': '#101828',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['56px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1-tablet': ['40px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1-mobile': ['32px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-tablet': ['30px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['26px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['21px', { lineHeight: '1.35', fontWeight: '600' }],
        'eyebrow': ['13px', { lineHeight: '1.5', letterSpacing: '0.06em', fontWeight: '600' }],
      },
      spacing: {
        'section-desktop': '112px',
        'section-tablet': '64px',
        'section-mobile': '48px',
        'navbar': '80px',
        'navbar-mobile': '64px',
      },
      maxWidth: {
        'reading': '720px',
        'content': '1200px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'image': '16px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.08)',
        'card-hover': '0 4px 8px rgba(16,24,40,0.10), 0 8px 16px rgba(16,24,40,0.08)',
        'nav': '0 1px 3px rgba(16,24,40,0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
