<template>
  <VueSlickCarousel v-bind="settings">
    <WorkCard
      v-for="work in projects"
      :key="work.id"
      :work="work"
      :rounded-style="true"
    />
  </VueSlickCarousel>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import WorkCard from './WorkCard.vue'

export default {
  name: 'WorkCarousel',
  components: { VueSlickCarousel, WorkCard },
  data() {
    const settings = {
      centerMode: true,
      dots: false,
      arrows: true,
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
  computed: {
    ...mapState({
      projects: (state) => state.works.projects,
    }),
  },
}
</script>
