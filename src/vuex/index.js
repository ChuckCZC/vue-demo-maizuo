/**
 * Create by zechun.chen on 2016/12/22
 */

import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import home from './modules/home'
import detail from './modules/detail'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com,
        home,
        detail
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default store;