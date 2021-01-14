<template>
  <div>
    <Hero :type="contact" />
    <Packages />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: 'contact',
        title: 'Welcome!',
        desc:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class',
      },
    }
  },
}
</script>

<style></style>
