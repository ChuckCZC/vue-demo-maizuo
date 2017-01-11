/**
 * Create by zechun.chen on 2016/12/22
 * QQ：822599633
 */

import Vue from 'vue'
import router from './routers'
import store from './vuex'
import './config'

Vue.config.debug = true;
//自定义滚动指令
Vue.directive('scroll',{
  bind:function(el,binding){
    window.addEventListener('scroll',() => {
        let fnc = binding.value;
        fnc(el);
    })
  }
})
const app = new Vue({
  router,
  store,
}).$mount('#app');