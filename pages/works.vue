<template>
  <WorksComponent />
</template>

<script>
import WorksComponent from '~/components/works/WorksComponent'
export default {
  components: {
    WorksComponent,
  },
  setup(props) {
    const works = [
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]
    return { works }
  },
}
</script>

<style></style>
