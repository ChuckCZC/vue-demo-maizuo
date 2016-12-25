<template>
	<div id="detail" v-if="detail">
		<div class="cover"><img :src="detail.cover.origin" alt=""></div>
		<div class="desc">
			<div class="title">影片简介</div>
			<div class="info">
				<p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{detail.director}}</p>
				<p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for='item in detail.actors'>{{item.name}}</span></p>
				<p>地区语言：{{detail.nation}}({{detail.language}})</p>
				<p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{detail.category}}</p>
				<p>上映日期：{{detail.premiereAt|getDay}}</p>
				<p class="p">{{detail.synopsis}}</p>
			</div>
		</div>
		<router-link v-if="detail.isNowPlaying" :to="{name:'cinema',params:{id:detail.id}}" class="go-pay">立即购票</router-link>
	</div>
</template>
<script>
	require('../assets/detail.sass')
	export default {
		created:function(){
			// if(!this.detail){
				let id = this.$route.params.id;
				this.$store.dispatch('getFilmDetail',id)
			// }
		},
		filters:{
			getDay:function(time){
				let date = new Date(time*1),
						year = date.getFullYear(),
						month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + (date.getMonth() + 1),
						day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

				return year + '-' + month + '-' + day;
			}
		},
		computed:{
			detail:function(){
				return this.$store.getters.getFilmDetail;
			},
			
		}
	}
</script>