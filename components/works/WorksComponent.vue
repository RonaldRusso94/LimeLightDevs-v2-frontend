<template>
  <div class="w-full overflow-x-auto">
    <WorksComponentDesktop :works="works" :project-count="projectCount" />
    <WorksComponentMobile :works="works" :project-count="projectCount" />
  </div>
</template>

<script>
export default {
  setup() {
    // images shown for works component, should probs be fetched from backend
    // one issue i see for mobile view (that also occurs with the Packages component) is that because the component has w-11/12, it can sometimes look oddly clipped off
    // it's not too great of an issue but just something i noticed
    const works = [
      {
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]
    const projectCount = 52
    return { works, projectCount }
  },
}
</script>
