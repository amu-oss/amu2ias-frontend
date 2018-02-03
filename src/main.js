// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueHead from 'vue-head'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store'

sync(store, router)
Vue.use(Vuetify)
Vue.use(VueHead)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
