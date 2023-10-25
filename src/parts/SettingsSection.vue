<template>
  <div class="settings-sections">
    <SettingsSectionBtn @customClick="emitEvent" />
    <SettingsSectionMenu :showTitle="targetMenuTitle" />
  </div>
</template>

<script>
import SettingsSectionBtn from "./SettingsSectionBtn.vue";
import SettingsSectionMenu from "./SettingsSectionMenu.vue";
export default {
  components: { SettingsSectionBtn, SettingsSectionMenu },
  data: () => ({ targetMenuTitle: "Shirt" }),
  methods: {
    emitEvent(targetMenuTitle) {
      this.targetMenuTitle = targetMenuTitle;
    },
  },
};
</script>
