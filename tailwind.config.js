/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#EF233C',
        dark: '#D90429'
      },
      'secondary': {
        DEFAULT: '#8D99AE',
        dark: '#2B2D42'
      },
      'white': {
        DEFAULT: '#FFF',
        100: '#EDF2F4'
      },
      'success': '#6DDC78',
    }
  },
  extend: {
    boxShadow: {
      DEFAULT: '0px 4px 24px rgba(43, 45, 66, 0.2)'
    } 
  }
}
