/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b28b53',
        'heading':'#705936',
        'textcolor':'#503a18',
        'bgcolor':'#f1eee8',
        'bgcolor2': '#e9d7b6'
      },
      height:{
        'custom':'450px',
        'landscape':"650px",
        'landscape2':"800px",
        'landscape3':"1600px"
      },
      fontFamily:{
        'knockout':['Knockout','Sans-Serif'],
        'roxbo':['Roxborough CF', 'Serif'],
        'better':['Better Saturday Personal Use','Sans-Serif'],
        'blackbone':['Black Bones Personal Use','Sans-Serif'],
        'gotham':['GothamLight','Sans-Serif'],
        'fira':['Fira Sans','Sans-Serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

