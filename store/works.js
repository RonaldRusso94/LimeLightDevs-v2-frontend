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
      const { data } = await this.$axios.get('/services')
      console.log(data)

      const projects = [
        {
          id: 1,
          name: 'Lorem ipsum dolor sit amet',
          imageUrl: '/works/2.jpg',
        },
        {
          id: 2,
          name: 'consectetur adipiscing elit',
          imageUrl: '/works/3.jpg',
        },
        {
          id: 3,
          name: 'something really really cool!',
          imageUrl: '/works/4.jpg',
        },
        {
          id: 4,
          name: 'Lorem ipsum dolor sit amet',
          imageUrl: '/works/2.jpg',
        },
        {
          id: 5,
          name: 'consectetur adipiscing elit',
          imageUrl: '/works/3.jpg',
        },
        {
          id: 6,
          name: 'something really really cool!',
          imageUrl: '/works/4.jpg',
        },
      ]

      // Success 🎉
      commit('setProjects', projects)
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
