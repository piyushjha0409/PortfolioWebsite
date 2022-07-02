/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        'custom2': 'Lato',
        'custom3':'Satisfy'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}