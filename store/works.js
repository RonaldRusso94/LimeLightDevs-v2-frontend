// initial state
const state = () => ({
  projects: [],
  selectedProject: null,
  isModalVisible: false,
  loading: false,
  error: null,
})

// getters
const getters = {
  getProject: (state, getters, rootState) => {
    const project = state.projects.find(
      (project) => project._id === state.selectedProject
    )

    return project
  },
}

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
      console.log(error) //eslint-disable-line
    }
  },
  selectProject({ commit }, projectId) {
    const el = document.body
    el.classList.add('overflow-hidden')

    commit('selectProject', projectId)
  },
}

// mutations
const mutations = {
  setProjects(state, projects) {
    state.projects = projects
    state.loading = false
  },
  selectProject(state, projectId) {
    state.selectedProject = projectId
    state.isModalVisible = true
  },
  setModalVisible(state, isModalVisible) {
    state.isModalVisible = isModalVisible
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
