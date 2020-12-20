module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      colors: {
        'baseDeep': '#1B2958',
        'baseLight': '#243366',
        'navLight': 'rgba(27, 41, 88, 0.7)',
        'blueGrad': 'linear-gradient(89.86deg, #00A6ED 0.05%, #7A4DE4 99.81%)',
        'redGrad': 'linear-gradient(256.82deg, rgba(253, 53, 145, 0.96) 0.79%, rgba(232, 57, 158, 0.966452) 42.41%, rgba(195, 64, 182, 0.977852) 66.98%, rgba(136, 94, 199, 0.933496) 81.53%, rgba(0, 166, 237, 0.83) 97.07%)',
      },
      fontFamily: {
        alata: ['Alata'],
        poppins: ['Poppins'],
        openSans: ['Open Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
