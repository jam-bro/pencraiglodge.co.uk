const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        lg: '48rem',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.serif],
      },
    colors: {
      blue: colors.sky,
      green: colors.emerald,

    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
