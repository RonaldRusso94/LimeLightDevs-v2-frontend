<template>
  <footer
    class="
      mt-auto
      px-0
      sm:px-4
      md:px-12
      lg:px-24
      py-6
      sm:py-10
      text-white
      absolute
      bottom-0
      w-full
    "
  >
    <!-- a text replica of the logo, probably want to replace it with an img, this way it can scale better as well -->
    <div
      class="
        flex flex-col
        sm:flex-row
        items-center
        justify-center
        sm:justify-between
        pb-5
        border-b border-white
      "
    >
      <div
        class="
          flex
          items-end
          justify-center
          text-[25]
          sm:text-[50px]
          tracking-wide
          text-app-green-1
        "
      >
        <span class="font-bold">Lime</span>
        <span class="tracking-wide">light</span>
        <span class="pl-2 text-xs sm:text-lg">devs</span>
      </div>
      <div
        class="
          flex
          justify-between
          text-[12px] text-[#CFCFCF]
          sm:text-[24px]
          capitalize
          tracking-wide
        "
      >
        <div><nuxt-link to="/"> Home </nuxt-link></div>
        <div class="mx-3">/</div>
        <div><nuxt-link to="/services"> services </nuxt-link></div>
        <div class="mx-3">/</div>
        <div><nuxt-link to="/works"> Works </nuxt-link></div>
        <div class="mx-3">/</div>
        <div><nuxt-link to="/packages"> Packages </nuxt-link></div>
      </div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <div class="text-[8px] sm:text-[20px] text-[#a3a3a3] font-medium">
        © Copyright 2020 | Limelight Devs
      </div>
      <div class="flex justify-between w-4/10 sm:w-2/10">
        <div class="w-[16px] h-[16px] sm:w-[42px] sm:h-[42px]">
          <img
            class="w-full h-full object-contain"
            src="/social-icons/icons8-facebook 1.png"
            alt=""
          />
        </div>
        <div class="w-[16px] h-[16px] sm:w-[42px] sm:h-[42px]">
          <img
            class="w-full h-full object-contain"
            src="/social-icons/icons8-github 1.png"
            alt=""
          />
        </div>
        <div class="w-[16px] h-[16px] sm:w-[42px] sm:h-[42px]">
          <img
            class="w-full h-full object-contain"
            src="/social-icons/icons8-twitter 1.png"
            alt=""
          />
        </div>
        <div class="w-[16px] h-[16px] sm:w-[42px] sm:h-[42px]">
          <img
            class="w-full h-full object-contain"
            src="/social-icons/instagram 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
