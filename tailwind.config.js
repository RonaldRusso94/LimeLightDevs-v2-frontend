module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    additionalBreakpoint: true,
    applyComplexClasses: true,
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
  },
  // nuxt tailwind handles this by default so no need to configure
  purge: [],
  theme: {

    extend: {

      width: {
        '2/7': '28.5714286%',
        '3/10': '30%'
      },

      spacing: {
        28: '7rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
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
