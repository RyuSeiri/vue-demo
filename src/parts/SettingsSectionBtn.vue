<template>
  <div class="settings-section-selector">
    <div>
      <button title="Settings" class="settingsMenu" @click="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="no-event"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button title="Logos" class="settingsMenu" @click="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          class="no-event"
        >
          <path
            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z"
          ></path>
        </svg>
      </button>
      <button class="settingsMenu active" title="Shirt" @click="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          class="no-event"
        >
          <path
            fill="currentColor"
            d="M5.133 18V7.182L3.939 9 1 7.364c.643-1.091 2.112-3.455 2.48-4 .459-.682 1.056-1.182 2.112-1.455.845-.218 2.617-.697 3.398-.909h2.02c.78.212 2.553.69 3.398.91 1.056.272 1.653.772 2.112 1.454.368.545 1.837 2.909 2.48 4L16.061 9l-1.194-1.818V18H5.132z"
          ></path>
        </svg>
      </button>
      <button title="Shorts" class="settingsMenu" @click="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          class="no-event"
        >
          <path
            fill="currentColor"
            d="M18 16L16.75 2H10v8.012l.563 6.868c.86.186 1.87.378 3.937.12 2.067-.258 2.976-.6 3.5-1zM2 16L3.25 2H10v8.012l-.563 6.868c-.86.186-1.87.378-3.937.12-2.067-.258-2.976-.6-3.5-1z"
          ></path>
        </svg>
      </button>
      <button title="Socks" class="settingsMenu" @click="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          class="no-event"
        >
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
      <button title="Printing" class="settingsMenu" @click="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="no-event"
        >
          <path
            d="M6.80384 3.4437H4.21942L1 5.48203V7.9204L3.97812 6.05352H4.05432V16.4484H6.80384V3.4437Z"
            fill=""
          ></path>
          <path
            d="M13.7486 16.7341C17.0188 16.7341 18.9936 14.2449 19 9.95873C19.0063 5.70427 17.0061 3.2659 13.7486 3.2659C10.4847 3.2659 8.50354 5.69792 8.49719 9.95873C8.48449 14.2322 10.472 16.7278 13.7486 16.7341ZM13.7486 14.4545C12.2564 14.4545 11.2912 12.9559 11.2975 9.95873C11.3039 7.00601 12.2627 5.52013 13.7486 5.52013C15.2281 5.52013 16.1933 7.00601 16.1933 9.95873C16.1997 12.9559 15.2345 14.4545 13.7486 14.4545Z"
            fill=""
          ></path>
        </svg>
      </button>
      <button title="Tools" class="settingsMenu" @click.prevent="changeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="no-event"
        >
          <path
            fill-rule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * ボタン押下して、メニュー切り替える
     */
    changeMenu(event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelectorAll(".settingsMenu").forEach((menu) => {
        menu.classList.remove("active");
      });
      event.target.classList.add("active");
      const targetMenuTitle = event.target.getAttribute("title");
      this.$emit("customClick", targetMenuTitle);
    },
  },
};
</script>
