<template>
  <div class="min-h-screen text-white bg-app-gray-1 relative">
    <NavBar />
    <div :style="`padding-bottom:${footerHeight}px`">
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
          src="/contact/greenblob.png"
        />
        <img
          draggable="false"
          class="absolute bottom-0 right-0 select-none"
          src="/contact/blackblob.png"
        />
        <img
          draggable="false"
          class="absolute bottom-0 left-0 select-none"
          src="/contact/greenblob.png"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { onMounted, ref } from '@nuxtjs/composition-api'
export default {
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
</style>
