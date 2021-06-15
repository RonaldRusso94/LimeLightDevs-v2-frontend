// initial state
const state = () => ({
  projects: [],
  selectedProject: null,
  loading: false,
  error: null,
})

// getters
const getters = {}

// actions
const actions = {
  async getProjects({ commit }) {
    commit('setLoading')
    try {
      const { data } = await this.$axios.get('/projects')

      // Success 🎉
      commit('setProjects', data)
    } catch (error) {
      // Error 😨
      commit('getProjectsError', 'Error while fetching projects!')
      console.log(error)
    }
  },
}

// mutations
const mutations = {
  setProjects(state, projects) {
    state.projects = projects
    state.loading = false
    console.log(state.projects)
  },
  selectProject(state, projectId) {
    state.selectedProject = projectId
  },
  changeSearchTerm(state, term) {
    state.term = term
  },
  setLoading(state) {
    state.loading = true
    state.error = null
  },
  getProjectsError(state, error) {
    state.error = error
    state.loading = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
