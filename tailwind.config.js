/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '1vh': '1vh',
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '9vh': '9vh',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
      },
      inset: {
        '5vh': '5vh',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
      },
    },
  },
  plugins: [],
}