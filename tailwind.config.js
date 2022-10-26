/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        grey: '#9da2b1',
        white: colors.white,
        primary: {
          200: '#cdfff6',
          400: '#b8eccb',
          600: '#08cca1',
          800: '#11a18b',
        },
        secondary: '#202b4b',
        tertiary:'#e75655',
      },
    },
  },
  plugins: [],
}
