<template>
  <section-container>
    <div
      class="
        bg-app-gray-2
        rounded-2xl
        shadow-2xl
        mb-24
        lg:mb-40
        flex
        items-center
        flex-col-reverse
      "
      :class="imageLeftSide ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
      <div
        :class="{
          '-translate-x-10': isFlowingOut,
        }"
        class="md:w-7/12 transform -translate-y-16"
      >
        <img
          :src="imageUrl"
          class="
            -mb-8
            object-contain
            select-none
            transform
            origin-bottom
            md:origin-center
            lg:self-start
          "
          draggable="false"
        />
      </div>
      <div
        class="relative z-20 w-full lg:w-5/12 flex flex-col my-12 text-center"
        :class="textAlignStyle"
      >
        <div :class="imageLeftSide ? 'lg:pr-6 lg:pl-16' : 'lg:pl-6 lg:pr-16'">
          <span class="text-4xl block mb-3 tracking-wide font-bold w-full">
            {{ title }}
          </span>
          <p class="text-lg">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section-container>
</template>

<script>
import SectionContainer from '../common/SectionContainer.vue'
export default {
  components: { SectionContainer },
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
    isFlowingOut: {
      type: Boolean,
      default: false,
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
