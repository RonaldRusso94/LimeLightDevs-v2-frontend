<template>
  <div>
    <div
      class="absolute right-0 top-28 hidden lg:block w-7/12 md:w-5/12 lg:w-2/6"
    >
      <img
        class="block w-full h-full transform"
        src="/greenblob02.png"
        alt=""
      />
    </div>
    <div
      class="
        page-header
        text-white
        w-full
        lg:w-5/12
        flex flex-col
        items-center
        lg:items-start
        mt-12
        mb-14
        lg:mb-28
        text-center
        lg:text-left
        ml-0
        lg:ml-16
        pl-0
        lg:pl-10
        xl:pl-8
        2xl:pl-24
      "
    >
      <span class="text-4xl md:text-5xl font-hibana px-8 lg:px-0 z-20">{{
        pageTitle
      }}</span>
      <p class="text-lg px-8 lg:px-0 mt-2 mb-10 tracking-wide z-20">
        {{ description }}
      </p>
      <nuxt-link
        v-if="link"
        :to="link"
        class="
          mx-8
          lg:mx-0
          px-5
          md:px-8
          py-2
          tracking-wider
          font-bold
          text-xl text-app-green-1
          border-2 border-app-green-1
          rounded-full
          cursor-pointer
          focus:outline-none
          hover:text-white
          hover:bg-app-green-1
        "
      >
        {{ linkTitle }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    pageTitle: String,
    description: String,
    link: String,
    linkTitle: String,
  },
}
</script>
<style scoped>
@media (min-width: 1700px) {
  .page-header {
    margin-left: 11rem;
  }
}
</style>
