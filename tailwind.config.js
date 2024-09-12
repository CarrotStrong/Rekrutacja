/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#282828',
        secondary: '#F7F7F7',
        tertiary: '#0147FF'
      },
      fontFamily: {
        bebas: ['Bebas Neue'],
        roboto: ['Roboto Flex'],
        robotoCondensed: ['Roboto Condensed']
      },
      fontSize: {
        ligular: '0.938rem'
      },
      lineHeight: {
        tighter: '5.25rem',
      }
    },
  },
  plugins: [],
}

