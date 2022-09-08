import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Hello-World",
      component: HelloWorld,
    },
    {
      path: "/nex-tick",
      name: "nex-tick",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/nex-tick.vue"),
    },
    {
      path: "/lifeCycle",
      name: "lifeCycle",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/life-cycle.vue"),
    },
    {
      path: "/Teleport",
      name: "Teleport",
      component: () => import("../views/Teleport.vue"),
    },
    {
      path: "/vbind-css",
      name: "vbind-css",
      component: () => import("../views/vbind-css.vue"),
    },
    {
      path: "/ref-family-bucket",
      name: "ref-family-bucket",
      component: () => import("../views/ref-family-bucket.vue"),
    },
  ],
});

export default router;
