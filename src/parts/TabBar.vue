<template>
  <div class="tabbar">
    <!-- quick links -->
    <QuickLinks />

    <!-- タブの切り替えはVueRouterで実現する -->
    <div class="tabs">
      <button class="tab" data-path="/" @click="changeTab">3D</button>
      <button class="tab" data-path="/texture" @click="changeTab">
        Texture
      </button>
      <button class="tab" data-path="/upcoming" @click="changeTab">
        Upcoming
      </button>
      <button class="tab" data-path="/howto" @click="changeTab">How to</button>
      <button class="tab" data-path="/about" @click="changeTab">About</button>
      <button class="tab" data-path="/account" @click="changeTab">
        Account
      </button>
    </div>
    <!-- full screen button -->
    <FullScreenBtn />
  </div>
</template>

<script>
import FullScreenBtn from "./FullScreenBtn.vue";
import QuickLinks from "./QuickLinks.vue";
export default {
  components: { FullScreenBtn, QuickLinks },
  methods: {
    // タブの切り替えはVueRouterで実現する
    changeTab(event) {
      const path = event.target.dataset.path;
      this.$router.push(path);
    },
  },
};
</script>
