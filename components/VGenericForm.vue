<template>
  <form :class="options.formClass" @submit.prevent="handleSubmit">
    <component
      :is="resolveField(field)"
      v-for="field in fields"
      :key="field.name"
      v-model="form[field.name]"
      :class="field.class"
      :div-class="field.divClass || options.divClasses"
      :label="field.label"
      :name="field.name"
      :parent-class="field.parentClass"
      :placeholder="field.placeholder"
      :type="field.type || 'text'"
    />
    <slot name="submit" />
  </form>
</template>

<script>
import Input from '~/components/common/Input.vue'
import TextArea from '~/components/common/TextArea.vue'

export default {
  components: {
    Input,
    CustomTextArea: TextArea,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      form: {},
    }
  },
  watch: {
    fields: {
      immediate: true,
      handler(fields) {
        fields.forEach((field) => {
          if (!(field.name in this.form)) {
            this.form[field.name] = ''
          }
        })
      },
    },
  },
  methods: {
    resolveField(field) {
      return field.variant || 'Input'
    },
    setValue({ name, payload }) {
      this.form[name] = payload
    },
    handleSubmit() {
      this.$emit('submit', { ...this.form })
    },
  },
}
</script>
