/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bowlby-one-sc-regular': ['"Bowlby One SC"', 'serif'],
        'bebas-neue-regular': ['"Bebas Neue"', 'serif'],
      },
      fontWeight: {
        'bowlby-one-sc-regular': 400,
        'bebas-neue-regular': 400,
        'inter-regular': 600,
        
      },
      fontStyle: {
        'inter-regular': 'normal',
      },
      fontOpticalSizing: {
        'inter-regular': 'auto',
      },
      fontFamily: {
        'inter-regular': ['"Inter"', 'serif'],
        'bowlby-one-sc-regular': ['"Bowlby One SC"', 'serif'],
        'bebas-neue-regular': ['"Bebas Neue"', 'serif'],
      },
    },
  },
  plugins: [],
}