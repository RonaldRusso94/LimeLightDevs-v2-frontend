<template>
  <div class="min-h-screen overflow-hidden text-white bg-app-gray-1 relative">
    <NavBar />
    <div :style="`padding-bottom:${footerHeight}px; padding-top: 100px;`">
      <Nuxt />
      <Contact />
      <!-- blob background (found in Contact) -->
      <div class="relative mt-auto">
        <img
          draggable="false"
          class="absolute bottom-0 right-0 select-none"
          src="/contact/blackblob.png"
        />
        <img
          draggable="false"
          class="absolute bottom-0 left-0 select-none"
          src="/contact/greenblob04.png"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { onMounted, ref } from '@nuxtjs/composition-api'
import Footer from '~/components/layout/Footer.vue'

export default {
  components: { Footer },
  setup() {
    const footerHeight = ref(0)
    function setFooterHeight() {
      const footer = document.querySelector('footer').offsetHeight
      footerHeight.value = footer
    }
    onMounted(() => {
      window.addEventListener('resize', setFooterHeight)
      // here we want the footer to always be at the bottom so we set the padding bottom equal to it's height
      if (document.querySelector('footer'))
        footerHeight.value = document.querySelector('footer').offsetHeight
    })
    return {
      footerHeight,
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@font-face {
  font-family: 'Hibana';
  src: local('Hibana'), url(~static/fonts/Hibana-SubMedium.otf);
}
html {
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.28s ease;
}

.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}
.appear-in {
  animation: 0.5s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
