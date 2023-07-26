/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-dark': '#4d5d53',
        'sage-light': '#738678'
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}