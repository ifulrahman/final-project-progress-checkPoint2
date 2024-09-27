/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['"League Spartan"', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'mada': ['Mada', 'sans-serif'],
      },
      colors: {
        mainBlue: '#2954CD',
        blueText: '#2C3959',
        blueBg : '#F4F7FE',
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',  
        'customTop': '14.75rem'  
      }
    },
  },
  plugins: [],
}