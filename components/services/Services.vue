<template>
  <div class="w-full z-20 relative">
    <div
      class="text-white w-full lg:w-5/12 flex flex-col items-center lg:items-start lg:ml-48 mt-12 mb-32 text-center lg:text-left"
    >
      <span class="text-4xl md:text-5xl font-hibana">Services</span>
      <p class="text-lg px-8 lg:px-0 mt-2 mb-10 tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper
        vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit
        faucibus parturient sagittis justo curabitur lacinia ridiculus class.
      </p>
      <a
        href="#services"
        class="px-5 md:px-8 py-2 tracking-wider font-bold text-xl text-app-green-1 border-2 border-app-green-1 rounded-full cursor-pointer focus:outline-none hover:text-white hover:bg-app-green-1"
      >
        Check our Packages
      </a>
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
export default {
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
