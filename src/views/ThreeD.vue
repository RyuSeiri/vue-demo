<template>
  <div class="preview-container-3d">
    <div id="preview">
      <canvas
        data-engine="three.js r135"
        width="1520"
        height="755"
        style="display: block; width: 1520px; height: 755px; touch-action: none"
      ></canvas>
    </div>
    <div class="choose-view-buttons">
      <button class="dark-mode-switch">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M6.755 12V5L5.96 6.176 4 5.118a88.515 88.515 0 011.653-2.589c.306-.44.704-.764 1.408-.94.563-.142 1.745-.452 2.266-.589h1.347c.52.137 1.702.447 2.265.588.704.177 1.102.5 1.408.941A88.568 88.568 0 0116 5.118l-1.96 1.058L13.246 5v7h-6.49zM13.625 18.554L13 12.5h-3v3.678l.281 2.725c.43.073.936.15 1.969.047 1.033-.102 1.113-.237 1.375-.396zM6.375 18.554L7 12.5h3v3.678l-.281 2.725c-.43.073-.936.15-1.969.047-1.033-.102-1.113-.237-1.375-.396z"
          ></path>
        </svg>
      </button>
      <button class="dark-mode-switch active">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M5.133 18V7.182L3.939 9 1 7.364c.643-1.091 2.112-3.455 2.48-4 .459-.682 1.056-1.182 2.112-1.455.845-.218 2.617-.697 3.398-.909h2.02c.78.212 2.553.69 3.398.91 1.056.272 1.653.772 2.112 1.454.368.545 1.837 2.909 2.48 4L16.061 9l-1.194-1.818V18H5.132z"
          ></path>
        </svg>
      </button>
      <button class="dark-mode-switch">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M18 16L16.75 2H10v8.012l.563 6.868c.86.186 1.87.378 3.937.12 2.067-.258 2.976-.6 3.5-1zM2 16L3.25 2H10v8.012l-.563 6.868c-.86.186-1.87.378-3.937.12-2.067-.258-2.976-.6-3.5-1z"
          ></path>
        </svg>
      </button>
      <button class="dark-mode-switch">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M11.483 13.768V4.004L14.997 4v10.799c0 .413.068.817-.42 1.278-.489.461-1.568 1.545-2.502 2.39-.934.845-1.877.583-2.575-.077-.699-.659-.587-1.52-.142-2.01.446-.489 1.444-1.383 1.693-1.65.248-.267.432-.449.432-.962z"
          ></path>
          <path
            fill="currentColor"
            d="M7.483 10.768V1.004L10.997 1v10.799c0 .413.068.817-.42 1.278-.489.461-1.568 1.545-2.502 2.39-.934.845-1.877.583-2.575-.077-.699-.659-.587-1.52-.142-2.01.446-.489 1.444-1.383 1.693-1.65.248-.267.432-.449.432-.962z"
          ></path>
        </svg>
      </button>
      <button class="dark-mode-switch has-tooltip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M5.133 18V7.182L4.5 17H2c0-2.167.165-7.988.5-10 .5-3 .653-2.924.98-3.636.459-.682 1.056-1.182 2.112-1.455.845-.218 2.617-.697 3.398-.909h2c.78.212 2.553.69 3.398.91 1.056.272 1.653.772 2.112 1.454.326.712.48.636.98 3.636.335 2.012.5 7.833.5 10h-2.5l-.633-9.818V18H5.132z"
          ></path>
        </svg>
      </button>
      <button class="dark-mode-switch has-tooltip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 2H2v16h16V2zm-3 9.887C14.861 14.335 13.08 16 10.243 16 6.963 16 5 13.746 5 10.507 5 7.24 6.997 5 10.229 5c2.78 0 4.646 1.616 4.771 4.078h-2.788c-.16-1.061-.853-1.775-1.935-1.775-1.373 0-2.274 1.151-2.274 3.162 0 2.04.894 3.198 2.274 3.198 1.013 0 1.762-.638 1.935-1.776H15z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="dropdown-menu">
        <button class="dark-mode-switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div tabindex="0" class="dropdown-menu__content" style="display: none">
          <h3>Display settings</h3>
          <div class="input-container">
            <label tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Tucked in</span></label
            >
          </div>
          <div class="input-container">
            <label tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Undershirt</span></label
            >
          </div>
          <div class="input-container">
            <label tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Neckwarmer</span></label
            >
          </div>
          <div class="input-container">
            <div class="input-container-name-container">
              <span>Socks</span>
            </div>
            <div class="button-container">
              <button class="button select-button active">standard</button
              ><button class="button select-button">short</button
              ><button class="button select-button">long</button>
            </div>
          </div>
          <div class="layer-settings-separator"></div>
          <div class="input-container">
            <label tabindex="0" class="toggle-label"
              ><div class="toggle"><div class="toggle-thumb"></div></div>
              <span>Mannequin</span></label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="camera-buttons">
      <button class="button" style="display: none">Stop rotating</button>
      <div class="collar-selector has-tooltip">
        <button class="dark-mode-switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            ></path>
          </svg></button
        ><select>
          <option value="front">Front</option>
          <option value="side">Side</option>
          <option value="back">Back</option>
          <option value="side_back">Side (back)</option>
          <option value="rotate">Rotating</option>
        </select>
      </div>
      <button class="dark-mode-switch has-tooltip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          ></path>
        </svg>
      </button>
      <button class="dark-mode-switch has-tooltip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
