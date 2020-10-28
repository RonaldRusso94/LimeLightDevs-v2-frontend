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
    extenedSpacingScale: true,
  },
  // nuxt tailwind handles this by default so no need to configure
  purge: [],
  theme: {
    extend: {
      colors: {
        // main
        'app-green-1': '#4dff64',
        // main
        'app-gray-1': '#1a1a1a',
        // secondary
        'app-gray-2': '#222222',
      },
      fontFamily: {
        hibana: ['Hibana', 'Roboto', 'sans-serif'],
      },
      width: {
        '9/10': '90%',
      },
    },
    minWidth: {
      0: '0%',
      '1/2': '50%',
      '3/4': '75%',
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
