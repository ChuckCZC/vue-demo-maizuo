import api from '../api'
import * as types from '../types'

const state = {
    detail:null,
    // title:''
}

const actions = {
    //获取影片详情并设置标题
    getFilmDetail:function({commit},id){
        commit(types.COM_LOADING_STATUS,true);
        api.getFilmDetail(id,function(res){
            commit(types.COM_CONF,{
                title: res.data.film.name
            })
            commit(types.DETAIL_GET_INFO,res.data);
            commit(types.COM_LOADING_STATUS,false);
        })
    },
}
const getters = {
    getFilmDetail: state => state.detail,
}

const mutations = {
    [types.DETAIL_GET_INFO](state,res){
        state.detail = res.film
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}