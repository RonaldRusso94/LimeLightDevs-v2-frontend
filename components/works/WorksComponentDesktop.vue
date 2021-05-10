<template>
  <div
    class="hidden lg:flex flex-col mx-auto w-11/12 justify-center shadow-2xl"
  >
    <div
      class="relative flex flex-row justify-start z-10 w-full bg-app-gray-24 mt-16 rounded-t-2xl shadow-2xl"
    >
      <WorkCard
        v-for="(work, index) in works"
        :key="work.name"
        :work="work"
        :roundedStyle="[
          index === 0 ? 'rounded-tl-2xl' : '',
          index === works.length - 1 ? 'rounded-tr-2xl' : '',
        ]"
      />
    </div>
    <a
      href="#works"
      draggable="false"
      class="h-32 bg-app-gray-2 text-center w-full rounded-b-2xl flex justify-center items-center"
    >
      <p class="text-white opacity-100 text-2xl mr-4">
        See all {{ projectCount }} projects
      </p>
      <div
        class="rounded-full w-12 h-12 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 ease-in-out cursor-pointer flex items-center justify-center"
      >
        <Icon name="rightArrow" />
      </div>
    </a>
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
