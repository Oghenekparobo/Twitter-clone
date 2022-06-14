/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "roboto": 'Roboto',
      },
      colors:{
        "lightBlack":"rgb(110, 105, 105)"
      }
    },
  },
  plugins: [],
};
