<template>
  <!-- DESIGN VARIANTS  -->
  <div
    class="mx-auto"
    :class="[
      variant === 'one' ? 'w-10/12 lg:w-9/12 xl:w-4/6 2xl:w-3/5' : '',
      variant === 'two' ? 'w-10/12 lg:w-4/5 xl:w-3/5 2xl:w-7/12' : '',
      defaultMargins ? 'mt-10 md:mt-24' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'one',
    },
    defaultMargins: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
