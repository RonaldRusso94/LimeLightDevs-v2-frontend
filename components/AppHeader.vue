<template>
  <div>
    <nav
      :style="{ backgroundColor: headerColor }"
      class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3"
    >
      <div
        class="container mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <a
            class="text-xl font-bold flex items-center leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white"
            href="#pablo"
          >
            <svg
              width="222"
              height="30"
              viewBox="0 0 222 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.65 36V1.25H8.1V29.2H23.95V36H0.65ZM32.5414 8.5C31.4081 8.5 30.4414 8.13333 29.6414 7.4C28.8747 6.63333 28.4914 5.68333 28.4914 4.55C28.4914 3.41666 28.8747 2.48333 29.6414 1.75C30.4414 0.983332 31.4081 0.6 32.5414 0.6C33.7081 0.6 34.6747 0.983332 35.4414 1.75C36.2414 2.48333 36.6414 3.41666 36.6414 4.55C36.6414 5.68333 36.2414 6.63333 35.4414 7.4C34.6747 8.13333 33.7081 8.5 32.5414 8.5ZM28.9414 36V11.35H36.1414V36H28.9414ZM73.925 10.75C76.925 10.75 79.2083 11.6167 80.775 13.35C82.3417 15.05 83.125 17.45 83.125 20.55V36H75.925V21.6C75.925 18.3 74.575 16.65 71.875 16.65C70.4417 16.65 69.2583 17.1333 68.325 18.1C67.425 19.0333 66.975 20.3667 66.975 22.1V36H59.775V21.6C59.775 18.3 58.425 16.65 55.725 16.65C54.2917 16.65 53.1083 17.1333 52.175 18.1C51.275 19.0333 50.825 20.3667 50.825 22.1V36H43.625V11.35H50.425V14.85C52.1583 12.1167 54.625 10.75 57.825 10.75C61.425 10.75 64.0417 12.1333 65.675 14.9C67.5417 12.1333 70.2917 10.75 73.925 10.75ZM108.438 27L114.138 29.85C111.871 34.35 107.938 36.6 102.338 36.6C98.3708 36.6 95.1208 35.4333 92.5875 33.1C90.0875 30.7667 88.8375 27.6333 88.8375 23.7C88.8375 19.9 90.0708 16.8 92.5375 14.4C95.0375 11.9667 98.1708 10.75 101.938 10.75C105.671 10.75 108.604 11.9 110.738 14.2C112.904 16.5 113.988 19.55 113.988 23.35C113.988 24.35 113.971 25 113.938 25.3H96.3375C96.5042 27.0667 97.1208 28.4667 98.1875 29.5C99.2875 30.5 100.704 31 102.438 31C105.038 31 107.038 29.6667 108.438 27ZM101.688 16.1C100.254 16.1 99.0708 16.55 98.1375 17.45C97.2042 18.35 96.6208 19.5833 96.3875 21.15H106.588C106.321 17.7833 104.688 16.1 101.688 16.1ZM120.957 36V1.25H125.107V36H120.957ZM137.932 6.3C137.399 6.83333 136.732 7.1 135.932 7.1C135.132 7.1 134.449 6.83333 133.882 6.3C133.349 5.76667 133.082 5.11667 133.082 4.35C133.082 3.58333 133.349 2.93333 133.882 2.4C134.449 1.86667 135.132 1.6 135.932 1.6C136.732 1.6 137.399 1.86667 137.932 2.4C138.499 2.93333 138.782 3.58333 138.782 4.35C138.782 5.11667 138.499 5.76667 137.932 6.3ZM133.882 36V12H138.032V36H133.882ZM165.608 11.45C164.808 11.45 164.075 12.1667 163.408 13.6C165.208 15.0667 166.108 17.1 166.108 19.7C166.108 22.3 165.208 24.3333 163.408 25.8C161.608 27.2667 159.325 28 156.558 28C154.925 28 153.408 27.7167 152.008 27.15C150.508 27.5833 149.758 28.4 149.758 29.6C149.758 30.2333 149.975 30.7667 150.408 31.2C150.875 31.6 151.475 31.8 152.208 31.8H161.108C167.142 31.8 170.158 34.05 170.158 38.55C170.158 41.05 168.958 43.1 166.558 44.7C164.158 46.3 161.175 47.1 157.608 47.1C153.408 47.1 150.208 46.4333 148.008 45.1C145.842 43.8 144.758 42.05 144.758 39.85C144.758 37.75 145.925 36.0333 148.258 34.7C146.658 33.6667 145.858 32.1833 145.858 30.25C145.858 28.1167 146.992 26.4833 149.258 25.35C147.792 23.95 147.058 22.0667 147.058 19.7C147.058 17.1 147.942 15.0667 149.708 13.6C151.508 12.1333 153.792 11.4 156.558 11.4C158.058 11.4 159.392 11.6167 160.558 12.05C161.992 9.31666 163.825 7.95 166.058 7.95C167.325 7.95 168.408 8.38333 169.308 9.25C170.242 10.0833 170.708 11.3667 170.708 13.1V13.9L167.358 14.5C167.258 12.4667 166.675 11.45 165.608 11.45ZM156.558 24.65C158.092 24.65 159.375 24.2167 160.408 23.35C161.442 22.4833 161.958 21.2667 161.958 19.7C161.958 18.1667 161.442 16.9667 160.408 16.1C159.375 15.2 158.092 14.75 156.558 14.75C154.992 14.75 153.708 15.1833 152.708 16.05C151.708 16.9167 151.208 18.1333 151.208 19.7C151.208 21.2667 151.708 22.4833 152.708 23.35C153.708 24.2167 154.992 24.65 156.558 24.65ZM160.758 35.9H153.208C151.942 35.9 150.908 36.2167 150.108 36.85C149.308 37.4833 148.908 38.2833 148.908 39.25C148.908 42.0833 151.808 43.5 157.608 43.5C160.008 43.5 162.008 43.0667 163.608 42.2C165.208 41.3667 166.008 40.25 166.008 38.85C166.008 37.8167 165.592 37.0667 164.758 36.6C163.925 36.1333 162.592 35.9 160.758 35.9ZM176.091 36V1.25H180.241V15C181.975 12.6 184.558 11.4 187.991 11.4C190.925 11.4 193.191 12.2667 194.791 14C196.391 15.7333 197.191 18.1167 197.191 21.15V36H193.041V21.6C193.041 17.2 191.041 15 187.041 15C185.075 15 183.441 15.5833 182.141 16.75C180.875 17.8833 180.241 19.4833 180.241 21.55V36H176.091ZM213.364 36.6C208.831 36.6 206.564 34.0167 206.564 28.85V15.6H202.614V12H206.564L207.414 4.85H210.714V12H220.414V15.6H210.714V28.95C210.714 31.55 211.647 32.85 213.514 32.85C215.247 32.85 216.797 31.3333 218.164 28.3L221.564 29.9C220.731 31.9333 219.581 33.5667 218.114 34.8C216.681 36 215.097 36.6 213.364 36.6Z"
                fill="#4DFF64"
              />
            </svg>
            <span
              :style="{ marginLeft: '-30px', color: '#4DFF64' }"
              class="text-sm inline-block font-thin"
              >dev</span
            >
          </a>
          <div
            :class="{ change: showMenu }"
            class="hamburger lg:hidden"
            @click="toggleNavbar()"
          >
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>
        </div>
        <div
          :class="{ hidden: !showMenu, block: showMenu }"
          class="nav lg:flex lg:flex-grow items-center"
        >
          <ul
            :style="{ alignItems: 'center', justifyContent: 'center' }"
            class="flex flex-col h-full lg:items-baseline lg:baseline lg:flex-row list-none ml-auto"
          >
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i
                  class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"
                /><span class="ml-2">Services</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i
                  class="fab fa-twitter text-lg leading-lg text-white opacity-75"
                /><span class="ml-2">Packages</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i
                  class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
                /><span class="ml-2">Works</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i
                  class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
                /><span
                  :style="{ backgroundColor: '#4DFF64' }"
                  class="ml-2 px-8 py-2 text-black rounded-full"
                  >Contactus</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      headerColor: '#282C35',
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style scoped>
.container {
  min-height: 0;
}
.hamburger {
  position: absolute;
  right: 35px;
  top: 12px;
  cursor: pointer;
  z-index: 3;
  transition: all 0.7s ease-out;
}

.hamburger .hamburger-line {
  width: 28px;
  height: 3px;
  border-radius: 40%;
  background-color: #fff;
  margin-top: 0.3em;
  transition: all 0.7s ease-out;
}
.hamburger.change {
  transform: rotate(180deg);
}

.hamburger.change .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.change .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.change .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.show {
  transition: all 1s ease-out;
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  background: rgb(77, 58, 58, 0.8) !important;
  height: 100vh;
  width: 50%;
  align-items: center;
  opacity: 1;
  transition: all 0.7s ease-out;
}
@media screen and (min-width: 1022px) {
  .nav {
    background: none !important;
    position: static;
    @apply h-full flex flex-grow;
  }
}
</style>
