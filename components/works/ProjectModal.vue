<template>
  <div>
    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <h1 class="text-2xl">Project Detail</h1>
      </template>

      <template v-if="project" v-slot:body>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="left-side">
            <div>
              <h2
                class="
                  text-xl
                  font-semibold
                  text-white text-center
                  sm:text-2xl
                  sm:leading-7
                  md:text-3xl
                  mb-3
                "
              >
                {{ project.title }}
              </h2>
              <p class="text-center text-base mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div class="text-right">
                <a
                  href="/"
                  target="_blank"
                  class="
                    px-3
                    py-1
                    font-bold
                    text-md text-app-green-1
                    border-2
                    transition
                    duration-200
                    border-app-green-1
                    rounded-full
                    cursor-pointer
                    focus:outline-none
                    hover:bg-app-green-1 hover:bg-opacity-5
                  "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <VueSlickCarousel v-bind="settings">
            <div
              v-for="(image, index) in [1, 2, 3]"
              :key="index"
              class="relative px-3 py-2 focus:outline-none"
            >
              <img
                :src="'/works/3.jpg'"
                class="object-cover rounded-xl h-60 mx-auto"
                draggable="false"
              />
            </div>
          </VueSlickCarousel>
        </div>
        <div class="mt-8">
          <h2 class="text-xl font-semibold text-white sm:leading-7 mb-3">
            Technologies
          </h2>
          <div>
            <button
              v-for="item in project.technologies"
              :key="item._id"
              class="
                m-1
                px-3
                md:px-3
                py-1
                tracking-wider
                font-bold
                text-sm text-app-green-1
                border-2
                transition
                duration-200
                border-app-green-1
                rounded-lg
                cursor-pointer
                focus:outline-none
                hover:text-white
                hover:bg-app-green-1
              "
            >
              {{ item.technology }}
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Modal from '../common/BaseModal.vue'

export default {
  components: { VueSlickCarousel, Modal },
  data() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
    }

    return {
      settings,
    }
  },
  computed: {
    isModalVisible: {
      get() {
        return this.$store.state.works.isModalVisible
      },
      set(isModalVisible) {
        this.$store.commit('works/setModalVisible', isModalVisible)
      },
    },
    ...mapGetters('works', {
      project: 'getProject',
    }),
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
      this.toggleMenu()
    },
    toggleMenu() {
      this.toggleBodyClass(this.isModalVisible, 'overflow-hidden')
    },
    toggleBodyClass(isAdd, className) {
      const el = document.body
      if (isAdd) {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
  },
}
</script>

<style></style>
