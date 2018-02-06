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

Vue.prototype.$logoURL = 'https://firebasestorage.googleapis.com/v0/b/amu2ias-firebase.appspot.com/o/static%2Fimg%2Flogo.png?alt=media&token=2f2a0379-fd0e-437e-8d0b-0223c22e82f5'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
