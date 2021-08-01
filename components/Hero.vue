<template>
  <div class="w-full text-white flex mb-24 lg:mb-4 xl:mb-[24rem]">
    <img
      src="/greenblob01.png"
      class="
        absolute
        top-0
        right-0
        w-full
        lg:w-2/3
        h-auto
        xl:h-[54rem]
        2xl:h-[65.19rem]
      "
    />
    <img
      src="/projects.png"
      class="hidden lg:block absolute right-0 w-full lg:w-2/5 h-auto"
    />
    <!-- probably be best to just include one image rather than style a bunch on top of each other -->
    <div
      class="
        page-header
        relative
        w-full
        lg:w-1/2
        flex flex-col
        items-center
        lg:items-start
        lg:ml-[3.8rem]
        xl:ml-56
        my-24
        lg:my-36
        pl-0
        lg:pl-8
      "
    >
      <span class="text-6xl md:text-5xl font-hibana mb-4 lg:mb-2"
        >Welcome!</span
      >
      <span
        class="
          text-2xl text-center
          lg:text-left
          sm:text-3xl
          font-hibana
          text-app-green-1
          mb-4
          lg:mb-8
        "
        >Limelight - Software Development</span
      >
      <p class="text-md lg:text-lg w-5/6 mb-8 text-center lg:text-left">
        Extend your empire beyond borders. Leverage the power of next-gen
        digital innovation and scale your ventures to new heights. We at
        Limelight devs, cut to the heart of your software needs, and empower
        your organization with the means to transform your bold ideas into great
        success stories. Whatever your custom software requirements are - we've
        got you covered.
      </p>
      <a
        href="#contact"
        class="
          px-5
          md:px-8
          py-2
          tracking-wider
          font-bold
          text-xl text-app-green-1
          border-2
          transition
          duration-200
          border-app-green-1
          rounded-full
          cursor-pointer
          focus:outline-none
          hover:text-white
          hover:bg-app-green-1
        "
      >
        Contact Us
      </a>

      <!-- a very weird way to style it correctly, but it works -->
      <div
        class="
          flex
          h-full
          items-center
          justify-center
          mt-8
          lg:mt-0
          lg:absolute
          lg:left-0
          pointer-events-none
        "
      >
        <span
          class="
            text-white
            lg:text-app-gray-3
            font-bold
            text-lg
            transform
            lg:-rotate-90 lg:-translate-x-32 lg:-translate-y-10
          "
          >contact@limelight.com</span
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 1700px) {
  .page-header {
    margin-left: 18rem;
  }
}
</style>
