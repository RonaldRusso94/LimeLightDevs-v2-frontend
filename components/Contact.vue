<template>
  <section-container
    id="contact"
    class="relative z-10"
    :default-margins="false"
  >
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
        <div
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
        >
          <v-generic-form
            ref="formComp"
            :options="options"
            :fields="fields"
            hide-errors
            @submit="submit"
          >
            <template slot="submit">
              <div class="m-6 flex justify-center w-full">
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
            </template>
          </v-generic-form>
        </div>
      </div>
    </div>
  </section-container>
</template>

<script>
import {
  computed,
  reactive,
  ref,
  useContext,
  watch,
} from '@nuxtjs/composition-api'
import SectionContainer from './common/SectionContainer.vue'
export default {
  components: { SectionContainer },
  setup() {
    const { store } = useContext()
    const formComp = ref(null)
    const contact = computed(() => store.state.contact)
    watch(
      () => contact.value,
      ({ message, reason }) => {
        formComp.value.setValue({
          name: 'message',
          payload: message,
        })
        formComp.value.setValue({
          name: 'reason',
          payload: reason,
        })
      },
      { deep: true }
    )
    const form = reactive({
      fullname: '',
      reason: '',
      email: '',
      phone: '',
      message: '',
    })
    const fields = computed(() => [
      {
        name: 'fullName',
        placeholder: 'Write your first & last name here',
        label: 'Name & Last Name',
        divClass: 'flex flex-col pb-4 lg:pb-0 w-full lg:w-1/2 lg:pr-4',
        rules: {
          required: true,
        },
      },
      {
        name: 'reason',
        placeholder: 'Write your reason',
        label: 'Reason',
        rules: {
          required: true,
        },
      },
      {
        name: 'email',
        placeholder: 'Write your email here',
        label: 'Email',
        rules: {
          required: true,
          email: {
            message: `^Please enter a valid email.`,
          },
        },
      },
      {
        name: 'phone',
        placeholder: 'Phone Number',
        label: 'Write your phone number',
        rules: {
          presence: false,
          format: {
            pattern:
              // eslint-disable-next-line no-useless-escape
              /^$|[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            flags: 'i',
            message: '^Please enter a valid phone number.',
            allowEmpty: true,
          },
        },
      },
      {
        name: 'message',
        placeholder: 'Write your message',
        variant: 'CustomTextArea',
        label: 'Message',
        divClass: 'w-full',
        parentClass: 'mt-2 w-full lg:pr-4',
        rules: {
          required: true,
        },
      },
    ])
    async function submit(data) {
      try {
        const res = await this.$axios.post(
          `https://limelightdevs.herokuapp.com/email`,
          {
            to: 'limelightdevs@gmail.com',
            from: 'limelightdevs@gmail.com',
            html: `
            Hello from ${data.fullName}, I'd like to speak with you.
            ${data.message}

            My email is ${data.email} and number is ${data.phone || 'not sent.'}
            `,
            subject: data.reason,
          }
        )
        console.log(`res.data`, res.data)
      } catch (error) {
        console.log(`error`, error.request)
      }
      console.log(`data`, data)
      // clear form values (tried using e.target.reset(), but it doesn't update reactive form values)
      Object.keys(form).forEach((key, value) => (form[key] = ''))
    }
    const options = {
      formClass:
        'w-full flex flex-wrap flex-row justify-start items-center px-8',
      divClasses: 'flex flex-col pb-4 lg:pb-0 w-full lg:w-1/2 lg:pr-4 mb-2',
      // parentClasses: 'flex flex-col pb-4 lg:pb-0 w-full lg:w-1/2 lg:pr-4',
    }
    return { form, submit, fields, options, formComp }
  },
}
</script>
