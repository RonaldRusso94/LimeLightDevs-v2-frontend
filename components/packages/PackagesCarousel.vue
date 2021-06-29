<template>
  <section-container :default-margins="false">
    <VueSlickCarousel ref="carousel" v-bind="settings" :key="carouselKey">
      <service-card
        v-for="(item, index) in services"
        :key="item.id"
        :service="item"
        :is-first-item="index === 0"
        :is-last-item="index === services.length - 1"
        :is-carousel="true"
      />
    </VueSlickCarousel>
  </section-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SectionContainer from '../common/SectionContainer.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ServiceCard from './ServiceCard.vue'

export default {
  components: {
    SectionContainer,
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
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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

<style></style>
