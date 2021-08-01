<template>
  <VueSlickCarousel ref="carousel" v-bind="settings">
    <service-card
      v-for="(item, index) in services"
      :ref="index"
      :key="item.id"
      class="transform element scale-90"
      :service="item"
      :is-first-item="index === 0"
      :is-last-item="index === services.length - 1"
      :is-carousel="true"
    />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// import SectionContainer from '../common/SectionContainer.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ServiceCard from './ServiceCard.vue'

export default {
  components: {
    VueSlickCarousel,
    ServiceCard,
  },
  props: {
    services: {
      type: Array,
      default: null,
    },
  },
  setup() {
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnFocus: true,
      pauseOnHover: true,
    }

    return {
      settings,
      carouselKey: 0,
    }
  },
  watch: {
    services() {
      this.forceRerender()
    },
  },
  methods: {
    forceRerender() {
      this.carouselKey += 1
    },
  },
}
</script>

<style>
.slick-active .element {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
}
</style>
