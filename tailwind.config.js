/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'black',
        'secondary': 'white',
        'color1': '#f50'
      }
    },
  },
  plugins: [],
}
