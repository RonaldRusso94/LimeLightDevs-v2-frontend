<template>
  <div class="w-full z-20">
    <PageHeader
      :page-title="pageTitle"
      :description="description"
      :link="link"
      :link-title="linkTitle"
    />
    <Services />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  components: { PageHeader },
  data() {
    return {
      pageTitle: 'Our Services',
      description:
        'We understand what separates a great enterprise from a merely acceptable one. We offer a variety of digital tailor-made solutions to empower your business with means to meet both your short-term and long-term goals. Visually engaging software for every business and seamless integration with your entire ecosystem. Team of competent experts in design and development.',
      link: '/packages',
      linkTitle: 'Check our packages',
    }
  },
  head() {
    return {
      title: 'Our Services - LimeLight Devs',
      head() {
        return {
          titleTemplate: '%s - Our Services',
        }
      },
    }
  },
}
</script>

<style></style>
