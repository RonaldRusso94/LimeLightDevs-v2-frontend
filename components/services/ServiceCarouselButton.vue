<template>
  <div
    class="absolute inset-y-0 h-full flex justify-center items-center text-black text-4xl select-none"
    :class="direction === 'prev' ? 'left-0 ml-4' : 'right-0 mr-4'"
    draggable="false"
  >
    <span
      class="rounded-full w-12 h-12 bg-white bg-opacity-75 cursor-pointer flex items-center justify-center hover:bg-opacity-100 transition duration-200 ease-in-out"
      @click.stop="$emit('change-index', direction)"
    >
      {{ symbol }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    direction: String,
  },
  setup(props) {
    const symbol = props.direction === 'prev' ? '<' : '>'

    return { symbol }
  },
}
</script>




