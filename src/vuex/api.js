/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'

var url = 'http://m.maizuo.com/v4/api/'
export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getBannerList:function(cb){
        axios.get(url + 'billboard/home?t=' + (new Date())*1).then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        }).catch((error) => {
            // new Error('desc');
            return Promise.reject(error)
        })
    }
}