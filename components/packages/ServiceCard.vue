<template>
  <div
    :class="[
      isCarousel ? 'rounded-2xl' : '',
      !isCarousel & isFirstItem ? 'rounded-l-2xl' : '',
      !isCarousel & isLastItem ? 'rounded-r-2xl' : '',
    ]"
    class="
      w-3/12
      bg-app-gray-2
      flex flex-col
      text-center
      items-center
      justify-between
      px-8
      2xl:px-10
      py-8
      shadow-2xl
      z-10
    "
  >
    <img class="mb-6 mx-auto" src="/packages/desktop.png" alt="desktop.png" />
    <h1 class="font-bold text-2xl mb-2">{{ service.title }}</h1>
    <p class="mb-4">
      {{ service.description }}
    </p>
    <div>
      <div v-for="obj in service.details" :key="obj.id" class="mx-auto">
        <p class="text-gray-300">{{ obj.value }}</p>
      </div>
    </div>
    <div class="flex services-center my-2 justify-center">
      <p class="mr-4 line-through text-gray-400 font-medium text-2xl">
        ${{ service.oldPrice }}
      </p>
      <p class="text-3xl font-bold text-app-green-1">${{ service.newPrice }}</p>
    </div>
    <Button variant="two">Order Package</Button>
    <p class="mt-4">
      Edit request?
      <a class="font-medium text-app-green-1" href="#contact">Contact us</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default: null,
    },
    isFirstItem: Boolean,
    isLastItem: Boolean,
    isCarousel: Boolean,
  },
}
</script>

<style></style>
