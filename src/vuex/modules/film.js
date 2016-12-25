import api from '../api'
import * as types from '../types'

const state = {
    nowPlayingList:[],
    comingSoonList:[],
    nowPage:0,
    nowPageNum:10,
    nowTotal:10,
    comingPage:0,
    comingTotal:10,
    comingPageNum:10,
}

const actions = {
    getNowPlayList:function({commit}){
        if(state.nowPage < state.nowTotal){
            commit(types.COM_LOADING_STATUS,true);
            commit(types.FILE_NOWPLAYING_NUM);
            api.getNowPlayList(state.nowPage,state.nowPageNum,function(res){
                commit(types.FILM_GET_NOWPLAYING,res.data)
                commit(types.COM_LOADING_STATUS,false);
            })
        }
        
    },
    getComingList:function({commit}){
        if(state.comingPage < state.comingTotal){
            commit(types.COM_LOADING_STATUS,true);
            commit(types.FILM_COMINGSOON_NUM);
            api.getComingList(state.comingPage,state.comingTotal,function(res){
                commit(types.FILM_GET_COMINGSOON,res.data)
                commit(types.COM_LOADING_STATUS,false);
            })
        }
    }
}
const getters = {
    getNowPlayList: state => state.nowPlayingList,
    getComingList: state => state.comingSoonList,
}

const mutations = {
    [types.FILM_GET_NOWPLAYING](state,res){
        console.log(res)
        state.nowPlayingList = res.films
    },
    [types.FILE_NOWPLAYING_NUM](state){
        state.nowPage += 1
    },
    [types.FILM_GET_COMINGSOON](state,res){
        console.log(res)
        state.comingSoonList = res.films
    },
    [types.FILM_COMINGSOON_NUM](state){
        state.comingPage += 1
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}