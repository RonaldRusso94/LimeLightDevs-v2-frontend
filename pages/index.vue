<template>
  <!-- overflow hidden is required for blobs -->
  <div class="lg:overflow-x-hidden">
    <Hero />
    <!-- <Works /> -->
    <section-container :default-margins="false">
      <section-title text="Our Works" />
      <div class="flex flex-wrap rounded-lg">
        <div v-for="work in works" :key="work.id" class="w-1/4 relative group">
          <img class="w-full h-[240px]" :src="work.image" :alt="work.name" />
          <div
            class="
              h-full
              w-full
              opacity-0
              group-hover:opacity-100
              duration-150
              ease-in-out
              bg-black bg-opacity-50
              absolute
              inset-0
              flex
              justify-center
              items-center
            "
          >
            <div class="text-center">
              <h2 class="mb-4 text-3xl font-bold">{{ work.name }}</h2>
              <a href="#" class="bg-white py-2 px-5 text-black rounded-md hover:text-white hover:bg-app-green-1 duration-150 ease-in-out">
                Visit site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section-container>
    <Packages />
    <our-process />
  </div>
</template>

<script>
// import Container from '~/components/common/Container.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'
import SectionTitle from '~/components/common/SectionTitle.vue'
import OurProcess from '~/components/process/OurProcess.vue'
export default {
  components: { SectionTitle, SectionContainer, OurProcess },
  setup() {
    // images shown for works component, should probs be fetched from backend
    // one issue i see for mobile view (that also occurs with the Packages component) is that because the component has w-11/12, it can sometimes look oddly clipped off
    // it's not too great of an issue but just something i noticed
    const works = [
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]
    const projectCount = 52
    return { works, projectCount }
  },
  data() {
    return {
      apiData: null,
      loading: true,
      error: false,
    }
  },
  mounted() {
    this.test()
    console.log(`working`)
  },
  methods: {
    async getData() {
      try {
        const { data } = await this.$axios(`/services`)
        this.loading = false
        console.log('res', data)
        this.apiData = data
      } catch (error) {
        this.error = error
      }
    },
    test() {
      this.$store.dispatch('getServices')
    },
  },
}
</script>

<style></style>
