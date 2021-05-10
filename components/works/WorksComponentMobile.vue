<template>
  <div class="lg:hidden flex w-11/12 mx-auto my-4">
    <div class="w-full overflow-x-auto z-30 flex p-3">
      <div
        v-for="(work, id) in works"
        :key="id"
        class="mr-12 shadow-2xl rounded-2xl min-w-128"
      >
        <a :href="work.url" class="relative h-full w-full">
          <img
            :src="work.image"
            :alt="work.image"
            draggable="false"
            class="w-full h-full object-cover rounded-2xl"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
    projectCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
