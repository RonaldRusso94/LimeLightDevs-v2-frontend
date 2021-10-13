<template>
  <!-- Logo should link to home -->
  <nuxt-link to="/" class="flex items-center cursor-pointer tracking-tighter">
    <lime-light-logo class="h-10 md:h-12 mr-4" />
    <div class="flex items-end">
      <p class="font-bold text-4xl text-app-green-1">Lime</p>
      <p class="text-4xl text-app-green-1">Light</p>
      <p class="ml-2 text-app-green-1 opacity-75">Devs</p>
    </div>
  </nuxt-link>
</template>
<script>
import LimeLightLogo from '~/static/LimeLightLogo.vue'
export default {
  components: { LimeLightLogo },
}
</script>
<style></style>
