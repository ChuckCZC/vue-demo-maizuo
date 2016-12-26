/**
 * Create by zechun.chen on 2016/12/22
 * 路由规则
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        component:require('./App'),
        children:[
            {
                path:'/home',
                name:'home',
                component:require('./pages/home')
            },
            {
                path:'/detail/:id',
                name:'detail',
                component:require('./pages/detail')
            },
            {
                path:'/cinema/:id',
                name:'cinema',
                component:require('./pages/cinema')
            },
            {
                path:'/film/:type',
                name:'film',
                component:require('./pages/film')
            }
        ]
    }
];

const router = new VueRouter({
    routes:routes,
    history:true,
    linkActiveClass:'active', //如果有底部导航栏，这个属性可以为被选中的路由增加相应的选中状态class
});

export default router;