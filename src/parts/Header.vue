<template>
  <h1 class="main-header">
    <div class="site-switch-container">
      <button class="site-switch-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="chevron"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 256 256"
          class="logo"
        >
          <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="14"
            d="M189.112 236V99.182l14.99 22.994L241 101.481c-8.071-13.796-26.52-43.69-31.133-50.588-5.765-8.623-13.26-14.947-26.52-18.396-10.608-2.759-32.862-8.814-42.663-11.497h-25.368c-9.801 2.683-32.055 8.738-42.663 11.497-13.26 3.45-20.755 9.773-26.52 18.396C41.52 57.791 23.07 87.684 15 101.481l36.898 20.695 14.99-22.994V236h122.224z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
            d="M140.927 100.911l14.144 14.116-14.144-14.116zm6-5.988a10.012 10.012 0 0114.144 0 9.973 9.973 0 012.929 7.058 9.974 9.974 0 01-2.929 7.058L106 164H92v-14.259l54.927-54.818v0z"
          ></path></svg
        ><span>{{ title }}</span>
      </button>
    </div>
    <!-- dark mode button -->
    <DarkModeSwitch />
  </h1>
</template>

<script>
import DarkModeSwitch from "./DarkModeSwitch.vue";
export default {
  props: ["title"],
  components: { DarkModeSwitch },
};
</script>
