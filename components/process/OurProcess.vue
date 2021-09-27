<template>
  <div>
    <!-- <div class="hidden lg:block absolute w-5/12 xl:w-4/12 right-0 top-0">
      <img
        class="w-full h-full object-contain block transform -translate-y-72 2xl:-translate-y-96"
        src="greenblob02.png"
        alt=""
      />
    </div> -->
    <section-container :default-margins="false">
      <section-title text="Our Process" />
      <div
        class="
          hidden
          container
          relative
          lg:flex
          justify-between
          mx-auto
          2xl:max-w-screen-2xl
          -mt-6
        "
      >
        <process-point
          class="mt-48 transform"
          src="/processes/wireframes.png"
          body="We study your industry, your market, your competitors and your customers to formulate the best strategies weighing both pros and cons. We do not only meet the expectations but exceed them with a considerable margin."
          subhead="Research & Strategize"
        />
        <left-dotted-line
          class="
            w-3/12
            xl:w-2/7
            2xl:w-3/10
            absolute
            transform
            translate-x-48 translate-y-32
            xl:translate-y-20
            -rotate-3
          "
        />
        <ProcessPoint
          class="
            mt-32
            transform
            translate-y-2
            -translate-x-2
            xl:-translate-x-8 xl:-translate-y-6
          "
          src="/processes/development.png"
          body="Whether it's a mobile app, a website, or software - careful meticulous consideration goes into every step where we carefully craft flawless designs and seamless operations. We refine, test, and re-test the prototypes until we have the perfect product for you.
"
          subhead="Design & Develop"
        />
        <right-dotted-line
          class="
            w-3/12
            xl:w-2/7
            2xl:w-3/10
            absolute
            right-0
            transform
            -translate-x-56
            translate-y-40
            xl:translate-y-28
            xl:-translate-x-64
            -rotate-6
          "
        />
        <ProcessPoint
          class="
            transform
            translate-y-16
            -translate-x-4
            xl:translate-y-4
            xl:-translate-x-12
            2xl:translate-y-4
          "
          src="/processes/launch.png"
          body="Your product is ready to launch and we are happy to guide you not only through every step of the process but beyond that. Our relationship with our customers isn't limited to just an agency, but we are your partners who understand your business needs."
          subhead="Launch & Amplify!"
        />
      </div>
    </section-container>

    <!-- Small Screen -->
    <section-container
      :default-margins="false"
      class="flex flex-col items-center lg:hidden relative"
    >
      <dotted-line />
      <ProcessPoint
        src="/processes/wireframes.png"
        body="We study your industry, your market, your competitors and your customers to formulate the best strategies weighing both pros and cons. We do not only meet the expectations but exceed them with a considerable margin."
        subhead="Research & Strategize"
      />
      <ProcessPoint
        class="mt-16"
        src="/processes/development.png"
        body="Whether it's a mobile app, a website, or software - careful meticulous consideration goes into every step where we carefully craft flawless designs and seamless operations. We refine, test, and re-test the prototypes until we have the perfect product for you.
"
        subhead="Design & Develop"
      />
      <ProcessPoint
        class="mt-16"
        src="/processes/launch.png"
        body="Your product is ready to launch and we are happy to guide you not only through every step of the process but beyond that. Our relationship with our customers isn't limited to just an agency, but we are your partners who understand your business needs."
        subhead="Launch & Amplify"
      />
    </section-container>
  </div>
</template>

<script>
import ProcessPoint from '../landing/process/ProcessPoint.vue'
import SectionContainer from '../common/SectionContainer.vue'
import SectionTitle from '../common/SectionTitle.vue'
import DottedLine from '../misc/icons/DottedLine.vue'
import LeftDottedLine from '~/components/misc/icons/LeftDottedLine.vue'
import RightDottedLine from '~/components/misc/icons/RightDottedLine.vue'
export default {
  components: {
    RightDottedLine,
    LeftDottedLine,
    ProcessPoint,
    SectionContainer,
    SectionTitle,
    DottedLine,
  },
}
</script>

<style>
.dotted-line {
  --tw-rotate: -73deg !important;
}
</style>
