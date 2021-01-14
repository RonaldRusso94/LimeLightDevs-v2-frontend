<template>
  <div class="flex justify-center w-11/12 m-auto mt-16 mb-40">
    <div class="z-10 w-full text-center">
      <h3
        class="mb-3 text-4xl font-semibold tracking-wide text-left 2xl:text-5xl lg:mb-0"
      >
        Our Packages
      </h3>
      <ul
        class="flex flex-no-wrap justify-end font-bold mb-3 mr-2 space-x-4 text-md lg:space-x-12"
      >
        <li><a href="#"> extra</a></li>
        <li><a href="#"> figma</a></li>
        <li class="underline text-app-green-1"><a href="#">e-commerce</a></li>
        <li><a href="#">basic</a></li>
      </ul>

      <div class="w-full overflow-x-auto lg:rounded-2xl lg:shadow-2xl">
        <div class="flex w-full">
          <div
            v-for="(item, id) in packages"
            :key="id"
            class="flex flex-col items-center h-auto px-6 py-4 mx-2 text-sm border-r-2 shadow-2xl package lg:min-w-0 rounded-3xl lg:rounded-none lg:m-0 bg-app-gray-2 min-w-3/4 border-app-gray-1 lg:shadow-none"
          >
            <img
              class="my-2 lg:my-4"
              :src="'/packages/' + item.img"
              alt="pack"
            />
            <!-- <img src="/packages/Edit4.png" alt=""> -->
            <h4 class="mb-2 text-xl font-medium leading-none">
              {{ item.package }}
            </h4>
            <p class="mb-2 leading-4 lg:mb-4">{{ item.desc }}</p>
            <p><span class="font-bold">3</span> App pages</p>
            <p><span class="font-bold">5</span> Stock images</p>
            <p><span class="font-bold">2</span> Design revision</p>
            <p><span class="font-bold">1</span> Development revision</p>
            <p>Unlimited Contact</p>
            <p class="my-2 lg:mt-3">
              <span class="mr-2 text-sm line-through"
                >${{ item.slashedPrice }}</span
              >
              <span class="text-xl mb-1 font-medium text-app-green-1"
                >${{ item.price }}</span
              >
            </p>
            <Button variant="two">Order Package</Button>
            <p class="mt-4">
              Edit request?
              <a class="font-medium text-app-green-1" href="/#contact"
                >Contact us</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../common/Button.vue'
export default {
  components: { Button },
  data() {
    return {
      packages: [
        {
          id: 0,
          img: 'appdev.png',
          package: 'App development',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 240,
          price: 149,
        },
        {
          id: 1,
          img: 'desktop.png',
          package: 'Web development',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 149,
          price: 299,
        },
        {
          id: 2,
          img: 'appdev.png',
          package: 'Full development',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 120,
          price: 999,
        },
        {
          id: 3,
          img: 'Edit4.png',
          package: 'Personalised',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 399,
          price: '1000+',
        },
      ],
    }
  },
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .package {
    min-width: 0;
  }
}
</style>