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
      <div class="sm:hidden mb-6 -mx-6">
        <!-- TABS -->
        <div class="md:w-1/2 bg-app-gray-2 relative">
          <div
            class="
              bg-gradient-to-l
              from-transparent
              to-app-gray-2
              absolute
              -left-5
              w-16
              z-20
              h-full
            "
          ></div>
          <div
            class="
              bg-gradient-to-r
              from-transparent
              to-app-gray-2
              absolute
              -right-5
              w-16
              z-20
              h-full
            "
          ></div>
          <VueSlickCarousel
            v-if="services"
            ref="carousel"
            v-bind="settings"
            @init="initSlides"
            @beforeChange="slideChange"
          >
            <span
              v-for="(item, index) in services"
              :key="item.id"
              role="button"
              class="cursor-pointer py-3 lg:py-0 duration-150"
              :class="{
                'text-right': lastIndex == index,
                'text-left': nextIndex == index,
                'opacity-50': activeService !== item.title,
                'text-center': activeService === item.title,
              }"
              @click="selectService(item, index)"
            >
              {{ item.title }}
            </span>
          </VueSlickCarousel>
        </div>
        <!-- END TABS -->
      </div>
    </div>

    <div v-if="getActiveServices != null" class="-mx-6">
      <div class="lg:hidden">
        <packages-carousel :services="[...getActiveServices.packages]" />
      </div>
      <div class="hidden lg:flex justify-center shadow-2xl">
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
      speed: 500,
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      pauseOnFocus: true,
      pauseOnHover: true,
      centerMode: true,
      centerPadding: '70px',
      autoplay: false,
      // variableWidth: true,
      slidesToScroll: 1,
    }

    return {
      settings,
      lastIndex: null,
      currentIndex: null,
      nextIndex: null,
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
    this.$refs.carousel.pause()
  },
  methods: {
    slideChange(oldIndex, currentIndex) {
      this.currentIndex = currentIndex
      this.nextIndex =
        currentIndex === this.services.length ? 0 : currentIndex + 1
      this.lastIndex = oldIndex
      this.activeService = this.services[currentIndex].title
    },
    selectService(item, index) {
      this.activeService = item.title
      this.$refs.carousel.goTo(index)
    },
    initSlides() {
      this.currentIndex = this.services
        .map((x) => x.title)
        .indexOf(this.activeService)
      this.nextIndex =
        this.currentIndex === this.services.length ? 0 : this.currentIndex + 1
      this.lastIndex =
        this.currentIndex === 0
          ? this.services.length - 1
          : this.currentIndex - 1
    },
  },
}
</script>

<style scoped></style>
