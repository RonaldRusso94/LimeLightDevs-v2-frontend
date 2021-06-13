<template>
  <section-container class="sm:hidden w-11/12 mx-auto my-4">
    <section-title text="Our Works" />
    <!-- <div
        v-for="work in works"
        :key="work.id"
        style="heigh"
        class="mr-12 shadow-2xl rounded-2xl min-w-128 min-h-128"
      >
        <works-card :work="work" />
      </div> -->
    <work-carousel />
  </section-container>
</template>

<script>
import WorksCard from '~/components/works/WorkCard'
import WorkCarousel from '~/components/works/WorkCarousel'
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'

export default {
  components: {
    SectionContainer,
    SectionTitle,
    WorksCard,
    WorkCarousel,
  },
  props: {
    works: {
      type: Array,
      required: true,
    },
    projectCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
