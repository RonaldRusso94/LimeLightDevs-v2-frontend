<template>
  <section-container :default-margins="false">
    <div class="md:flex justify-between items-center">
      <section-title
        class="text-4xl font-semibold tracking-wide text-left 2xl:text-5xl"
        >Our Packages</section-title
      >
      <!-- TABS -->
      <div class="md:w-1/2">
        <VueSlickCarousel v-if="services" v-bind="settings">
          <span
            v-for="item in services"
            :key="item.id"
            class="cursor-pointer mx-4"
            @click="activeService = item.title"
          >
            {{ item.title }}
          </span>
        </VueSlickCarousel>
      </div>
      <!-- END TABS -->
    </div>

    <div v-if="getActiveServices != null" class="">
      <div class="lg:hidden">
        <packages-carousel :services="[...getActiveServices.packages]" />
      </div>
      <div class="hidden lg:flex justify-center space-x-1">
        <service-card
          v-for="(item, index) in getActiveServices.packages"
          :key="item.id"
          :service="item"
          :is-first-item="index === 0"
          :is-last-item="index === getActiveServices.packages.length - 1"
          :is-carousel="false"
        />
      </div>
    </div>
  </section-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SectionContainer from '../common/SectionContainer.vue'
import SectionTitle from '../common/SectionTitle.vue'
import PackagesCarousel from './PackagesCarousel.vue'
import ServiceCard from './ServiceCard.vue'

export default {
  components: {
    VueSlickCarousel,
    SectionContainer,
    SectionTitle,
    PackagesCarousel,
    ServiceCard,
  },
  data() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      slidesToScroll: 1,
    }

    return {
      settings,
      activeService: 'Web Development',
    }
  },
  computed: {
    getActiveServices() {
      if (this.services != null) {
        return this.services.find((item) => {
          if (item.title === this.activeService) {
            return true
          }
          return false
        })
      } else return null
    },
    services() {
      return this.$store.getters.services
    },
  },
  mounted() {
    this.$store.dispatch('getServices')
  },
}
</script>

<style scoped>
/* @media (min-width: 1024px) {
  .package {
    min-width: 0;
  }
} */
</style>
