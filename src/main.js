import Vue from "vue"
import App from "./view/App.vue"
import VueRouter from "vue-router"
import store from "store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "style/style.scss";

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
});
