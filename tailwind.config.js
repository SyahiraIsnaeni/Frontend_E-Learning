/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'biru-tua' : '#02455C',
        'biru-muda' : '#F0FBFF',
      },
    },
    fontFamily: {
      'learn': ['Open Sans'],
    },
  },
  plugins: [],
}