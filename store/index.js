export const state = () => ({
  services: null,
  contact: {
    reason: '',
    message: '',
  },
  // loading: false,
})
// Getters
export const getters = {
  services(state) {
    return state.services
  },
}
// Actions
export const actions = {
  async getServices(context) {
    try {
      // context.commit('mutation')
      // context.commit('setLoading', true)
      const { data } = await this.$axios.get('/services')
      // context.commit('setLoading', false)
      context.commit('addServices', data)
      return data
    } catch (error) {
      this.error = error
    }
  },
}
// Mutations
export const mutations = {
  addServices(state, payload) {
    // state.services = payload.map((item) => item.title)
    // console.log(`state.services`, state.services)
    // state.services.push({ ...payload })
    state.services = payload
  },
  setContact(state, { message, reason }) {
    state.contact.message = message
    state.contact.reason = reason
  },
  // setLoading(state, payload) {
  //   state.loading = payload
  // },
}
