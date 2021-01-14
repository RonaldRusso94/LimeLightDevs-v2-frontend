<template>
  <button
    :class="[
      variant === 'one' ? '' : '',
      variant === 'two'
        ? 'px-2 py-2 lg:px-2 w-full text-app-green-1 text-sm lg:text-lg hover:bg-app-green-1 hover:text-white border-app-green-1'
        : '',
      variant === 'inverse'
        ? 'px-5 py-1 text-app-gray-1 bg-app-green-1 hover:text-app-green-1 hover:bg-app-gray-1 border-app-green-1'
        : '',
    ]"
    class="rounded-full font-bold transition duration-300 border-2 outline-none"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'one',
    },
  },
}
</script>
