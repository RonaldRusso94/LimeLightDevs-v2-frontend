<template>
  <p v-if="pending">
    <loading-spinner />
  </p>
  <p v-else-if="error">Error while fetching projects.</p>
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
  async setup() {
    const { $axios, $store } = useNuxtApp()
    const { pending, error } = await useAsyncData('works-projects', async () => {
      const { data } = await $axios('/projects')
      $store.commit('works/setProjects', data)
      return data
    })

    return {
      pending,
      error,
    }
  },
}
</script>
