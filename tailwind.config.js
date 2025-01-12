/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to right, #f39c12, #8e44ad)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

