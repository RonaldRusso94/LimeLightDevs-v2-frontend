<template>
  <VueSlickCarousel v-bind="settings">
    <WorkCard
      v-for="work in projects"
      :key="work.id"
      class="transform element scale-90"
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
      dots: false,
      arrows: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '60px',
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

<style>
.slick-active .element {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
}
.slick-arrow.slick-next {
  width: 50px;
  background: linear-gradient(
    0.25turn,
    rgba(27, 27, 27, 0.1),
    rgb(27, 27, 27) 74%
  );
  height: 100%;
}
.slick-next:before {
  content: '';
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-bottom: none;
  border-left: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.slick-arrow.slick-prev {
  width: 50px;
  background: linear-gradient(
    -0.25turn,
    rgba(27, 27, 27, 0.1),
    rgb(27, 27, 27) 74%
  );
  z-index: 111;
  height: 100%;
}
.slick-prev:before {
  content: '';
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
