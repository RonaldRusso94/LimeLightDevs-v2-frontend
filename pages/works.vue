<template>
  <div class="w-full z-20">
    <PageHeader
      :page-title="pageTitle"
      :description="description"
      :link="link"
      :link-title="linkTitle"
    />
    <WorksComponent />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  components: { PageHeader },
  data() {
    return {
      pageTitle: 'Our Works',
      description:
        "You don't have to just take our word for what we have to offer - We have a glowing portfolio with numerous satisfied customers across the globe who have nothing but words of praise for us. Our work is a testament to our competence and expertise and we are proud to let you go through it before making up your mind. You can't go wrong with us but we understand one can use some assurance!",
      link: '/packages',
      linkTitle: 'Check our packages',
    }
  },
  head() {
    return {
      titleTemplate: '%s - Our Works',
    }
  },
}
</script>

<style></style>
