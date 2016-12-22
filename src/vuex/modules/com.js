/**
 * Create by zechun.chen on 2016/12/22
 */
import * as types from '../types'
/**
 * App通用配置
 */
const state = {
    isBack:false,
    isShare:false,
    title:'',
    isFooter:false,
    loading:false,
    mark:false
}

const actions = {
    comConf({commit},settings){
        commit(types.COM_CONF,settings)
    }
}
const getters = {
    comConf: state => state,
    loading: state => state.loading
}
const mutations = {
    [types.COM_CONF](state,settings){
        state = Object.assign(state,settings)
    },
    [types.COM_LOADING_STATUS](state,status){
        state.loading = status;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}