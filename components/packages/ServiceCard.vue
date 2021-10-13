<template>
  <div
    :class="[
      isCarousel ? 'rounded-2xl' : '',
      !isCarousel && isFirstItem ? 'rounded-l-2xl' : '',
      !isCarousel && isLastItem ? 'rounded-r-2xl' : '',
      !isCarousel && !isLastItem ? 'border-r-2 border-app-gray-1' : '',
    ]"
    class="
      lg:w-3/12
      bg-app-gray-2
      flex flex-col
      text-center
      items-center
      px-2
      sm:px-4
      py-10
      2xl:px-10
      z-10
      md:min-h-[590px]
    "
  >
    <div class="flex flex-col">
      <img class="mb-8 mx-auto" src="/packages/desktop.png" alt="desktop.png" />
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-col mb-auto">
        <h1 class="font-bold text-2xl mb-2">{{ service.title }}</h1>
        <p class="mb-4">
          {{ service.description }}
        </p>
      </div>
      <div class="flex flex-col my-auto">
        <div v-for="obj in service.details" :key="obj.id" class="mx-auto">
          <p class="text-gray-300">{{ obj.value }}</p>
        </div>
      </div>
      <div class="flex flex-col mt-auto">
        <div class="flex services-center my-2 justify-center">
          <p class="mr-4 line-through text-gray-400 font-medium text-2xl">
            ${{ service.oldPrice }}
          </p>
          <p class="text-3xl font-bold text-app-green-1">
            ${{ service.newPrice }}
          </p>
        </div>
        <a
          href="#contact"
          class="
            hover:text-app-green-1
            duration-200
            transform
            transition
            hover:scale-125
          "
          variant="two"
          @click.stop="
            $store.commit('setContact', {
              message: `I'd like to order the ${service.title} package.`,
              reason: `${service.title} Package.`,
            })
          "
          >Order Package</a
        >
        <div
          class="flex md:flex-row space-x-2 mt-4 justify-center items-center"
        >
          <p class="">Edit request?</p>
          <a
            class="
              font-medium
              text-app-green-1
              transform
              transition
              duration-300
              hover:scale-110
            "
            href="#contact"
            @click.stop="
              $store.commit('setContact', {
                message: `I'd like to order the ${service.title} package.`,
                reason: `${service.title} Package.`,
              })
            "
            >Contact us</a
          >
        </div>
      </div>
    </div>
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
