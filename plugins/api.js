import projects from '~/data/projects.json'
import services from '~/data/services.json'

const localData = {
  projects,
  services,
}

const getLocalData = (url) => {
  const key = String(url).replace(/^\//, '').split('?')[0]
  const data = localData[key]

  if (!data) {
    return null
  }

  return structuredClone(data)
}

const createAxiosCompat = (baseURL) => {
  const request = async (url, options = {}) => {
    try {
      const data = await $fetch(url, { baseURL, ...options })
      return { data }
    } catch (error) {
      const fallbackData = getLocalData(url)

      if (fallbackData) {
        return { data: fallbackData }
      }

      throw error
    }
  }

  request.get = request
  request.$get = async (url, options = {}) => {
    try {
      return await $fetch(url, { baseURL, ...options })
    } catch (error) {
      const fallbackData = getLocalData(url)

      if (fallbackData) {
        return fallbackData
      }

      throw error
    }
  }
  request.post = async (url, body, options = {}) => {
    const data = await $fetch(url, { baseURL, method: 'POST', body, ...options })
    return { data }
  }
  request.$post = (url, body, options = {}) =>
    $fetch(url, { baseURL, method: 'POST', body, ...options })

  return request
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const axios = createAxiosCompat(config.public.apiBase)

  return {
    provide: {
      axios,
    },
  }
})
