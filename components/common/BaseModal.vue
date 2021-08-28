<template>
  <transition name="modal-fade">
    <div
      v-if="isOpen"
      class="
        z-40
        py-10
        fixed
        inset-0
        overflow-y-auto
        blur
        flex
        justify-center
        items-center
      "
    >
      <div
        class="
          bg-black
          rounded-xl
          shadow-xl
          overflow-x-hidden
          lg:w-853px
          flex flex-col
          md:w-10/12
          w-11/12
          pb-8
          pt-2
          px-5
          md:h-auto
          h-screen
          m-auto
          md:px-10
          relative
          z-50
        "
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section
          v-if="isOpen"
          id="modalDescription"
          class="modal-body relative px-3 py-5"
        >
          <div class="flex w-full mb-4">
            <button
              type="button"
              class="
                text-red-500
                hover:text-red-400
                duration-150
                text-5xl
                ml-auto
              "
              @click="$emit('close')"
            >
              &times;
            </button>
          </div>
          <slot></slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'BaseModal',
  components: {},
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(value) {
        if (typeof document === 'undefined') return
        if (value) {
          document.body.classList.add('overflow-y-hidden')
        } else {
          document.body.classList.remove('overflow-y-hidden')
        }
      },
    },
  },
  methods: {
    onClickoutside() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
/* .modal-backdrop {
  @apply z-50 py-10 fixed inset-0 overflow-y-auto bg-black bg-opacity-70 flex justify-center items-center;
} */

/* .modal {
  @apply bg-white rounded-xl shadow-xl overflow-x-hidden lg:w-853px flex flex-col w-full py-8 px-5 md:h-auto m-auto md:px-10;
} */
.blur {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.35s ease;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}
</style>
