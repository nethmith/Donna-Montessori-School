/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e5eee5',
          200: '#cbdccb',
          300: '#a4c2a4',
          400: '#77a177',
          500: '#558355',
          600: '#406840',
          700: '#355335',
          800: '#2d432d',
          900: '#263826',
        },
        cream: {
          50: '#fdfdfb',
          100: '#faf8f4',
          200: '#f4edd9',
          300: '#ecddb7',
          400: '#e1c68f',
          500: '#d7af6c',
          600: '#cb9652',
          700: '#a97542',
          800: '#885e3a',
          900: '#6e4c32',
        },
        terracotta: {
          50: '#fdf5f3',
          100: '#fbe8e4',
          200: '#f6d5ce',
          300: '#efb8ac',
          400: '#e49180',
          500: '#d56754',
          600: '#be4d3a',
          700: '#9f3e2e',
          800: '#853628',
          900: '#6f3126',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
