<template>
  <section-container
    id="contact"
    class="relative z-10"
    :default-margins="false"
  >
    <div>
      <section-title text="Get In Touch" />

      <div
        class="
          relative
          flex flex-col-reverse
          items-center
          justify-center
          rounded-3xl
          bg-app-gray-2
          lg:flex-row
          lg:justify-end
        "
      >
        <div
          class="
            relative
            xl:flex
            items-end
            justify-center
            w-full
            h-full
            select-none
            xl:absolute
            xl:left-0
            rounded-3xl
            xl:justify-start
            hidden
          "
        >
          <img
            draggable="false"
            class="
              z-20
              object-contain
              w-1/2
              max-h-full
              lg:pl-6
              lg:pt-6
              lg:w-auto
              relative
              bottom-8
              2xl:right-20
              xl:right-24
            "
            src="/contact/contact.png"
          />
        </div>
        <div
          class="
            z-30
            flex flex-col
            justify-center
            w-full
            pt-8
            lg:w-full
            xl:w-3/5
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
              <div class="flex justify-center w-full m-6">
                <button
                  type="submit"
                  class="
                    px-12
                    py-2
                    text-xl
                    font-bold
                    transition
                    duration-300
                    ease-in-out
                    border-4
                    rounded-full
                    text-app-green-1
                    hover:text-white
                    border-app-green-1
                    hover:bg-app-green-1
                    focus:outline-none
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
import SectionTitle from './common/SectionTitle.vue'
export default {
  components: { SectionContainer, SectionTitle },
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
        label: 'First & Last Name',
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
        label: 'Phone Number',
        placeholder: 'Write your phone number',
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
