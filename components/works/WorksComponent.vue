<template>
  <p v-if="$fetchState.pending">
    <loading-spinner />
  </p>
  <p v-else-if="$fetchState.error">Error while fetching projects.</p>
  <div v-else>
    <project-modal />
    <div class="w-full">
      <WorksComponentDesktop />
      <WorksComponentMobile />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '../common/LoadingSpinner.vue'
import ProjectModal from './ProjectModal.vue'

export default {
  components: { LoadingSpinner, ProjectModal },
  async fetch() {
    const { store, $axios } = this.$nuxt.context
    const { data } = await $axios('/projects')
    store.commit('works/setProjects', data)
  },
}
</script>
