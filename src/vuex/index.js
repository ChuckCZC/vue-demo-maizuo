/**
 * Create by zechun.chen on 2016/12/22
 */

import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import home from './modules/home'
import detail from './modules/detail'
import cinema from './modules/cinema'
import film from './modules/film'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com,
        home,
        detail,
        cinema,
        film
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default store;