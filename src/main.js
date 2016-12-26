/**
 * Create by zechun.chen on 2016/12/22
 */

import Vue from 'vue'
import router from './routers'
import store from './vuex'
import './config'

Vue.config.debug = true;
//自定义滚动事件
Vue.directive('scroll',{
  bind:function(el,binding){
    window.addEventListener('scroll',() => {
      // console.log(document.body.scrollTop,window.innerHeight,el.clientHeight)
      // if(document.body.scrollTop + window.innerHeight >= el.clientHeight){
        let fnc = binding.value;
        fnc();
      // }
    })
  }
})
const app = new Vue({
  router,
  store,
}).$mount('#app');