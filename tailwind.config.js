module.exports = {
  content: [
    './**/*.{html,php}'
    './public/**/*.{html,php}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}