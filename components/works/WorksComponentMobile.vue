<template>
  <section-container class="sm:hidden w-full my-4" :default-margins="false">
    <section-title text="Our Works" />
    <work-carousel />
  </section-container>
</template>

<script>
import WorkCarousel from '~/components/works/WorkCarousel'
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'
//
export default {
  components: {
    SectionContainer,
    SectionTitle,
    WorkCarousel,
  },
}
</script>
