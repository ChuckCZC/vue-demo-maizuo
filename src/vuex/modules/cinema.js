import api from '../api'
import * as types from '../types'

const state = {
    list:[],
    district:[]
}

const actions = {
    getCinemaList:function({commit},id){
        commit(types.COM_LOADING_STATUS,true);
        api.getCinemaList(id,function(res){
            commit(types.CINEMA_GET_LIST,res.data);
            commit(types.COM_LOADING_STATUS,false);
        })
    },
}
const getters = {
    getCinemaList: state => state.list,
    getDistrict: state => state.district
}

const mutations = {
    [types.CINEMA_GET_LIST](state,res){
        let district = [],_json={};
        for(let item of res.cinemas){
            _json = {
                name:item.district.name,
                pinyin:item.district.pinyin
            }
            district = district.concat(_json)
        }
        //去重并按拼音排序
        district = district.unique('name').sort(function(a,b){
            return a.pinyin.localeCompare(b.pinyin.charAt(0))
        });
        state.district = district;
        state.list = res.cinemas;
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}