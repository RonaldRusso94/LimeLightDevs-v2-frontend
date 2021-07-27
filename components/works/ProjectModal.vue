<template>
  <div>
    <Modal :is-open="isModalVisible" @close="closeModal">
      <template v-slot:body>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 px-8">
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
                  mb-4
                "
              >
                {{ project.title }}
              </h2>
              <p class="text-base mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
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

              <!-- <div class="mt-20">
                <a
                  href="/"
                  target="_blank"
                  class="
                    px-3
                    py-1
                    font-bold
                    text-md
                    border-b-2
                    transition
                    duration-200
                    border-app-green-1
                    cursor-pointer
                    focus:outline-none
                    hover:bg-app-green-1
                  "
                >
                  Visit Website
                </a>
              </div> -->
              <div class="absolute bottom-5">
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    justify-center
                    items-center
                    px-3
                    py-2
                    md:px-6
                    xl:py-3.5
                    group
                    text-xs
                    sm:text-base
                  "
                >
                  <p class="relative z-10">Visit Website</p>
                  <div
                    class="
                      absolute
                      bg-app-green-1
                      inset-x-0
                      bottom-0
                      h-[10%]
                      duration-150
                      group-hover:h-full
                    "
                  ></div>
                </a>
              </div>
            </div>
          </div>
          <!-- band aid fix for issue with initial load of modal -->
          <VueSlickCarousel v-bind="settings">
            <div
              v-for="media in project.media"
              :key="media.url"
              class="relative px-3 py-2 focus:outline-none appear-in"
            >
              <img
                :src="media.url"
                :alt="project.title"
                class="object-cover rounded-xl h-70 mx-auto"
                draggable="false"
              />
            </div>
          </VueSlickCarousel>
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
      dots: false,
      arrows: true,
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
      showCarousel: false,
    }
  },
  watch: {
    isModalVisible(value) {
      const vm = this
      if (value) {
        setTimeout(() => {
          vm.showCarousel = true
        }, 50)
      } else {
        vm.showCarousel = false
      }
      console.log(`value`, value)
    },
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
