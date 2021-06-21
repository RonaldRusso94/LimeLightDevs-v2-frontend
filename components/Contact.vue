<template>
  <section-container id="contact" class="relative z-10" :defaultMargins="false">
    <div>
      <div
        class="
          relative
          font-bold
          z-20
          text-4xl
          md:text-6xl
          mb-7
          px-4
          md:px-0
          text-left
          md:text-left
        "
      >
        Get in touch
      </div>
      <div
        class="
          relative
          rounded-3xl
          bg-app-gray-2
          flex flex-col-reverse
          lg:flex-row
          justify-center
          lg:justify-end
          items-center
        "
      >
        <div
          class="
            relative
            lg:absolute
            lg:left-0
            w-full
            h-full
            rounded-3xl
            flex
            items-end
            justify-center
            lg:justify-start
            select-none
          "
        >
          <img
            draggable="false"
            class="
              lg:pl-6
              lg:pt-6
              object-contain
              z-20
              w-1/2
              lg:w-1/4
              max-h-full
            "
            src="/contact/unboggled.png"
          />
        </div>
        <form
          class="
            z-30
            flex
            w-full
            lg:w-2/3
            flex-col
            justify-center
            pt-8
            pb-0
            lg:pb-8
          "
          @submit.prevent="submit"
        >
          <div
            class="
              w-full
              flex flex-wrap flex-row
              justify-start
              items-center
              px-8
            "
          >
            <div class="flex flex-col pb-4 lg:pb-0 w-full lg:w-1/2 lg:pr-4">
              <label class="text-lg mb-2">Name & Last Name</label>
              <input
                v-model="form.fullname"
                class="
                  bg-app-gray-1
                  p-4
                  text-lg
                  rounded-xl
                  text-app-gray-3
                  placeholder-app-gray-3
                  font-bold
                  outline-none
                  border-2 border-transparent
                  focus:border-app-green-1
                "
                placeholder="Write your first & last name here"
              />
            </div>
            <div class="flex flex-col w-full lg:w-1/2 lg:pl-4">
              <label class="text-lg font-bold mb-2">Reason:</label>
              <input
                v-model="form.reason"
                class="
                  bg-app-gray-1
                  p-4
                  text-lg
                  rounded-xl
                  text-app-gray-3
                  placeholder-app-gray-3
                  font-bold
                  outline-none
                  border-2 border-transparent
                  focus:border-app-green-1
                "
                placeholder="Write your reason"
              />
            </div>
            <div class="flex flex-col py-4 lg:pb-0 w-full lg:w-1/2 lg:pr-4">
              <label class="text-lg mb-2">Email</label>
              <input
                v-model="form.email"
                required
                class="bg-app-gray-1 p-4 text-lg rounded-xl text-app-gray-3 placeholder-app-gray-3 font-bold outline-none border-2 border-transparent focus:border-app-green-1"
                placeholder="Write your email here"
              />
            </div>
            <div class="flex flex-col w-full lg:w-1/2 lg:pl-4">
              <label class="text-lg font-bold mb-2">Phone Number</label>
              <input
                v-model="form.phone"
                class="bg-app-gray-1 p-4 text-lg rounded-xl text-app-gray-3 placeholder-app-gray-3 font-bold outline-none border-2 border-transparent focus:border-app-green-1"
                placeholder="Write your Phone Number"
              />
            </div>
          </div>
          <div class="flex flex-col mx-8 mt-2">
            <label class="text-lg mb-2">Write your message:</label>
            <textarea
              v-model="form.message"
              class="
                bg-app-gray-1
                p-4
                text-lg
                rounded-xl
                text-app-gray-3
                placeholder-app-gray-3
                font-bold
                resize-none
                outline-none
                border-2 border-transparent
                focus:border-app-green-1
              "
              rows="6"
              placeholder="Write your message"
            />
          </div>
          <div class="m-6 flex justify-center">
            <button
              type="submit"
              class="
                px-12
                py-2
                font-bold
                text-xl text-app-green-1
                hover:text-white
                border-4 border-app-green-1
                hover:bg-app-green-1
                rounded-full
                focus:outline-none
                transition
                ease-in-out
                duration-300
              "
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section-container>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'
import SectionContainer from './common/SectionContainer.vue'

export default {
  components: { SectionContainer },
  setup() {
    const form = reactive({
      fullname: '',
      reason: '',
      email: '',
      phone: '',
      message: '',
    })

    function submit(e) {
      console.log(form.fullname, form.reason, form.message, form.email, form.phone)

      // clear form values (tried using e.target.reset(), but it doesn't update reactive form values)
      Object.keys(form).forEach((key, value) => (form[key] = ''))
    }

    return { form, submit }
  },
}
</script>
