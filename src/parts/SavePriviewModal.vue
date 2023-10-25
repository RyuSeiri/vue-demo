<template>
  <div
    data-v-5de88d81=""
    tabindex="0"
    class="selector-outer"
    style="bottom: 40px"
    datasqbottom="40"
    v-show="isShow"
  >
    <div data-v-5de88d81="" class="selector-bg"></div>
    <div data-v-5de88d81="" class="selector">
      <h3 data-v-5de88d81="">
        <span data-v-5de88d81="">Save preview</span
        ><svg
          data-v-5de88d81=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6 has-tooltip"
          data-original-title="null"
        >
          <path
            data-v-5de88d81=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </h3>
      <button data-v-5de88d81="" class="dark-mode-switch selector-close-button" @click="close">
        <svg
          data-v-5de88d81=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            data-v-5de88d81=""
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div data-v-5de88d81="" class="preview-output-container">
        <div data-v-5de88d81="" class="preview-canvas-container">
          <canvas
            data-v-5de88d81=""
            width="2000"
            height="2000"
            class="preview-output__canvas"
            style="cursor: move"
          ></canvas
          ><img
            data-v-5de88d81=""
            width="1080"
            height="1080"
            class="preview-output__canvas"
            style="opacity: 0; display: none"
          />
        </div>
        <div data-v-5de88d81="" class="preview-output__settings">
          <div data-v-5de88d81="" class="tabs">
            <button data-v-5de88d81="" class="tab active">Image</button
            ><button data-v-5de88d81="" class="tab">GIF</button>
          </div>
          <div data-v-5de88d81="">
            <div data-v-5de88d81="" class="input-container">
              <div data-v-5de88d81="" class="input-container-name-container">
                <span data-v-5de88d81="">Resolution</span>
              </div>
              <div data-v-5de88d81="" class="button-container">
                <button class="button select-button active">2000x2000</button
                ><button class="button select-button">1920x1080</button
                ><button class="button select-button">1080x1920</button>
              </div>
            </div>
          </div>
          <div data-v-5de88d81="" style="display: none">
            <div data-v-5de88d81="" class="input-container">
              <div data-v-5de88d81="" class="input-container-name-container">
                <span data-v-5de88d81="">Resolution</span>
              </div>
              <div data-v-5de88d81="" class="button-container">
                <button class="button select-button">256x256</button
                ><button class="button select-button active">512x512</button
                ><button class="button select-button">768x768</button
                ><button class="button select-button">1024x1024</button>
              </div>
            </div>
            <div data-v-5de88d81="">
              <div data-v-5de88d81="" class="input-container">
                <div data-v-5de88d81="" class="input-container">
                  <div class="input-container-name-container">
                    <span>Duration (s)</span
                    ><input type="number" min="1" max="10" />
                  </div>
                  <div>
                    <input
                      type="range"
                      step="0.1"
                      min="1"
                      max="10"
                      class="custom-slider"
                    />
                  </div>
                </div>
                <div data-v-5de88d81="" class="input-container">
                  <div class="input-container-name-container">
                    <span>Frames</span
                    ><input
                      type="number"
                      min="4"
                      max="64"
                      disabled="disabled"
                    />
                  </div>
                  <div>
                    <input type="range" min="0" max="6" class="custom-slider" />
                  </div>
                </div>
                <div data-v-5de88d81="" class="input-container">
                  <div class="input-container-name-container">
                    <span>Quality</span
                    ><input type="number" min="0" max="100" />
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      class="custom-slider"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container">
            <label data-v-5de88d81="" tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Background</span></label
            >
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <div data-v-5de88d81="" class="input-container-name-container">
              <span data-v-5de88d81="">Mode</span>
            </div>
            <div data-v-5de88d81="" class="button-container">
              <button class="button select-button">plain</button
              ><button class="button select-button active">texture</button
              ><button class="button select-button">texture (2)</button
              ><button class="button select-button">texture (3)</button
              ><button class="button select-button">white/black</button
              ><button class="button select-button">black/white</button
              ><button class="button select-button">custom</button
              ><button class="button select-button">image</button
              ><button class="button select-button">image (custom)</button>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <div data-v-5de88d81="" class="button-container">
              <div data-v-5de88d81="" class="image-select">
                <button>
                  <div
                    data-v-5de88d81=""
                    class="collar-selector collar-selector-settings"
                  >
                    <b data-v-5de88d81="">Background: FIFA 22</b>
                  </div>
                </button>
                <ul class="image-select-items" style="display: none">
                  <li>
                    <button class="selected">
                      <img
                        src="/kit-creator/static/bg/fifa-22.jpg"
                        loading="lazy"
                      /><span>FIFA 22</span>
                    </button>
                  </li>
                  <li>
                    <button class="">
                      <img
                        src="/kit-creator/static/bg/fifa-22-cover.jpg"
                        loading="lazy"
                      /><span>FIFA 22 Cover</span>
                    </button>
                  </li>
                  <li>
                    <button class="">
                      <img
                        src="/kit-creator/static/bg/abstract.jpg"
                        loading="lazy"
                      /><span>Abstract</span>
                    </button>
                  </li>
                  <li>
                    <button class="">
                      <img
                        src="/kit-creator/static/bg/studio.jpg"
                        loading="lazy"
                      /><span>Studio</span>
                    </button>
                  </li>
                  <li>
                    <button class="">
                      <img
                        src="/kit-creator/static/bg/studio-light.jpg"
                        loading="lazy"
                      /><span>Light Studio</span>
                    </button>
                  </li>
                  <li>
                    <button class="">
                      <img
                        src="/kit-creator/static/bg/gradient.jpg"
                        loading="lazy"
                      /><span>Gradient</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <div data-v-5de88d81="" class="button-container">
              <label data-v-5de88d81="" class="icon-button button"
                ><input
                  data-v-5de88d81=""
                  type="file"
                  accept="image/*"
                  style="display: none"
                /><svg
                  data-v-5de88d81=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    data-v-5de88d81=""
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path></svg
                ><span data-v-5de88d81="">Upload an image</span></label
              >
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <label data-v-5de88d81="" class="custom-color-label"
              ><button
                data-v-75f023d4=""
                value="#ffffff"
                data-value="#ffffff"
                class="custom-color"
                style="background-color: rgb(255, 255, 255)"
              ></button
              ><span>Background color</span></label
            >
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <label data-v-5de88d81="" tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Blur background</span></label
            >
            <div
              data-v-5de88d81=""
              class="button-container"
              style="display: none"
            >
              <button class="button select-button active">min</button
              ><button class="button select-button">medium</button
              ><button class="button select-button">max</button>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <label data-v-5de88d81="" tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Overlay</span></label
            >
            <div
              data-v-5de88d81=""
              class="input-container"
              style="display: none"
            >
              <div class="input-container-name-container">
                <span>Overlay intensity</span
                ><input type="number" min="0" max="100" />
              </div>
              <div>
                <input type="range" min="0" max="100" class="custom-slider" />
              </div>
            </div>
            <div
              data-v-5de88d81=""
              class="button-container"
              style="display: none"
            >
              <button class="button select-button active">dark</button
              ><button class="button select-button">light</button>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <label data-v-5de88d81="" tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Watermark</span></label
            ><label
              data-v-5de88d81=""
              tabindex="0"
              class="toggle-label"
              style="display: none"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Custom color</span></label
            >
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <label data-v-5de88d81="" class="custom-color-label"
              ><button
                data-v-75f023d4=""
                value="#000000"
                data-value="#000000"
                class="custom-color"
                style="background-color: rgb(0, 0, 0)"
              ></button
              ><span>Watermark color</span></label
            >
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <div data-v-5de88d81="" class="button-container">
              <button class="button select-button">min</button
              ><button class="button select-button">medium</button
              ><button class="button select-button active">max</button>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <div data-v-5de88d81="" class="button-container">
              <button class="button select-button">top left</button
              ><button class="button select-button">top right</button
              ><button class="button select-button">bottom left</button
              ><button class="button select-button active">bottom right</button>
            </div>
          </div>
          <div data-v-5de88d81="" class="input-container" style="display: none">
            <label data-v-5de88d81="" tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Shadow</span></label
            >
            <div
              data-v-5de88d81=""
              class="button-container"
              style="display: none"
            >
              <button class="button select-button active">min</button
              ><button class="button select-button">medium</button
              ><button class="button select-button">max</button>
            </div>
          </div>
          <div
            data-v-5de88d81=""
            class="input-container button-container"
            style="display: none"
          >
            <button data-v-5de88d81="" class="button icon-button">
              <svg
                data-v-5de88d81=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  data-v-5de88d81=""
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path></svg
              ><span
                data-v-5de88d81=""
                style="font-variant-numeric: tabular-nums"
                >Save GIF</span
              ></button
            ><button
              data-v-5de88d81=""
              class="button icon-button button-secondary"
              style="display: none"
            >
              Cancel
            </button>
          </div>
          <span
            data-v-5de88d81=""
            class="gif-predicted-size"
            style="display: none"
          >
            File size:
          </span>
          <div data-v-5de88d81="" class="input-container button-container">
            <button
              data-v-5de88d81=""
              class="button icon-button button-primary"
            >
              <svg
                data-v-5de88d81=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  data-v-5de88d81=""
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path></svg
              ><span data-v-5de88d81="">Save preview</span>
            </button>
          </div>
        </div>
        <div
          data-v-5de88d81=""
          class="preview-output-container__helplines"
          style="display: none"
        >
          <div
            data-v-5de88d81=""
            class="preview-output-container__helpline_vertical"
            style="left: 0px"
          ></div>
          <div
            data-v-5de88d81=""
            class="preview-output-container__helpline_horizontal"
            style="left: 0px; top: 0px; width: 0px"
          ></div>
        </div>
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
