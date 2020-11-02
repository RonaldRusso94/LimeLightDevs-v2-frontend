<template>
  <div class="relative h-96">
    <VueSlickCarousel
      ref="carousel"
      v-bind="settings"
      @beforeChange="indexChange"
    >
      <div
        v-for="serviceSlide in serviceSlides"
        :key="serviceSlide.title"
        class="relative h-96 focus:outline-none"
      v-bind="settings"
      ref="carousel"
      @beforeChange="indexChange"
    > </div>
      <div
        class="relative h-96 focus:outline-none"
        v-for="serviceSlide in serviceSlides"
        :key="serviceSlide.title"
      >
        <img
          :src="serviceSlide.imageUrl"
          class="w-full h-96 object-cover"
          draggable="false"
        />
        <div class="absolute bottom-0 py-2 w-full flex flex-col items-center">
          <span
            class="font-bold text-3xl md:text-4xl px-4 md:px-0 mb-2 text-center"
            >{{ serviceSlide.name }}</span
          >
        </div>
      </div>
    </VueSlickCarousel>

    <div class="w-full flex justify-center absolute top-0 mt-6">
      <button
        v-for="(serviceSlide, index) in serviceSlides"
        :key="index"
        class="rounded-full w-3 h-3 focus:outline-none mx-2 hover:bg-white transition duration-500"
        :class="currentIndex === index ? 'bg-white' : 'border-2 border-white'"
        @click="goToIndex(index)"
      />
    </div>
    <ServiceCarouselButton direction="prev" @change-index="changeIndex" />
    <ServiceCarouselButton direction="next" @change-index="changeIndex" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { ref } from '@nuxtjs/composition-api'

export default {
  components: { VueSlickCarousel },
  setup() {
    const serviceSlides = [
      {
        name: 'Hallmar wine & distillery',
        imageUrl:
          'https://images.unsplash.com/photo-1487083990731-52aaad54939a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
        imageUrl:
          'https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80',
      },
      {
        name: 'consectetur adipiscing elit',
        imageUrl:
          'https://images.unsplash.com/photo-1483488792196-78bedff29c21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        name: 'something really really cool!',
        imageUrl:
          'https://images.unsplash.com/photo-1525877089115-11718b6724c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      },
    ]

    const currentIndex = ref(0)

    function indexChange(oldIndex, newIndex) {
      currentIndex.value = newIndex
    }

    function changeIndex(direction) {
      this.$refs.carousel[direction]()
    }

    function goToIndex(newIndex) {
      this.$refs.carousel.goTo(newIndex)
    }

    // carousel settings
    // while vue-slick-carousel did have it's own built in dots and arrows buttons, trying to implement different styles on them was hard
    // so they were taken out entirely and dots and arrows were made that function the same
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
    }

    return {
      serviceSlides,
      settings,
      currentIndex,
      indexChange,
      changeIndex,
      goToIndex,
    }
  },
}

</script>



