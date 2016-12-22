<template>
  <div class="wrap">
    <com-header :com="comConf" />
    <div class="container">
      <transition :name="transitionName">
        <router-view class="child-view" />
      </transition>
    </div>
    <!--<com-footer v-show="comConf:isFooter" />-->
    <com-loading v-if='loading' />
  </div>
</template>
<script>
  require('./assets/reset.sass')
  import Header from './components/header'
  // import Footer from './components/footer'
  import Loading from './components/loading'

  export default {
    data(){
      return {
        transitionName:'slide-left'
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
    computed:{
      comConf:function(){
        return this.$store.getters.comConf
      },
      loading:function(){
        return this.$store.getters.loading
      }
    },
    components:{
      comHeader:Header,
      comLoading:Loading
    }
  }
</script>
