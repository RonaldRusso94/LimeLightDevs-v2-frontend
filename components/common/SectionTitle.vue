<template>
  <h2
    class="
      mb-7
      text-4xl
      font-semibold
      tracking-wide
      text-left
      md:text-5xl
      relative
      z-[3]
      section-title
    "
  >
    <slot>{{ text }}</slot>
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style>
.section-title {
  text-shadow: 0px 4px 50px rgba(0, 0, 0, 0.54);
}
</style>
