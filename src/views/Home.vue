<template>
  <!-- 全体的なcontainer -->
  <div id="kit-creator" class="kit-creator">
    <!-- Setting bar -->
    <SettingsBar />
    <div id="preview-container" class="preview-container">
      <!-- tab bar -->
      <TabBar />
      <!-- notification bar -->
      <NotificationBar
        message="nofication message"
        :isShow="isShowNofication"
        @show="isShowNofication = $event"
      />
      <div id="tab-content-container">
        <!-- ルートとマッチしたコンポーネントがここへ描画されます -->
        <router-view></router-view>
      </div>
    </div>
    <!-- download button section -->
    <DownLoadBtnSection />
    <!-- color picker -->
    <ColorPicker
      :isShow="isShowColorPicker"
      @show="isShowColorPicker = $event"
    />
    <div
      id="sample-color-preview"
      class="sample-color-preview"
      style="left: 0px; top: 0px; opacity: 1; display: none"
    >
      <canvas id="sample-color-preview-canvas" width="13" height="13"></canvas>
      <div
        id="sample-color-preview-center"
        class="sample-color-preview-center"
      ></div>
    </div>
    <div id="screen-orientation-hint">
      <!-- <img src="/kit-creator/dist/screen-rotation.d8e40673..png" /> -->
      <div>Rotate your device to landscape mode</div>
    </div>
    <!-- selector modal -->
    <SelectorModal
      :isShow="isShowSelectorModal"
      @show="isShowSelectorModal = $event"
    />

    <SavePriviewModal
      :isShow="isShowSavePriviewModal"
      @show="isShowSavePriviewModal = $event"
    />
  </div>
  <!-- Loading -->
  <Loading :isLoading="isLoading" />
</template>

<script>
import TabBar from "../parts/TabBar.vue";
import SettingsBar from "../parts/SettingsBar.vue";
import NotificationBar from "../parts/NotificationBar.vue";
import DownLoadBtnSection from "../parts/DownLoadBtnSection.vue";
import ColorPicker from "../parts/ColorPicker.vue";
import Loading from "@/parts/Loading.vue";
import SelectorModal from "@/parts/SelectorModal.vue";
import SavePriviewModal from "@/parts/SavePriviewModal.vue";

export default {
  components: {
    SettingsBar,
    NotificationBar,
    TabBar,
    DownLoadBtnSection,
    ColorPicker,
    Loading,
    SelectorModal,
    SavePriviewModal,
  },
  data: () => ({
    isShowNofication: false,
    isShowColorPicker: false,
    isLoading: false,
    isShowSelectorModal: false,
    isShowSavePriviewModal: false,
  }),
};
</script>
