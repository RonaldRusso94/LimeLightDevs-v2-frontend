<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="(workSlide, index) in workSlides"
      :key="index"
      class="relative px-3 py-2 focus:outline-none"
    >
      <img
        :src="workSlide.imageUrl"
        class="w-full object-cover rounded-xl"
        draggable="false"
      />
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  setup() {
    const workSlides = [
      {
        name: 'Lorem ipsum dolor sit amet',
        imageUrl: '/works/2.jpg',
      },
      {
        name: 'consectetur adipiscing elit',
        imageUrl: '/works/3.jpg',
      },
      {
        name: 'something really really cool!',
        imageUrl: '/works/4.jpg',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
        imageUrl: '/works/2.jpg',
      },
      {
        name: 'consectetur adipiscing elit',
        imageUrl: '/works/3.jpg',
      },
      {
        name: 'something really really cool!',
        imageUrl: '/works/4.jpg',
      },
    ]

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      rows: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
    }

    return {
      workSlides,
      settings,
    }
  },
}
</script>
