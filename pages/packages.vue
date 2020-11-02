<template>
    <div class="w-full z-20">
         <div
      class="text-white w-full lg:w-5/12 flex flex-col items-center lg:items-start lg:ml-56 mt-12 mb-48 text-center lg:text-left"
    >
      <h2 class="text-6xl w-full xl:text-7xl font-hibana">Our Packages</h2>
      <p class="text-xl px-8 lg:px-0 mt-2 mb-10 tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper
        vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit
        faucibus parturient sagittis justo curabitur lacinia ridiculus class.
      </p>
       <a
        href="#services"
        class="px-8 md:px-16 py-3 tracking-wider font-bold text-2xl hover:bg-app-green-1 hover:text-white text-app-green-1 border-4 border-app-green-1 rounded-full cursor-pointer focus:outline-none"
      >
        Check our Packages
      </a>
    </div>

    <img class="hidden md:block absolute -top-16 right-0 w-1/3 h-auto z-0" src="/packages/vector 4.svg" alt="omo">
    <img class=" hidden md:block absolute -top-16 left-0 w-3/4 h-auto z-0" src="/packages/vector 5.svg" alt="omo">
    <img class=" hidden md:block absolute top-16 right-0 w-auto h-auto z-0" src="/packages/vector 7.svg" alt="omo">
    </div>
</template>

<script>
    export default {
       data() {
           return {
               screen: null
           }
       }, 
       computed: {
           checkScreenSize() {
                const myScreen = window.screen.width;
                this.screen = myScreen;
                console.log(myscreen)
               return myScreen
           }
       },
    }
</script>

<style scoped>

</style>