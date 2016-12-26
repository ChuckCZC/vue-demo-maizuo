import api from '../api'
import * as types from '../types'

const state = {
    nowPlayingList:[],
    comingSoonList:[],
    nowPage:0,
    comingPage:0,
    getNowMore:true,
    getComingMore:true,
}

const actions = {
    getNowPlayList:function({commit}){
        if(state.getNowMore){
            // commit(types.COM_LOADING_STATUS,true);
            commit(types.FILE_NOWPLAYING_NUM);
            api.getNowPlayList(state.nowPage,function(res){
                commit(types.FILM_GET_NOWPLAYING,res.data)
                // commit(types.COM_LOADING_STATUS,false);
            })
        }
        
    },
    getComingList:function({commit}){
        if(state.getComingMore){
            // commit(types.COM_LOADING_STATUS,true);
            commit(types.FILM_COMINGSOON_NUM);
            api.getComingList(state.comingPage,function(res){
                commit(types.FILM_GET_COMINGSOON,res.data)
                // commit(types.COM_LOADING_STATUS,false);
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
        console.log(state.getNowMore,res.page)
        state.nowPlayingList = state.nowPlayingList.concat(res.films)
        state.getNowMore = res.page.current<res.page.total ? true : false
        
    },
    [types.FILE_NOWPLAYING_NUM](state){
        state.nowPage += 1
        state.getNowMore = false
    },
    [types.FILM_GET_COMINGSOON](state,res){
        console.log(state.getComingMore,res.page)
        state.comingSoonList = state.comingSoonList.concat(res.films)
        state.getComingMore = res.page.current<res.page.total ? true : false
    },
    [types.FILM_COMINGSOON_NUM](state){
        state.comingPage += 1
        state.getComingMore = false
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}