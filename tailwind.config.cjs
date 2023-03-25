/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d5ff40',
        dark: '#101010',
        'dark-mid': '#171717',
        gray: '#292929',
        light: '#c4c4c4'
      }
    }
  },
  plugins: []
}
