<template>
  <div class="w-full z-20">
    <div class="absolute hidden lg:block right-0 top-28 w-2/6">
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
        :isFlowingOut="serviceItem.isFlowingOut"
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
        title: 'Mobile App Development',
        description:
          "With the growing digital landscape dominated by smartphones, we understand your need to revitalize your digital business to the modern audience. Every company can use the benefit of a native app, regardless of the sector and their size, and that's where we come in. Experts in both iOS and Android app development- we craft meticulous and immersive apps that your users would love to engage with. We build effective native apps for every customizable operating system meeting industry standards and optimized to their maximum potential.",
        imageUrl: '/mobile-app-dev.png',
        imageLeftSide: false,
      },
      {
        title: 'Web Development',
        description:
          "Make your presence felt online with robust, powerful, seamless, and sleek scalable web solutions. Whether it's an easy-to-use pop-up site for your business, a conversion-driven eCommerce solution, an eye-catching marketing face of your brand online, or a hassle-free website for your employers to navigate around-your website is an extension of your brand and we deliver upon just that with no compromise on quality.",
        imageUrl: '/unboggled01.png',
        imageLeftSide: true,
        isFlowingOut: true,
      },
      {
        title: 'Web & App Design',
        description:
          "Make your presence felt online with robust, powerful, seamless, and sleek scalable web solutions. Whether it's an easy-to-use pop-up site for your business, a conversion-driven eCommerce solution, an eye-catching marketing face of your brand online, or a hassle-free website for your employers to navigate around-your website is an extension of your brand and we deliver upon just that with no compromise on quality.",
        imageUrl: '/web-app-design.png',
        imageLeftSide: false,
      },
      {
        title: 'Web & App Hosting',
        description:
          "Make your presence felt online with robust, powerful, seamless, and sleek scalable web solutions. Whether it's an easy-to-use pop-up site for your business, a conversion-driven eCommerce solution, an eye-catching marketing face of your brand online, or a hassle-free website for your employers to navigate around-your website is an extension of your brand and we deliver upon just that with no compromise on quality.",
        imageUrl: '/web-app-hosting.png',
        imageLeftSide: true,
      },
    ]

    return { serviceItems }
  },
}
</script>
