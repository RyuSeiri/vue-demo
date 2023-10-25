import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 共通CSSをインポートする
import "./assets/css/common.css"

// ルータを設定する
createApp(App).use(router).mount("#app");
