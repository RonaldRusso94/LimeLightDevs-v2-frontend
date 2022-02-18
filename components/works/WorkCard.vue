<template>
  <div class="relative cursor-pointer h-56">
    <img
      :src="work.cover.url"
      :alt="work.title"
      draggable="false"
      class="w-full h-full object-cover"
      :class="{ 'rounded-lg': roundedStyle }"
    />
    <div
      class="
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
        duration-100
      "
      :class="{ 'rounded-lg': roundedStyle }"
    >
      <h3 class="mb-4 text-3xl font-bold">{{ work.title }}</h3>
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
        View Site
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
