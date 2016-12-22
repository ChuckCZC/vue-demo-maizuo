import api from '../api'
import * as types from '../types'

const state = {
    banner:[],

}

const actions = {
    getBannerList:function({commit}){
        commit(types.COM_LOADING_STATUS,true);
        api.getBannerList(function(res){
            commit(types.HOME_GET_BANNER_LIST,res.data);
            commit(types.COM_LOADING_STATUS,false);
        })
    }
}
const getters = {
    getBannerList: state => state.banner
}

const mutations = {
    [types.HOME_GET_BANNER_LIST](state,res){
        state.banner = res.billboards
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}