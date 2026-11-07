/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        blush: {
          50: '#FFF9F9',
          100: '#FDF1F0',
          200: '#F9E3E2',
          300: '#F2C6C4',
          400: '#E89E9B',
          500: '#D97571',
          600: '#C25551',
          700: '#A2413E',
          800: '#873936',
          900: '#713432',
        },
        gold: {
          50: '#FBF9F1',
          100: '#F5F0DC',
          200: '#EBE0B6',
          300: '#DECA87',
          400: '#D0B05C',
          500: '#C5A059',
          600: '#B28A44',
          700: '#946E34',
          800: '#7A582E',
          900: '#664928',
        },
        champagne: {
          light: '#FBF8F3',
          DEFAULT: '#F5EFE6',
          dark: '#E8DEC9',
        },
        cream: {
          50: '#FFFEFC',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EDE4D5',
        },
        nude: {
          50: '#FAF7F4',
          100: '#F5EEE6',
          200: '#E9DEC8',
          300: '#D6C4AC',
          400: '#BFAB92',
          500: '#A38F76',
        },
        luxe: {
          dark: '#1C1819',
          charcoal: '#2D282A',
          muted: '#6E6769',
        }
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(197, 160, 89, 0.12)',
        'luxe': '0 20px 40px -15px rgba(45, 40, 42, 0.07)',
        'glow': '0 0 25px rgba(212, 175, 85, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
