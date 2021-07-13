<template>
  <div>
    <div
      class="
        container
        fixed
        bg-app-gray-2
        navbar
        py-8
        px-6
        xl:px-48
        2xl:px-4
        -mt-32
      "
      :class="{ 'navbar--unpinned': scrolled, 'shadow-xl': scrolled }"
    >
      <!-- so navbar always takes priority, will actually be absolute in the future for a few reasons -->
      <div class="flex items-center justify-between relative z-40">
        <NavLogo />
        <NavDesktop :nav-links="navLinks" />
        <NavMobile :nav-links="navLinks" />
      </div>
    </div>
    <div class="container navbar py-8 px-6 xl:px-48 2xl:px-4">
      <!-- so navbar always takes priority, will actually be absolute in the future for a few reasons -->
      <div class="flex items-center justify-between relative z-40">
        <NavLogo />
        <NavDesktop :nav-links="navLinks" />
        <NavMobile :nav-links="navLinks" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    navLinks: {
      services: {
        name: 'Services',
        href: '/services',
      },
      packages: {
        name: 'Packages',
        href: '/packages', // packages are located on home page
      },
      works: {
        name: 'Works',
        href: '/works',
      },
      contactus: {
        name: 'Contact Us',
        href: '#contact',
        button: true,
      },
    },
    limitPosition: 50,
    scrolled: false,
    lastPosition: 0,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.limitPosition < window.scrollY) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }

      this.lastPosition = window.scrollY
    },
  },
}
</script>
<style>
.navbar {
  z-index: 29;
  padding-right: 4%;
  padding-left: 4%;
  max-width: 100%;
  transition: all 0.4s ease;
}
.navbar--pinned {
  transform: translateY(0%);
}
.navbar--unpinned {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 0rem;
}
</style>
