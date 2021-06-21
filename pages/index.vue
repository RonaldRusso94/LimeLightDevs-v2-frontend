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
  data() {
    return {
      apiData: null,
      loading: true,
      error: false,
    }
  },
  mounted() {
    this.test()
    console.log(`working`)
  },
  methods: {
    async getData() {
      try {
        const { data } = await this.$axios(`/services`)
        this.loading = false
        console.log('res', data)
        this.apiData = data
      } catch (error) {
        this.error = error
      }
    },
    test() {
      this.$store.dispatch('getServices')
    },
  },
}
</script>

<style></style>
