const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, './preview/**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, './preview/components/**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, './src/components/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts
  },
};
