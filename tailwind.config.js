
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#004A7F',
        'brand-terracotta': '#E57373',
        'brand-dark': '#2C3E50',
        'brand-light': '#F8F9FA',
        'brand-gold': '#FFD700',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        'heading-montserrat': ['Montserrat', 'sans-serif'],
        'heading-poppins': ['Poppins', 'sans-serif'],
        'body-lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}