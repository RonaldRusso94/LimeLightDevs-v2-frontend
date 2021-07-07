<template>
  <div class="w-full z-30">
    <PageHeader
      :pageTitle="pageTitle"
      :description="description"
      :link="link"
      :linkTitle="linkTitle"
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
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class.',
      link: '/packages',
      linkTitle: 'Check our packages',
    }
  },
}
</script>
<style></style>
