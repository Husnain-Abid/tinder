/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  darkMode: 'class', // Enables class-based dark mode

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all relevant file types
  ],
  theme: {

    extend: {


      colors: {
        customRed: "#E23744", // Add a custom name for your color
        customWhite: "#F4F4F2", // Add a custom name for your color
        // gradientPink: "linear-gradient(to right, #ec4899, #f97316)"

      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'], // Add the Inter font
        poppins: ['"Poppins"', 'sans-serif'], // Add the Poppins font
        Helvetica: ['"Helvetica Neue"', 'sans-serif'], // Add the Poppins font
        Proxima: ['"Proxima Nova"', 'sans-serif'], // Add the Poppins font

      },
    },

  },
  plugins: [],
};
