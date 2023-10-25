<template>
  <div id="loading-overlay" v-show="isLoading"></div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>
