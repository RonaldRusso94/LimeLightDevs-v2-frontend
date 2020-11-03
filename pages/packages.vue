<template>
  <div class="w-full z-20">
    <div
      class="text-white relative z-30 w-full lg:w-5/12 flex flex-col items-center lg:items-start lg:ml-56 mt-12 mb-48 text-center lg:text-left"
    >
      <h2 class="text-6xl pl-8 lg:pl-0 text-left w-full xl:text-7xl font-hibana">Our Packages</h2>
      <p class="text-xl px-8 text-left lg:px-0 mt-2 mb-10 tracking-wide">
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

    <img
      draggable="false"
      src="/packages/toprightblob.png"
      class="hidden md:block absolute -top-16 right-0 w-1/3 h-auto select-none"
    />
    <img
      draggable="false"
      src="/packages/topleftblob.png"
      class="hidden md:block absolute -top-16 left-0 w-1/2 h-auto select-none"
    />
    <img
      draggable="false"
      src="/packages/middleblob.png"
      class="hidden md:block absolute top-16 right-0 w-auto h-auto select-none"
    />
    <img
      draggable="false"
      src="/packages/mobileblob.png"
      class="md:hidden absolute top-0 right-0 w-auto h-auto select-none"
    />
    <PackagesComponent />
  </div>
</template>

