<template>
	<div id="home">
		<div class="banner">
			<swiper class="banner-swiper">
				<swiper-slide class='slide' v-for='item in banner'>
					<a target='_blank' :href="item.url">
						<img :src="item.imageUrl" alt="">
					</a>
				</swiper-slide>
			</swiper>
		</div>
		<div class="now-playing">
			<div class="item" v-for='item in nowplay'>
				<img :src="item.cover.origin" alt="">
				<div class="desc">
					<div class="info"> 
						<h4>{{item.name}}</h4>
						<p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
					</div>
					<div class="count">{{item.grade}}</div>
				</div>
			</div>
			<div class="go-more">
				更多热映电影
			</div>
		</div>
		<div class="coming-title">
			<div>即将上映</div>
		</div>
		<div class="coming-soon">
			<div class="item" v-for='item in coming'>
				<img :src="item.cover.origin" alt="">
				<div class="desc">
					<div class="info"> 
						<h4>{{item.name}}</h4>
						<p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
					</div>
					<div class="count">{{item.grade}}</div>
				</div>
			</div>
			<div class="go-more">
				更多即将上映电影
			</div>
		</div>
	</div>
</template>
<script>
	require('../assets/home.sass')
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default {
		created:function(){
			this.$store.commit('COM_CONF',{
				title:'卖座电影'
			});
			if(this.banner.length == 0){
				this.$store.dispatch('getBannerList')
			}
			if(this.nowplay.length == 0){
				this.$store.dispatch('getNowPlaying')
			}
			if(this.coming.length == 0){
				this.$store.dispatch('getComingSoon')
			}
		},
		computed:{
			swiperOption:{
				autoplay:3000,
				autoHeight:true,
			},
			banner:function(){
				return this.$store.getters.getBannerList
			},
			nowplay:function(){
				return this.$store.getters.getNowPlaying
			},
			coming:function(){
				return this.$store.getters.getComingSoon
			}
		},
		methods:{

		},
		components:{
			swiper,swiperSlide
		}
	}
</script>
