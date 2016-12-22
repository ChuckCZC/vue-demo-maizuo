<template>
	<div id="home">
		<div class="banner">
			<swiper class="banner-swiper">
				<swiper-slide class='slide' v-for='item in banner'>
					<a :href="item.url">
						<img :src="item.imageUrl" alt="">
					</a>
				</swiper-slide>
			</swiper>
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
		},
		computed:{
			banner:function(){
				return this.$store.getters.getBannerList
			},
			swiperOption:{
				autoplay:3000,
				autoHeight:true,
			}
		},
		methods:{

		},
		components:{
			swiper,swiperSlide
		}
	}
</script>