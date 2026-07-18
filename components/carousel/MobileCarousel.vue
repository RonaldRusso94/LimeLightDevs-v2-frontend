<template>
  <section-container>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </section-container>
</template>

<script>
import VueSlickCarousel from '~/components/compat/VueSlickCarousel.vue'
import SectionContainer from '../common/SectionContainer.vue'
export default {
  components: { SectionContainer, VueSlickCarousel },
  props: {
    data: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style></style>
