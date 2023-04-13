module.exports = {
  content: [
    './**/*.{html,php}'
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