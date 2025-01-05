/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'barlow': ['Barlow'],
      'fraunces': ['Fraunces'],
    },
    extend: {
      colors: {
        'dark-cyan': '#0E8784',
        'dark-grey': '#333D4B',
        'pale-orange': '#FDD6BA',
        'light-cream': '#FEFCF7',
        'grey': '#83888F',
        'hover' : '#66D2CF',

      },
      backgroundImage: {
        'hero': "url('img/bg-hero.png')",
        
      },
    },
  },
  plugins: [],
}

