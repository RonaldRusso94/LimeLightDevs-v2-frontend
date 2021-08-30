<template>
  <div class="container mx-auto px-4 xl:px-6 2xl:px-16">
    <h2 class="text-4xl font-bold mb-10 xl:mb-5">Our Process</h2>
    <div class="hidden relative lg:flex justify-between mx-auto">
      <process-point
        class="mt-48 transform"
        src="/processes/wireframes.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing."
        subhead="Wireframes & Designs"
      />
      <left-dotted-line
        class="w-3/12 xl:w-2/7 2xl:w-3/10 absolute transform translate-x-48 translate-y-32 xl:translate-y-24 -rotate-6"
      />
      <ProcessPoint
        class="mt-32 transform translate-y-2 -translate-x-2 xl:-translate-x-8 xl:-translate-y-6"
        src="/processes/development.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing."
        subhead="Development"
      />
      <right-dotted-line
        class="w-3/12 xl:w-2/7 2xl:w-3/10 absolute right-0 transform -translate-x-56 translate-y-40 xl:translate-y-28 xl:-translate-x-64"
      />
      <ProcessPoint
        class="transform translate-y-20 -translate-x-4 xl:translate-y-8 xl:-translate-x-12"
        src="/processes/launch.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing."
        subhead="Launch!"
      />
    </div>

    <!-- Small Screen -->
    <div class="flex flex-col items-center lg:hidden">
      <ProcessPoint
        src="/processes/wireframes.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Wireframes & Designs"
      />

      <ProcessPoint
        class="mt-16"
        src="/processes/development.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Development"
      />

      <ProcessPoint
        class="mt-16"
        src="/processes/launch.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Launch"
      />
    </div>
  </div>
</template>

<script>
import ProcessPoint from '~/components/landing/process/ProcessPoint.vue'
import LeftDottedLine from '~/components/misc/icons/LeftDottedLine.vue'
import RightDottedLine from '~/components/misc/icons/RightDottedLine.vue'
export default {
  components: { RightDottedLine, LeftDottedLine, ProcessPoint },
  head() {
    return {
      title: 'Packages',
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
