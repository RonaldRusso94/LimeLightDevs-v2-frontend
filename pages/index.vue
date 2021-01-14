<template>
  <div>
    <Hero />
    <Packages />
    <PageIntro :desc="desc" :title="title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class.',
      title: 'Welcome!',
    }
  },
}
</script>

<style></style>
