module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '560':'560px',
      },
      width: {
        '640':'640px',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}
