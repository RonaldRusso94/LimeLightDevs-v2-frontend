import { createStore } from 'vuex'
import works from '~/store/works'
import { actions, getters, mutations, state } from '~/store'

export default defineNuxtPlugin((nuxtApp) => {
  const { $axios } = nuxtApp
  const store = createStore({
    state,
    getters,
    actions,
    mutations,
    modules: {
      works,
    },
  })

  store.$axios = $axios
  nuxtApp.vueApp.use(store)

  return {
    provide: {
      store,
    },
  }
})
