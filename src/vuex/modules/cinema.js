import api from '../api'
import * as types from '../types'

const state = {
    list:[],
    district:[]
}

const actions = {
    //获取相关影院列表
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
        /**
         * 接口没有的区域影院没有进行区分就返回，故只能前端进行分类
         * 先将列表遍历一遍，将地区相关归入一个数组
         * 进行数组去重并按照拼音首字母进行排列
         * 去重unique()在config/index.js中定义
         */
        let district = [],_json={};
        for(let item of res.cinemas){
            _json = {
                name:item.district.name,
                pinyin:item.district.pinyin
            }
            district.push(_json)
        }
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