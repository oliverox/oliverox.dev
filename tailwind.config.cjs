/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          'base-content': '#ffffff',
          '.menulink': {
            'background-color': '#334155',
          },
          '.menulink:hover': {
            'background-color': '#475569'
          }
        },
      },
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          accent: "#40bfbf",
          '.menulink': {
            'background-color': '#f1f5f9',
          },
          '.menulink:hover': {
            'background-color': '#e2e8f0'
          }
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
