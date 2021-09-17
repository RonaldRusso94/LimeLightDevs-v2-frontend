export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // publicRuntimeConfig: { baseURL: process.env.NUXT_BASE_URL },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'LimeLight Devs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'LimeLight Devs',
        content:
          'The Best New York Website & App Development Company. We follow the lastest technology trends and ensure we delievery quality. We leave the outdated technologies and errors in the past.',
      },
      // { hid: 'og:image', property: 'og:image', content: `${this.$config.baseURL}/logo.png` }
    ],
    // link: [
    //   {
    //     rel: 'icon',
    //     type: 'image/x-icon',
    //     href: '/web-app-design.png',
    //   },
    // ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/v-click-outside.js', '~/plugins/v-generic-form'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://limelightdevs.herokuapp.com',
  },
  tailwindcss: {
    jit: true,
  },
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    transpile: ['v-click-outside'],
  },
  server: {
    host: '0.0.0.0',
  },
}
