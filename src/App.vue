<template>
  <div class="wrap" v-scroll="showTop">
    <com-header :com="comConf" />
    <div class="container">
      <transition :name="transitionName"> 
        <router-view class="child-view" />
      </transition>
    </div>
    <com-loading v-show='loading' />
    <com-sidebar />
    <div @click="gotop" class="go-top" :class="goTop?'active':''"><i class="icon iconfont icon-top-copy"></i></div>
  </div>
</template>
<script>
  require('./assets/reset.sass')
  import {mapGetters} from 'vuex'
  import Header from './components/header'
  import Loading from './components/loading'
  import Sidebar from './components/sidebar'

  export default {
    data(){
      return {
        transitionName:'slide-left',
        goTop:false
      }
    },
    created:function(){
      if(this.$route.name == undefined)
        return this.$router.push('home')
      this.$store.commit('COM_CONF',{isFooter:true})
    },
    watch:{
      '$route' (to,from){
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    },
    computed:mapGetters({
      comConf:'comConf',
      loading:'loading'
    }),
    components:{
      comHeader:Header,
      comLoading:Loading,
      comSidebar:Sidebar
    },
    methods:{
      showTop:function(){
        if(document.body.scrollTop>200){
          this.goTop = true
        }else{
          this.goTop = false
        }
      },
      //返回顶部
      gotop:function(){
        let speed = 10;
        let timer = setInterval(function(){
          if(document.body.scrollTop>0){
            document.body.scrollTop = document.body.scrollTop-speed > 0 ? document.body.scrollTop-speed : 0 ;
            speed += 20;      
          }else{
            clearInterval(timer)
          }       
        },16)
      }
    }
  }
</script>
