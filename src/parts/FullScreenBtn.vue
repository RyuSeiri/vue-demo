<template>
  <button class="dark-mode-switch fullscreen-button" @click="toggleFullScreen">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M5 3h3v2H5V3zM3 3h2v5H3V3zM5 17h3v-2H5v2zM3 17h2v-5H3v5zM15 3h-3v2h3V3zM17 3h-2v5h2V3zM15 17h-3v-2h3v2zM17 17h-2v-5h2v5z"
      ></path>
    </svg>
  </button>
</template>
<script>
export default {
  methods: {
    /**
     *  画面最大化
     *  @returns {void}
     */
    toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
  },
};
</script>
