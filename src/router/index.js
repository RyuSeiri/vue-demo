import { createRouter, createWebHistory } from "vue-router";
import ThreeD from "../views/ThreeD.vue";
import Texture from "../views/Texture.vue";
import HowTo from "../views/HowTo.vue";
import Upcoming from "../views/Upcoming.vue";
import About from "../views/About.vue";
import Account from "../views/Account.vue";
import NotFound from "../views/NotFound.vue";

// ルーターを宣言
const routes = [
  {
    path: "/",
    name: "3d",
    component: ThreeD,
  },
  {
    path: "/texture",
    name: "Texture",
    component: Texture,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: Upcoming,
  },
  {
    path: "/howto",
    name: "HowTo",
    component: HowTo,
  },
  {
    path: "/texture",
    name: "Texture",
    component: Texture,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/:catchAll(.*)", //設定したurlにいずれもマッチしない場合
    name: "NotFound",
    component: NotFound, //NotFoundコンポーネントに遷移
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
