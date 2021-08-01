<template>
  <div class="md:flex justify-between items-center mb-4">
    <h3
      class="
        mb-3
        text-4xl
        font-semibold
        tracking-wide
        text-left
        2xl:text-5xl
        lg:mb-0
      "
    >
      Our Packages
    </h3>
    <!-- TABS -->
    <ul class="flex justify-end font-bold mr-4 space-x-4 text-md lg:space-x-12">
      <li v-for="item in data" :key="item.title">
        <a
          class="cursor-pointer text-lg"
          :class="[
            getActiveServices[0].title === item.title ? 'text-app-green-1' : '',
          ]"
          @click="activeService = item.title"
          >{{ item.title }}
        </a>
      </li>
    </ul>
    <!-- END TABS -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
