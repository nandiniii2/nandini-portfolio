/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfbf7', // Warm cream
        surface: '#ffffff', // Pure white cards
        surfaceBorder: 'rgba(0, 0, 0, 0.05)',
        textMain: '#1a1a1a', // Soft black for high readability
        textMuted: '#666666',
        botanical: {
          red: '#d90429',
          burgundy: '#800020',
          yellow: '#ffb703',
          blue: '#3a86ff',
          green: '#2a9d8f' // Added as a subtle botanical accent
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'sway': 'sway 6s ease-in-out infinite',
        'bloom': 'bloom 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bloom: {
          '0%': { opacity: 0, transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
