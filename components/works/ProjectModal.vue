<template>
  <div>
    <client-only>
      <Modal :is-open="isModalVisible" @close="closeModal">
        <template>
          <div v-if="project" class="flex flex-col h-full">
            <div>
              <VueSlickCarousel ref="slider" v-bind="settings">
                <div
                  v-for="media in project.media"
                  :key="media.url"
                  class="relative px-3 py-2 focus:outline-none appear-in"
                >
                  <img
                    :src="media.url"
                    :alt="project.title"
                    class="mx-auto rounded-xl md:h-[30rem] w-full"
                    draggable="false"
                  />
                </div>
              </VueSlickCarousel>
            </div>
            <div class="px-3">
              <div
                class="
                  mt-1
                  mb-2
                  flex flex-wrap
                  justify-center
                  md:justify-between
                "
              >
                <h1 class="text-2xl md:text-4xl font-bold">
                  {{ project.title }}
                </h1>
                <div
                  class="
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
                      cursor-pointer
                      duration-150
                      hover:opacity-75
                    "
                    @click="prev()"
                  >
                    <chevron class="w-16 h-16" />
                  </button>
                  <button
                    class="
                      text-app-green-1
                      cursor-pointer
                      duration-150
                      hover:opacity-75
                    "
                    @click="next()"
                  >
                    <chevron class="w-16 h-16 transform rotate-180" />
                  </button>
                </div>
              </div>
              <p class="my-8 md:my-0">{{ project.description }}</p>
            </div>
            <div class="px-3 mt-auto">
              <div
                class="
                  flex
                  md:items-center
                  flex-wrap
                  justify-center
                  md:justify-between
                "
              >
                <div
                  class="
                    flex
                    items-center
                    flex-wrap
                    space-x-2
                    mt-2
                    mb-5
                    md:mb-0
                  "
                >
                  <p
                    v-for="tech in project.technologies"
                    :key="tech.id"
                    class="bg-app-green-1 text-white p-2 my-3"
                  >
                    {{ tech.technology }}
                  </p>
                </div>
                <a
                  :href="project.url || '#contact'"
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
                  <p class="relative z-10">
                    {{
                      project.url
                        ? `Visit ${
                            project.type === 'mobileapp' ? 'App' : 'Website'
                          }`
                        : 'Request Demo'
                    }}
                  </p>
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
        </template>
      </Modal>
    </client-only>
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
      speed: 400,
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
      // console.log(`value`, value)
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
