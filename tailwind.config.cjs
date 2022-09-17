/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "galaxy": "url('/background-galaxy.png')",
        "secondary": "url('/background-secondary.jpeg')",
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}