<template>
  <div class="tab-content">
    <div class="canvas-container">
      <canvas width="2048" height="2048"></canvas>
      <canvas style="display: none"></canvas>
    </div>
    <div class="canvas-container" style="display: none">
      <canvas width="1024" height="512"></canvas>
      <canvas style="display: none"> </canvas>
    </div>
    <div class="canvas-container" style="display: none">
      <canvas width="512" height="256"></canvas>
      <canvas style="display: none"> </canvas>
    </div>
    <div class="choose-view-buttons">
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
    </div>
  </div>
</template>
