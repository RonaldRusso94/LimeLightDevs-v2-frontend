<template>
  <div>
    <PageHeader
      :page-title="pageTitle"
      :description="'Limelight devs values savings time, and you can too. View our vast collections of beautiful, ready-made, modern, and high performing templates.'"
      :link="'/work'"
      :link-title="'Check out packages'"
    />
    <SectionContainer :default-margins="false">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="i in 8"
          :key="i"
          class="duration-300 hover:scale-110 transform"
        >
          <article
            aria-label="WeBuild - Webapp template Template"
            class="flex flex-col items-center w-full"
          >
            <div class="relative rounded overflow-hidden w-full mt-8 md:mt-0">
              <a href="/templates/webuild-react-angular-and-vue"
                ><img
                  class="w-full"
                  src="https://cdn.discordapp.com/attachments/852156392340455434/865262000200351754/Reels.png"
                  alt="WeBuild - Webapp template Template Preview"
              /></a>
              <div
                class="
                  border
                  -mt-16
                  z-20
                  relative
                  rounded-lg
                  w-11/12
                  mx-auto
                  overflow-hidden
                "
              >
                <div
                  class="
                    relative
                    bg-app-gray-1
                    dark:bg-gray-900
                    border-l border-r
                    rounded-lg
                    border-color-gradient
                    -mt-0.5
                    p-4
                    md:p-6
                  "
                >
                  <div class="flex items-center justify-between w-full">
                    <div
                      class="
                        flex
                        justify-between
                        w-full
                        items-start
                        cursor-pointer
                      "
                    >
                      <h2 class="text-lg lg:text-xl text-gray-50 min-h-56 pr-5">
                        WeBuild - Webapp template
                      </h2>
                      <p
                        class="
                          text-lg
                          lg:text-xl
                          font-bold
                          leading-normal
                          xl:pt-1
                          text-right text-gray-800
                          dark:text-gray-50
                        "
                      >
                        $13
                      </p>
                    </div>
                  </div>
                  <p
                    class="
                      mt-3
                      text-xs
                      md:text-base
                      font-normal
                      leading-none
                      text-gray-400
                    "
                  >
                    Create websites that engage users.
                  </p>
                  <h3
                    class="
                      text-base
                      font-semibold
                      leading-none
                      text-gray-600
                      pt-5
                      dark:text-gray-400
                    "
                  >
                    Pricing
                  </h3>
                  <div class="mt-3">$3.00</div>
                  <div class="mt-7 w-full justify-bewteen sm:flex pb-4 sm:pb-0">
                    <button
                      id="d148b04-40ca-6418-ebae-7c17a272cd"
                      class="
                        mb-4
                        sm:mb-0
                        sm:w-1/2
                        w-full
                        focus:outline-none
                        py-2
                        px-6
                        border
                        rounded
                        text-sm
                        md:text-base
                        md:font-normal
                        text-gray-200
                        mr-3
                        leading-4
                        hover:bg-gray-800
                        focus:bg-gray-800
                      "
                    >
                      Preview</button
                    ><button
                      id="de4bc40-efd3-1b7a-c04a-485040613dd"
                      class="
                        justify-center
                        w-full
                        sm:w-1/2
                        flex
                        items-center
                        flex-shrink-0
                        text-white
                        focus:outline-none
                        templateDetialsbtn
                        rounded-md
                        py-2
                        px-3
                        bg-red-500
                        hover:bg-red-400
                        duration-200
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-shopping-cart"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="9" cy="19" r="2"></circle>
                        <circle cx="17" cy="19" r="2"></circle>
                        <path
                          d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"
                        ></path></svg
                      ><span
                        class="
                          flex-shrink-0
                          ml-2
                          font-medium
                          leading-none
                          dark:text-white
                          text-sm
                          2xl:text-base
                        "
                        >Add to cart</span
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup>
import PageHeader from '~/components/common/PageHeader.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'
const hello = 'world'

const pageTitle = 'Our Templates'
const description =
  'We believe in bringing structure and competence to your business with no red tape and deliver custom solutions designed to fit both your needs and budget. Choose from our wide range of packages especially crafted keeping every type of business in mind.'
const link = '/packages'
const linkTitle = 'Check our packages'
</script>
