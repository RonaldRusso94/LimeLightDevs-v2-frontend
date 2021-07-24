<template>
  <section-container class="relative z-[3]" :default-margins="false">
    <div class="md:flex flex-wrap justify-between items-center">
      <section-title text="Our Packages" />

      <div class="hidden sm:block z-10">
        <!-- TABS -->
        <ul
          v-if="services"
          class="
            flex
            justify-end
            items-center
            text-center
            font-bold
            mr-4
            space-x-4
            text-md
            lg:space-x-12
          "
        >
          <li v-for="item in services" :key="item.id">
            <button
              role="button"
              class="
                cursor-pointer
                text-lg
                duration-150
                font-bold
                focus:border-none
                focus:outline-none
              "
              :class="[
                getActiveServices.title === item.title
                  ? 'text-app-green-1'
                  : 'hover:text-app-green-1 focus:text-app-green-1',
              ]"
              @click="activeService = item.title"
            >
              {{ item.title }}
            </button>
          </li>
        </ul>
        <!-- END TABS -->
      </div>
      <div class="sm:hidden mb-4">
        <!-- TABS -->
        <div class="md:w-1/2">
          <VueSlickCarousel v-if="services" v-bind="settings">
            <span
              v-for="item in services"
              :key="item.id"
              role="button"
              class="cursor-pointer mx-4"
              @click="activeService = item.title"
            >
              {{ item.title }}
            </span>
          </VueSlickCarousel>
        </div>
        <!-- END TABS -->
      </div>
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
  async fetch() {
    const { store, $axios } = this.$nuxt.context
    const { data } = await $axios('/services')
    store.commit('addServices', data)
  },
  data() {
    const settings = {
      centerMode: true,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
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
}
</script>

<style scoped></style>
