module.exports = {
  // nuxt tailwind handles this by default so no need to configure
  purge: [],
  theme: {
    extend: {
      width: {
        '2/7': '28.5714286%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },

      spacing: {
        28: '7rem',
        52: '13rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
        84: '22rem',
        96: '24rem',
        136: '32rem',
        128: '32rem',
      },
      colors: {
        // main
        'app-green-1': '#4dff64',
        // main
        'app-gray-1': '#1a1a1a',
        // secondary
        'app-gray-2': '#222222',
        // contact form text
        'app-gray-3': '#606060',
      },
      fontFamily: {
        hibana: ['Hibana', 'Roboto', 'sans-serif'],
      },
    },
    minWidth: {
      '1/2': '50%',
      '3/4': '75%',
      96: '24rem',
      128: '24rem',
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'hover', 'focus'],
    minWidth: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
