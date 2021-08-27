<template>
  <div>
    <Modal :is-open="isModalVisible" @close="closeModal">
      <template v-slot:body>
        <div class="grid grid-cols-1 px-8 md:grid-cols-2 gap-14">
          <div class="left-side md:order-first order-2">
            <div>
              <h2
                class="
                  mb-4
                  text-xl
                  font-semibold
                  text-center text-white
                  sm:text-2xl
                  sm:leading-7
                  md:text-3xl
                "
              >
                {{ project.title }}
              </h2>
              <p class="mb-5 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div class="mt-8">
                <h2 class="mb-3 text-xl font-semibold text-white sm:leading-7">
                  Technologies
                </h2>
                <div>
                  <button
                    v-for="item in project.technologies"
                    :key="item._id"
                    class="
                      px-3
                      py-1
                      m-1
                      text-sm
                      font-bold
                      tracking-wider
                      transition
                      duration-200
                      border-2
                      rounded-lg
                      cursor-pointer
                      md:px-3
                      text-app-green-1
                      border-app-green-1
                      focus:outline-none
                      hover:text-white
                      hover:bg-app-green-1
                    "
                  >
                    {{ item.technology }}
                  </button>
                </div>
              </div>

              <div
                class="
                  md:absolute
                  md:bottom-2
                  mt-5
                  md:mt-0
                  flex flex-col
                  items-center
                  md:block
                "
              >
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
              <!-- <div class="mt-20">
                <a
                  href="/"
                  target="_blank"
                  class="px-3 py-1 font-bold transition duration-200 border-b-2 cursor-pointer text-md border-app-green-1 focus:outline-none hover:bg-app-green-1"
                >
                  Visit Website
                </a>
              </div> -->
            </div>
          </div>
          <!-- band aid fix for issue with initial load of modal -->

          <div class="relative">
            <VueSlickCarousel ref="slider" v-bind="settings">
              <div
                v-for="media in project.media"
                :key="media.url"
                class="relative px-3 py-2 focus:outline-none appear-in"
              >
                <img
                  :src="media.url"
                  :alt="project.title"
                  class="mx-auto rounded-xl md:h-[18rem] w-full"
                  draggable="false"
                />
              </div>
            </VueSlickCarousel>
            <div
              class="
                md:absolute
                -bottom-4
                md:-bottom-24
                md:right-12
                flex
                items-center
                justify-center
                md:justify-start
                space-x-3
              "
            >
              <button
                class="
                  text-app-green-1
                  w-20
                  h-20
                  cursor-pointer
                  duration-150
                  hover:opacity-75
                "
                @click="prev()"
              >
                <chevron class="w-20 h-20" />
              </button>
              <button
                class="
                  text-app-green-1
                  w-20
                  h-20
                  cursor-pointer
                  duration-150
                  hover:opacity-75
                "
                @click="next()"
              >
                <chevron class="w-20 h-20 transform rotate-180" />
              </button>
            </div>
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
import Chevron from '../misc/icons/Chevron.vue'

export default {
  components: { VueSlickCarousel, Modal, Chevron },
  data() {
    const settings = {
      dots: false,
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
    next() {
      this.$refs.slider.next()
    },
    prev() {
      this.$refs.slider.prev()
    },
  },
}
</script>

<style></style>
