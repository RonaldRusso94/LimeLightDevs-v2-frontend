<template>
  <!-- Logo should link to home -->
  <nuxt-link to="/" class="flex items-end cursor-pointer tracking-tighter">
    <lime-light-logo class="h-12" />
    <p class="font-bold text-4xl text-app-green-1">Lime</p>
    <p class="text-4xl text-app-green-1">Light</p>
    <p class="pl-4 text-app-green-1 opacity-75">Devs</p>
  </nuxt-link>
</template>
<script>
import LimeLightLogo from '~/static/contact/LimeLightLogo.vue'
export default {
  components: { LimeLightLogo },
}
</script>
<style></style>
