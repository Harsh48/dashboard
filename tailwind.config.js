/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-color": "#37146B",
        "deployed-green": "#00B88C",
        "cards-head": "#595959",
        "in-progress": "#F39C12",
        "failed": "#E91F04",
        "sub-text": "#A5A5A5",
        "alert-color": "#E91F04",
        "grayscale-100": "#f8f8f8",
        "grayscale-0": "#fff",
        "grayscale-200": "#ebebeb",
        "primary-800": "#6e27d5",
        "grayscale-800": "#333",
        "grayscale-700": "#595959",
        "grayscale-300": "#bdbdbd",
        "grayscale-900": "#000",
        "semantic-success-50": "#f0fcf9",
        "semantic-success-success": "#00b88c",
        "grayscale-600": "#7e7e7e",
        "resources-am": "#ffd07b",
        "primary-50": "#f9f5fe",
        "primary-950": "#37146b",
        "primary-100": "#f3ecfe",
        "primary-900": "#4d1b95",
        slateblue: "#7342ba",
      },
      fontSize: {
        "xsm": "10px"
      }
    },
  },
  plugins: [],
}

