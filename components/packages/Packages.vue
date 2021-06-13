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
        class="flex justify-end font-bold mr-4 space-x-4 text-md lg:space-x-12"
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
      <mobile-carousel class="lg:hidden" />
      <div class="hidden lg:flex justify-center space-x-1">
        <div
          v-for="(item, index) in getActiveServices.packages"
          :key="item.id"
          :class="[
            index === 0 ? 'rounded-l-2xl' : '',
            index === getActiveServices.packages.length - 1
              ? 'rounded-r-2xl'
              : '',
          ]"
          class="
            w-3/12
            bg-app-gray-2
            flex flex-col
            text-center
            items-center
            justify-between
            px-8
            2xl:px-10
            py-8
            shadow-2xl
          "
        >
          <img class="mb-6" src="packages/desktop.png" alt="desktop.png" />
          <h1 class="font-bold text-2xl mb-2">{{ item.title }}</h1>
          <p class="mb-4">
            {{ item.description }}
          </p>
          <div>
            <div v-for="obj in item.details" :key="obj.id" class="">
              <p class="text-gray-300">{{ obj.value }}</p>
            </div>
          </div>
          <div class="flex items-center my-2">
            <p class="mr-4 line-through text-gray-400 font-medium text-2xl">
              ${{ item.oldPrice }}
            </p>
            <p class="text-3xl font-bold text-app-green-1">
              ${{ item.newPrice }}
            </p>
          </div>
          <Button variant="two">Order Package</Button>
          <p class="mt-4">
            Edit request?
            <a class="font-medium text-app-green-1" href="/#contact"
              >Contact us</a
            >
          </p>
        </div>
      </div>
    </div>
  </section-container>
</template>

<script>
import MobileCarousel from '../carousel/MobileCarousel.vue'
import Button from '../common/Button.vue'
import SectionContainer from '../common/SectionContainer.vue'
import SectionTitle from '../common/SectionTitle.vue'
export default {
  components: { Button, SectionContainer, MobileCarousel, SectionTitle },
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
