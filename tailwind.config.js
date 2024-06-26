/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {screens: {
      '3xl': '1600px',
      '2xl': '1440px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'xxs': '430px'}},
    
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
    flowbite.plugin(),
  ],
};
