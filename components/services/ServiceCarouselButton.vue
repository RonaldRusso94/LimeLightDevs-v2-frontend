<template>
  <div
    class="
      absolute
      inset-y-0
      h-full
      flex
      justify-center
      items-center
      text-black text-4xl
      select-none
    "
    :class="direction === 'prev' ? 'left-0 ml-4' : 'right-0 mr-4'"
    draggable="false"
  >
    <div
      class="
        rounded-full
        w-12
        h-12
        bg-white bg-opacity-75
        cursor-pointer
        flex
        items-center
        justify-center
        hover:bg-opacity-100
        transition
        duration-200
        ease-in-out
      "
      @click.stop="$emit('change-index', direction)"
    >
      <icon :name="symbol" />
    </div>
  </div>
</template>

<script>
import Icon from '../misc/Icon.vue'
export default {
  components: { Icon },
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // probably want to use proper icons
    const symbol = props.direction === 'prev' ? 'leftArrow' : 'rightArrow'

    return { symbol }
  },
}
</script>
