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
      <div>
        <nav-logo />
      </div>
      <div
        class="
          flex
          justify-between
          text-[12px] text-[#CFCFCF]
          sm:text-[20px]
          capitalize
          tracking-wide
        "
      >
        <div>
          <nuxt-link class="hover:text-app-green-1 duration-150" to="/">
            Home
          </nuxt-link>
        </div>
        <div class="mx-3">/</div>
        <div>
          <nuxt-link class="hover:text-app-green-1 duration-150" to="/services">
            services
          </nuxt-link>
        </div>
        <div class="mx-3">/</div>
        <div>
          <nuxt-link class="hover:text-app-green-1 duration-150" to="/works">
            Works
          </nuxt-link>
        </div>
        <div class="mx-3">/</div>
        <div>
          <nuxt-link class="hover:text-app-green-1 duration-150" to="/packages">
            Packages
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center mt-5">
      <div
        class="text-[8px] sm:text-[15px] text-[#a3a3a3] font-medium text-center"
      >
        <ul class="flex mb-2">
          <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
          <li class="mx-1">|</li>
          <li>
            <nuxt-link to="/terms-conditions">Terms & Conditions</nuxt-link>
          </li>
        </ul>
        © Copyright 2022 Limelight Devs
      </div>
    </div>
  </footer>
</template>

<script>
import NavLogo from '../NavBar/NavLogo.vue'
export default {
  components: {
    NavLogo,
  },
}
</script>
