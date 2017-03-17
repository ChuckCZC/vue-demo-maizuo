/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';

let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getBannerList:(cb)=>func_axios(url + 'billboard/home?t=' + new Date()*1,cb),
    /**
     * 获取首页热映电影
     */
    getNowPlaying:(cb)=>func_axios(url + 'film/now-playing?_t=' + new Date()*1 +'&page=1&count=5',cb),
    /**
     * 获取热映列表
     */
    getNowPlayList:(page,cb)=>func_axios(url + 'film/now-playing?page=' + page + '&count=10',cb),
    /**
     * 获取首页即将上映电影
     */
    getComingSoon:(cb)=>func_axios(url + 'film/coming-soon?__t=' + new Date()*1 +'&page=1&count=3',cb),
    /**
     * 获取即将上映列表
     */
    getComingList:(page,cb)=>func_axios(url + 'film/coming-soon?page=' + page +'&count=10',cb),
    /**
     * 根据id获取相关影片信息
     */
    getFilmDetail:(id,cb)=>func_axios(url + 'film/' + id + '?__t=' + new Date()*1,cb),
    /**
     * 获取相关影院
     */
    getCinemaList:(id,cb)=>func_axios(url + 'film/' + id + '/cinema?__t=' + new Date()*1,cb),
    /**
     * 根据影片id跟影院id获取相关电影票时段
     */
    getScheduleList:(filmid,cinemaid,cb)=>func_axios(url + 'schedule?__t=' + new Date()*1 + '&film=' + filmid + '&cinema=' + cinemaid,cb),
}
