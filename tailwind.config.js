/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monospace': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
