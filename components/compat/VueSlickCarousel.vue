<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    arrows: {
      type: Boolean,
      default: false,
    },
    autoplay: {
      type: [Boolean, Number],
      default: false,
    },
    centerMode: {
      type: Boolean,
      default: false,
    },
    dots: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    slidesToScroll: {
      type: Number,
      default: 1,
    },
    slidesToShow: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    slides() {
      return this.$slots.default?.() || []
    },
    config() {
      return {
        itemsToShow: this.centerMode ? Math.max(1.2, this.slidesToShow) : this.slidesToShow,
        itemsToScroll: this.slidesToScroll,
        wrapAround: this.infinite,
        autoplay: this.autoplay === true ? 3000 : this.autoplay || 0,
      }
    },
  },
  methods: {
    next() {
      this.$refs.carousel?.next()
    },
    prev() {
      this.$refs.carousel?.prev()
    },
    goTo(index) {
      this.$refs.carousel?.slideTo(index)
    },
    pause() {},
    handleSlideStart(event) {
      this.$emit('beforeChange', event.currentSlideIndex, event.slidingToIndex)
    },
  },
}
</script>

<template>
  <Carousel
    ref="carousel"
    v-bind="config"
    class="slick-slider"
    @init="$emit('init')"
    @slide-start="handleSlideStart"
  >
    <Slide v-for="(slide, index) in slides" :key="index">
      <component :is="slide" />
    </Slide>
  </Carousel>
</template>
