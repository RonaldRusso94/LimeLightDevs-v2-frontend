<template>
  <section-container :defaultMargins="false">
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
    <!-- <VueSlickCarousel v-if="services.length > 0">
      <div v-for="item in services" :key="item.id">
        {{ item.title }}
      </div>
    </VueSlickCarousel> -->
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
  components: { SectionContainer, VueSlickCarousel, ServiceCard },
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
      infinite: false,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
    }

    return {
      settings,
    }
  },
}
</script>

<style></style>
