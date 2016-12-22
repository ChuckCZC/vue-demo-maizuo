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
    loading:0,
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
        if(state.loading == 0 && !status){
            return ;
        }
        state.loading = status ? ++state.loading : --state.loading;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}