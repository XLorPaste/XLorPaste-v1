import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/index",
      name: "index",
      component: resolve => require(["./components/editor.vue"], resolve)
    },
    {
      path: "",
      redirect: "/index"
    },
    {
      path: "/:id",
      component: resolve => require(["./components/view.vue"], resolve)
    },
    {
      path: "*",
      component: resolve => require(["./components/error.vue"], resolve)
    }
  ]
});
