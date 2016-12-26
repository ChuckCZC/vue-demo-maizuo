<template>
    <div id="header">
        <a class="go-menu" @click="showNav"><i class="icon iconfont icon-menu"></i></a>
        <div class="title"><p>{{com.title}}</p><a class="go-city">广州<i class="icon iconfont icon-bottom"></i></a></div>
        <a class="go-mine"><i class="icon iconfont icon-people"></i></a>
    </div>
</template>
<script>
    require('../assets/icon/iconfont.css');
    require('../assets/header.sass');
    export default {
        data(){
            return {}
        },
        props:{
            com:{
                type:Object
            }
        },
        methods:{
            showNav:function(){
                return this.$store.dispatch('changeLeftNavState',true)
            }
        }

    }
</script>