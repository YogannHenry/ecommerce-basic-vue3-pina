module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
     extend: {

      boxShadow: {
      '3xl': '0 40px 100px rgba(0, 0, 0, 0.4)',
      },

      colors: {
        'c1': '#B83D34',
        'c2': '#396C72',
        'c3': '#A7C2D8',
      
     },

     height: {
      '101' : '38rem'
     },

     width: {
      'formWidth' : '50rem'

     }

   },

   variants: {
     extend: {},
   },
   plugins: [],
 }
}