<template>
  <div class="w-full z-20">
    <div class="absolute right-0 top-28 w-2/6">
      <img class="block w-full h-full transform" src="greenblob02.png" alt="" />
    </div>
    <ServiceCarousel />
    <div
      id="services"
      class="pt-32 lg:pt-48 w-full flex flex-col items-center overflow-hidden"
    >
      <ServiceItem
        v-for="serviceItem in serviceItems"
        :key="serviceItem.title"
        :title="serviceItem.title"
        :description="serviceItem.description"
        :image-url="serviceItem.imageUrl"
        :image-left-side="serviceItem.imageLeftSide"
      />
    </div>
  </div>
</template>

<script>
import ServiceCarousel from './ServiceCarousel.vue'
import ServiceItem from './ServiceItem.vue'
export default {
  components: { ServiceCarousel, ServiceItem },
  setup() {
    // wasn't sure if there we gonna be more of the service items eventually added, but implemented so there could be more anyways
    const serviceItems = [
      {
        title: 'Mobile App',
        description:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class. Lorem ipsum dolor Sit amet consectetur adipiscing Semper vehicula velit dapibus Leo hendrerit faucibus parturient',
        imageUrl: '/phones01.png',
        imageLeftSide: false,
      },
      {
        title: 'Web',
        description:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class. Lorem ipsum dolor Sit amet consectetur adipiscing Semper vehicula velit dapibus Leo hendrerit faucibus parturient',
        imageUrl: '/unboggled01.png',
        imageLeftSide: true,
      },
    ]

    return { serviceItems }
  },
}
</script>
