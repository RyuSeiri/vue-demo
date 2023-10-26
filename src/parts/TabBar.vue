<template>
  <div class="tabbar">
    <!-- quick links -->
    <QuickLinks />
    <!-- タブの切り替えはVueRouterで実現する -->
    <Tab />
    <!-- full screen button -->
    <FullScreenBtn />
  </div>
</template>
<script setup>
import FullScreenBtn from "./FullScreenBtn.vue";
import QuickLinks from "./QuickLinks.vue";
import Tab from "./Tab.vue";
</script>
