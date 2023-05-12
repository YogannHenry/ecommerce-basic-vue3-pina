module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      boxShadow: {
      '3xl': '0 40px 100px rgba(0, 0, 0, 0.4)',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }