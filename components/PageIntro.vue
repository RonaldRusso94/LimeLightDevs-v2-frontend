<template>
  <div>
    <div
      class="
        relative
        lg:w-1/2
        flex flex-col
        items-start
        lg:ml-56
        my-24
        lg:my-36
        pl-8
        lg:pl-0
      "
    >
      <span class="text-6xl md:text-5xl font-hibana mb-4 lg:mb-2">{{
        title
      }}</span>
      <span
        :class="[title === 'Welcome!' ? 'block' : 'hidden']"
        class="text-3xl font-hibana text-app-green-1 mb-4 lg:mb-8"
        >Limelight - Web Developing</span
      >
      <p class="text-md lg:text-lg w-5/6 mb-8">
        {{ desc }}
      </p>
      <Button variant="variant1"> Contact Us </Button>
      <div
        class="
          flex
          h-full
          items-center
          justify-center
          mt-8
          lg:mt-0
          lg:absolute
          lg:left-0
          pointer-events-none
        "
      >
        <span
          :class="[title === 'Welcome!' ? 'block' : 'hidden']"
          class="
            text-app-gray-3
            font-bold
            text-lg
            transform
            lg:-rotate-90 lg:-translate-x-32 lg:-translate-y-10
          "
          >limelightdevs@gmail.com</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from './common/Button'

export default {
  components: {
    Button,
  },
  props: {
    title: String,
    desc: String,
  },
}
</script>

<style></style>
