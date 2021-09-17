<template>
  <div class="w-full z-30">
    <PageHeader
      :page-title="pageTitle"
      :description="description"
      :link="link"
      :link-title="linkTitle"
    />
    <Packages />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  components: { PageHeader },
  data() {
    return {
      pageTitle: 'Our Packages',
      description:
        'We believe in bringing structure and competence to your business with no red tape and deliver custom solutions designed to fit both your needs and budget. Choose from our wide range of packages especially crafted keeping every type of business in mind.',
      link: '/packages',
      linkTitle: 'Check our packages',
    }
  },
  head() {
    return {
      titleTemplate: '%s - Our Packages',
    }
  },
}
</script>
<style></style>
