<template>
  <div>
    <overlay :is-open="isOpen" />
    <transition name="scale">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 flex items-center justify-center"
      >
        <div
          v-click-outside="onClickOutside"
          class="
            modal
            bg-app-gray-1
            rounded-md
            lg:w-5/6
            2xl:w-2/3
            p-3
            h-full
            md:h-[54%]
            xl:h-[67%]
          "
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header id="modalTitle" class="modal-header">
            <button
              type="button"
              class="
                duration-150
                btn-close
                hover:text-red-600
                focus:text-red-600
              "
              aria-label="Close modal"
              @click="close"
            >
              x
            </button>
          </header>
          <section id="modalDescription" class="h-full modal-body">
            <slot name="body"> This is the default body! </slot>
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Overlay from '../misc/Overlay.vue'
export default {
  name: 'Modal',
  components: { Overlay },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
    onClickOutside(event) {
      if (event.target.type !== 'submit') this.$emit('close')
    },
  },
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  /* background: #000; */
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 1px 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
