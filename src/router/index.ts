import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Board from "../pages/Board.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/board/:id", component: Board, name: "Board" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;