/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {screens: {
      '3xl': '1600px',
      '2xl': '1440px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'xxs': '430px'}},
    
  },
  plugins: [],
};
