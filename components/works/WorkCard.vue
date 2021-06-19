<template>
  <div class="relative cursor-pointer h-full">
    <img :src="'/works/3.jpg'" :alt="'/works/3.jpg'" draggable="false" class="w-full h-full object-cover" :class="roundedStyle" />
    <div
      class="
        bg-opacity-0
        hover:bg-opacity-75
        opacity-0
        hover:opacity-100
        flex flex-col
        items-center
        justify-center
        absolute
        top-0
        p-6
        text-center
        w-full
        h-full
        border-black
        z-50
        bg-black bg-opacity-50
        transition
        duration-300
      "
      :class="roundedStyle"
    >
      <h2 class="mb-4 text-3xl font-bold">{{ work.title }}</h2>
      <!-- <p class="text-black text-xl mt-4 mb-16">{{ work.title }}</p> -->
      <!-- <icon name="rightArrow" /> -->
      <a href="#" class="bg-white py-2 px-5 text-black rounded-md hover:text-white hover:bg-app-green-1 duration-150 ease-in-out"> Visit site </a>
    </div>
  </div>
</template>

<script>
// import Icon from '~/components/misc/Icon'
export default {
  components: {
    // Icon,
  },
  props: {
    work: {
      type: Object,
      required: true,
    },
    roundedStyle: {
      type: Boolean,
      required: false,
    },
  },
}
</script>
