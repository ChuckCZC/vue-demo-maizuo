/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'

var url = '/api/'
export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getBannerList:function(cb){
        axios.get(url + 'billboard/home?t=' + new Date()*1 + '&callback=?').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        }).catch((error) => {
            // new Error('desc');
            return Promise.reject(error)
        })
    },
    /**
     * 获取热映电影
     */
    getNowPlaying:function(cb){
		axios.get(url + 'film/now-playing?_t=' + new Date()*1 +'&page=1&count=5').then(function(res){
			if(res.status >= 200 && res.status <300){
				cb(res.data)
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
    },
    /**
     * 获取即将上映电影
     */
    getComingSoon:function(cb){
        axios.get(url + 'film/coming-soon?__t=' + new Date()*1 +'&page=1&count=3').then(function(res){
			if(res.status >= 200 && res.status < 300){
				cb(res.data)
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
    },
    /**
     * 根据id获取相关影片信息
     */
    getFilmDetail:function(id,cb){
        axios.get(url + 'film/' + id + '?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 获取相关影院
     */
    getCinemaList:function(id,cb){
        axios.get(url + 'film/' + id + '/cinema?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}
