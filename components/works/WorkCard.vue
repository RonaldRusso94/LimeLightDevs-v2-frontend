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
        bg-white
        transition
        duration-300
      "
      :class="roundedStyle"
    >
      <p class="text-black text-3xl hover:underline">{{ work.title }}</p>
      <!-- <p class="text-black text-xl mt-4 mb-16">{{ work.title }}</p> -->
      <icon name="rightArrow" />
    </div>
  </div>
</template>

<script>
import Icon from '~/components/misc/Icon'
export default {
  components: {
    Icon,
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

// :class="[
//   index === 0 ? 'rounded-tl-2xl' : '',
//   index === images.length - 1 ? 'rounded-tr-2xl' : '',
// ]"
</script>
