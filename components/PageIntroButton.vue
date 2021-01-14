<template>
  <div>
    <a
      href="#contact"
      class="px-5 md:px-8 py-2 tracking-wider font-bold text-xl text-app-green-1 border-2 transition duration-200 border-app-green-1 rounded-full cursor-pointer focus:outline-none hover:text-white hover:bg-app-green-1"
    >
      {{ buttonText }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
}
</script>

<style></style>
