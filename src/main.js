import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

import router from "./view/router";

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "style/style.scss";

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
