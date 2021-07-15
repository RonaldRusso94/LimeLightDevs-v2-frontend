<template>
  <nav class="hidden lg:block">
    <ul class="flex space-x-12 items-center">
      <!-- Change text colors once color theme is added -->
      <li v-for="link in navLinks" :key="link.name">
        <nuxt-link
          v-if="!link.button"
          :to="link.href"
          class="
            font-bold
            hover:text-app-green-1
            transition
            ease-in-out
            duration-300
          "
          active-class="text-app-green-1"
          >{{ link.name }}</nuxt-link
        >
        <Button
          v-else
          class="
            px-5
            py-1
            text-app-gray-1
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
        >
          <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
        </Button>
      </li>
    </ul>
  </nav>
</template>
<script>
import Button from '../common/Button.vue'
export default {
  props: {
    Button,
    navLinks: {
      type: Object,
      default: () => {
        return {
          services: {
            name: 'Services',
            href: 'services',
          },
          packages: {
            name: 'Packages',
            href: 'packages',
          },
          works: {
            name: 'Works',
            href: 'works',
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
}
</script>
<style></style>
