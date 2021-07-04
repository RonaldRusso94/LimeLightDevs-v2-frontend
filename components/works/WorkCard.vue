<template>
  <div class="relative cursor-pointer h-full">
    <img
      :src="'/works/6.jpg'"
      :alt="'/works/6.jpg'"
      draggable="false"
      class="w-full h-full object-cover"
      :class="{ 'rounded-lg': roundedStyle }"
    />
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
      :class="{ 'rounded-lg': roundedStyle }"
    >
      <h2 class="mb-4 text-3xl font-bold">{{ work.title }}</h2>
      <button
        class="
          bg-white
          py-2
          px-5
          text-black
          rounded-md
          hover:text-white
          hover:bg-app-green-1
          duration-150
          ease-in-out
        "
        @click="selectProject(work._id)"
      >
        Visit site
      </button>
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
  methods: {
    selectProject(projectId) {
      this.$store.dispatch('works/selectProject', projectId)
    },
  },
}
</script>
