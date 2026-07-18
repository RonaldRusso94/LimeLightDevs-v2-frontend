export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2026-05-21',
  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      title: 'LimeLight Devs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'og:title', content: 'LimeLight Devs' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'LimeLightDevs' },
        { name: 'og:url', content: 'https://limelightdevs.com/' },
        {
          name: 'og:description',
          content:
            'The Best New York Website & App Software Development Company. We follow the latest technology trends and ensure we delivery quality. We leave the outdated technologies and errors in the past.',
        },
        { name: 'og:image', content: '/LimeLightOGImage.png' },
        {
          name: 'og:image:alt',
          content: 'LimeLight Devs & Team Communicating',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '/LimeLightOGImage.png' },
        {
          name: 'twitter:description',
          content:
            'The Best New York Website & App Software Development Company. We follow the latest technology trends and ensure we delivery quality. We leave the outdated technologies and errors in the past.',
        },
        { name: 'twitter:image', content: '/LimeLightOGImage.png' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/LimeLightDevsFavicon.svg',
        },
      ],
    },
  },

  css: [],
  plugins: ['~/plugins/v-click-outside', '~/plugins/api', '~/plugins/store'],
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiBase: 'https://limelightdevs.herokuapp.com',
      gtagId: 'G-JGK45VYJRE',
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
})
