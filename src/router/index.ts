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
    {
      path: "/ref-deconstruct",
      name: "ref-deconstruct",
      component: () => import("../views/ref-deconstruct.vue"),
    },
    {
      path: "/stopPropagation",
      name: "stopPropagation",
      component: () => import("../views/stopPropagation.vue"),
    },
    {
      path: "/responsiveness-lost",
      name: "responsiveness-lost",
      component: () => import("../views/responsiveness-lost.vue"),
    },
    {
      path: "/v-model",
      name: "v-model",
      component: () => import("../views/v-model.vue"),
    },
  ],
});

export default router;
