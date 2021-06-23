<template>
  <!-- overflow hidden is required for blobs -->
  <div class="lg:overflow-x-hidden">
    <Hero />
    <WorksComponent />
    <Packages />
    <OurProcess />
  </div>
</template>

<script>
import Packages from '~/components/packages/Packages.vue'
import OurProcess from '~/components/process/OurProcess.vue'
import WorksComponent from '~/components/works/WorksComponent.vue'
export default {
  components: { OurProcess, Packages, WorksComponent },
}
</script>

<style></style>
