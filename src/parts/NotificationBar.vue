<template>
  <div v-show="isShow" class="notification-bar">
    <div class="notification-bar-content">
      <span>{{ message }}</span>
    </div>
    <button class="dark-mode-switch notification-bar-button" @click="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ["message", "isShow"],
  methods: {
    /**
     * notification を閉じる
     * @returns {void}
     */
    close() {
      this.show = false;
    },
  },
  computed: {
    show: {
      // 親コンポーネントから値を更新する
      get: function () {
        return this.isShow;
      },
      // 子コンポーネントから値を更新する
      set: function (isShow) {
        this.$emit("show", isShow);
      },
    },
  },
};
</script>
