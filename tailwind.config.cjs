/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'neutral': '#3d4451',
        'primary': '#570df8',
        'accent': '#4ee4fc',
        'info': '#3abff8',
        'warning': '#fbbd23',
        'success': '#36d399',
        'error': '#f87272'
      },
    },
  },
  plugins: [require('daisyui')],
};
