<template>
  <div v-if="loading"><loading-spinner /></div>
  <div v-else>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(project, index) in projects" :key="index" class="relative px-3 py-2 focus:outline-none">
        <img :src="'/works/3.jpg'" class="w-full object-cover rounded-xl" draggable="false" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import LoadingSpinner from '../common/LoadingSpinner.vue'

export default {
  name: 'MyComponent',
  components: { LoadingSpinner, VueSlickCarousel },
  computed: {
    ...mapState({
      loading: (state) => state.works.loading,
      projects: (state) => state.works.projects,
    }),
  },
  created() {
    this.$store.dispatch('works/getProjects')
  },
  methods: {
    selectProject(projectId) {
      this.$store.commit('works/selectProject', projectId)
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
      adaptiveHeight: false,
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
