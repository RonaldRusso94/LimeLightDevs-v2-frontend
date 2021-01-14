<template>
  <Container>
    <div
      class="z-10 w-5/6 h-auto lg:h-128 bg-app-gray-2 rounded-2xl shadow-2xl mb-24 lg:mb-40 flex flex-col items-center"
      :class="imageLeftSide ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
      <img
        :src="imageUrl"
        class="w-5/12 lg:max-h-full object-contain select-none transform origin-bottom md:origin-center scale-110 lg:scale-150"
        draggable="false"
      />
      <div
        class="relative z-20 w-full lg:w-1/2 flex flex-col my-12 text-center"
        :class="textAlignStyle"
      >
        <span
          class="text-4xl mb-3 tracking-wide font-bold w-full"
          :class="imageLeftSide ? 'lg:pr-0 lg:pl-16' : 'lg:pl-0 lg:pr-16'"
        >
          {{ title }}
        </span>
        <p
          class="text-lg px-8"
          :class="imageLeftSide ? 'lg:pr-0 lg:pl-16' : 'lg:pl-0 lg:pr-16'"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../Container'
export default {
  components: {
    Container,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageLeftSide: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const textAlignStyle = props.imageLeftSide
      ? 'lg:text-left'
      : 'lg:text-right'

    return { textAlignStyle }
  },
}
</script>
