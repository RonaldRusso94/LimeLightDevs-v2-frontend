const instances = new WeakMap()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      const handler = (event) => {
        if (el !== event.target && !el.contains(event.target)) {
          binding.value(event)
        }
      }

      document.addEventListener('click', handler)
      document.addEventListener('touchstart', handler)
      instances.set(el, handler)
    },
    unmounted(el) {
      const handler = instances.get(el)

      if (handler) {
        document.removeEventListener('click', handler)
        document.removeEventListener('touchstart', handler)
        instances.delete(el)
      }
    },
  })
})
