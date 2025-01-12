/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all React component files
  ],
  theme: {
    extend: {
      colors:{
        'custom-green':'#347928',
      }
    },
  },
  plugins: [],
};