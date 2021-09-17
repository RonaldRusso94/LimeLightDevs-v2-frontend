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
      title:
        'Software Development Company & Technical Soultions in NYC - LimeLight Devs ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'LimeLightDevs',
          name: 'The Best New York Website & App Development Company. We follow the lastest technology trends and ensure we delievery quality. We leave the outdated technologies and errors in the past.',
          content:
            'The Best New York Website & App Development Company. We follow the lastest technology trends and ensure we delievery quality. We leave the outdated technologies and errors in the past.',
        },
      ],
    }
  },
}
</script>

<style></style>
