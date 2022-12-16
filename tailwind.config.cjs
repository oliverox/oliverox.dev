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
            'box-sizing': 'content-box',
            'border': '1px solid #334155',
            'background-color': '#334155',
          },
          '.menulink:hover': {
            'background-color': '#475569',
            'border': '1px solid #ffffff'
          }
        },
      },
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          accent: "#40bfbf",
          '.menulink': {
            'box-sizing': 'content-box',
            'border': '1px solid #f1f5f9',
            'background-color': '#f1f5f9',
          },
          '.menulink:hover': {
            'background-color': '#e2e8f0',
            'border': '1px solid #475569',
          }
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
