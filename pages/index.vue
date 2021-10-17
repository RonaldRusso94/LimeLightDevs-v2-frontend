<template>
  <!-- overflow hidden is required for blobs -->
  <div class="lg:overflow-x-hidden">
    <Hero />
    <div class="relative">
      <Packages />
      <div class="absolute hidden lg:block top-[-170px]">
        <img
          src="/works/greenblobstretch.png"
          class="h-[79rem] 2xl:w-[61rem]"
          alt=""
        />
      </div>
      <WorksComponent />
    </div>
    <OurProcess />
  </div>
</template>

<script>
import Packages from '~/components/packages/Packages.vue'
import OurProcess from '~/components/process/OurProcess.vue'
import WorksComponent from '~/components/works/WorksComponent.vue'
export default {
  components: { OurProcess, Packages, WorksComponent },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'og:title',
          hid: 'og:title',
          content: 'LimeLight Devs',
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content:
            'The Best New York Website & App Software Development Company. We follow the latest technology trends and ensure we delivery quality. We leave the outdated technologies and errors in the past.',
        },
        {
          name: 'og:image',
          hid: 'og:image',
          content: '/LimeLightOGImage.png',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/LimeLightDevsFavicon.svg',
        },
      ],
    }
  },
}
</script>

<style></style>
