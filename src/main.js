/**
 * Create by zechun.chen on 2016/12/22
 */

import Vue from 'vue'
import router from './routers'
import store from './vuex'
import './config'

Vue.config.debug = true;

const app = new Vue({
  router,
  store,
}).$mount('#app');