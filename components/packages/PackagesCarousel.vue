<template>
  <VueSlickCarousel v-bind="settings" ref="carousel">
    <service-card
      v-for="(item, index) in services"
      :key="item.id"
      :service="item"
      :isFirstItem="index === 0"
      :isLastItem="index === services.length - 1"
      :isCarousel="true"
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
