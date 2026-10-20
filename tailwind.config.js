/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#121216',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
        accent: {
          purple: '#9333ea',
          pink: '#ec4899',
          orange: '#f97316',
          violet: '#7c3aed'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
        'word-slide': 'wordSlide 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
