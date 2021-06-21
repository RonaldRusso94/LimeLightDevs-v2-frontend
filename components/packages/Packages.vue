<template>
  <section-container class="mb-56">
    <div class="md:flex justify-between items-center mb-4">
      <section-title
        class="mb-3 text-4xl font-semibold tracking-wide text-left 2xl:text-5xl"
        >Our Packages</section-title
      >
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
          <a
            class="cursor-pointer text-lg"
            :class="[
              getActiveServices.title === item.title ? 'text-app-green-1' : '',
            ]"
            @click="activeService = item.title"
            >{{ item.title }}
          </a>
        </li>
      </ul>
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
          :isFirstItem="index === 0"
          :isLastItem="index === getActiveServices.packages.length - 1"
          :isCarousel="false"
        />
      </div>
    </div>
  </section-container>
</template>

<script>
import SectionContainer from '../common/SectionContainer.vue'
import SectionTitle from '../common/SectionTitle.vue'
import PackagesCarousel from './PackagesCarousel.vue'
import ServiceCard from './ServiceCard.vue'
export default {
  components: {
    SectionContainer,
    SectionTitle,
    PackagesCarousel,
    ServiceCard,
  },
  data() {
    return {
      activeService: 'Web Development',
    }
  },
  computed: {
    getActiveServices() {
      if (this.services != null) {
        return this.services.find((item) => {
          if (item.title === this.activeService) {
            console.log(item)
            console.log(`item.title`, item.title)
            return true
          }
          return false
        })
      } else return null
    },
    services() {
      console.log(`this.$store.getters.services`, this.$store.getters.services)
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
