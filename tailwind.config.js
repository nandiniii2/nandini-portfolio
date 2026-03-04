/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', // True obsidian
        surface: '#121212',
        surfaceLight: '#1E1E1E',
        surfaceBorder: 'rgba(255, 255, 255, 0.08)',
        primary: {
          500: '#38bdf8', // Cyber Cyan / Electric Blue
          600: '#0284c7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      gridTemplateColumns: {
        'bento': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
