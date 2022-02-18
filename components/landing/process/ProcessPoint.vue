<template>
  <div class="flex items-center lg:flex-col relative z-20">
    <div class="flex justify-center">
      <div
        class="
          rounded-full
          h-24
          w-24
          bg-app-gray-2
          flex
          items-center
          justify-center
        "
      >
        <img class="w-20" :src="src" alt="" />
      </div>
    </div>
    <div class="lg:text-center ml-6 lg:ml-0 lg:mt-10">
      <h3 class="font-bold text-2xl mb-1">{{ subhead }}</h3>
      <p class="max-w-xs xl:px-8">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    subhead: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
