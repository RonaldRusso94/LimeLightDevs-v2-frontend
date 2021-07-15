<template>
  <nav class="lg:hidden">
    <!-- Drawer bg overlay -->
    <div
      class="
        absolute
        bg-black
        transition-all
        ease-in-out
        duration-500
        opacity-0
        h-screen
        z-20
      "
      :class="{ 'opacity-50': isHamburgerActive }"
    ></div>
    <!-- Navigation drawer -->
    <aside
      v-click-outside="onClickOutside"
      :class="isHamburgerActive ? 'translate-x-0' : 'translate-x-full'"
      class="
        transform
        top-0
        bottom-0
        right-0
        w-8/12
        md:w-5/12
        bg-app-gray-1
        fixed
        h-screen
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
      "
    >
      <ul class="flex flex-col h-full items-center justify-center align-center">
        <li v-for="link in navLinks" :key="link.name" class="my-3">
          <nuxt-link
            v-if="!link.button"
            :to="link.href"
            class="
              text-xl
              font-bold
              hover:text-app-green-1
              transition
              duration-200
            "
            @click.native="onClickHandler"
          >
            {{ link.name }}
          </nuxt-link>
          <button
            v-else
            class="
              px-5
              py-1
              text-xl text-app-gray-1
              font-bold
              rounded-full
              bg-app-green-1
              hover:text-app-green-1
              hover:bg-app-gray-1
              border-2 border-app-green-1
              transition-all
              ease-in-out
              duration-200
              focus:outline-none
            "
            @click="onClickHandler"
          >
            <a :href="link.href">{{ link.name }}</a>
          </button>
        </li>
      </ul>
    </aside>
    <!-- Hamburger menu -->
    <div class="relative z-40 cursor-pointer" @click.prevent="toggleMenu">
      <span
        class="
          block
          bg-white
          w-6
          h-1
          my-1
          mx-auto
          transition-all
          ease-in-out
          duration-300
        "
        :class="{ 'transform translate-y-2 rotate-45': isHamburgerActive }"
      ></span>
      <span
        class="block bg-white w-6 h-1 my-1 mx-auto ease-in-out duration-300"
        :class="{ 'opacity-0': isHamburgerActive }"
      ></span>
      <span
        id="close-button"
        class="block bg-white w-6 h-1 my-1 mx-auto ease-in-out duration-300"
        :class="{ 'transform -translate-y-2 -rotate-45': isHamburgerActive }"
      ></span>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    navLinks: {
      type: Object,
      default: () => {
        return {
          services: {
            name: 'Services',
            href: '#services',
          },
          packages: {
            name: 'Packages',
            href: '#packages',
          },
          works: {
            name: 'Works',
            href: '#works',
          },
          contactus: {
            name: 'Contact Us',
            href: '#contact',
            button: true,
          },
        }
      },
    },
  },
  data: () => ({
    isHamburgerActive: false,
  }),
  methods: {
    toggleMenu() {
      this.isHamburgerActive = !this.isHamburgerActive
      this.toggleBodyClass(this.isHamburgerActive, 'overflow-hidden')
    },
    toggleBodyClass(isAdd, className) {
      const el = document.body
      if (isAdd) {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
    onClickOutside(event) {
      if (event.target.id !== 'close-button') {
        this.isHamburgerActive = false
        this.toggleBodyClass(this.isHamburgerActive, 'overflow-hidden')
      }
    },
    onClickHandler(event) {
      this.isHamburgerActive = false
      this.toggleBodyClass(this.isHamburgerActive, 'overflow-hidden')
    },
  },
}
</script>
<style></style>
