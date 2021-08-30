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
      title: 'Landing Page',
      meta: [
        {
          hid: 'LimeLightDevs',
          name: 'The Best New York Website & App Development Company. We follow the lastest technology trends and ensure we delievery quality. We leave outdated technologies in the past.',
          content:
            'The Best New York Website & App Development Company. We follow the lastest technology trends and ensure we delievery quality. We leave outdated technologies in the past.',
        },
      ],
    }
  },
}
</script>

<style></style>
