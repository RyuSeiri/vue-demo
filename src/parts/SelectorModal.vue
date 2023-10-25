<template>
  <div class="selector-container" v-show="isShow">
    <div class="selector-outer">
      <div class="selector-bg"></div>
      <div tabindex="1" class="selector">
        <button class="dark-mode-switch selector-close-button" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <h2>
          <span>Inspiration</span>
          <div class="button-container">
            <button class="button select-button active">FIFA</button
            ><button class="button select-button">PES</button
            ><button class="button select-button">FM</button>
          </div>
        </h2>
        <div class="selector-topbar">
          <div class="selector-filter-input-container">
            <input
              placeholder="Filter"
              onclick="this.select()"
              class="selector-filter-input"
            />
            <button class="selector-filter-clear" style="display: none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.3 4.3a1 1 0 011.4 0L10 8.58l4.3-4.3a1 1 0 111.4 1.42L11.42 10l4.3 4.3a1 1 0 01-1.42 1.4L10 11.42l-4.3 4.3a1 1 0 01-1.4-1.42L8.58 10l-4.3-4.3a1 1 0 010-1.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>No results.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isShow"],
  methods: {
    /**
     * color picker を閉じる
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
      // 親コンポーネントから値を更新する通知する
      set: function (isShow) {
        this.$emit("show", isShow);
      },
    },
  },
};
</script>
