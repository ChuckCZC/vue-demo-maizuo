<template>
	<div id="cinema" v-if="list.length>0">
		<div class="item" v-for="item in district">
			<div class="title" @click="changeArea(item.pinyin)">{{item.name}}</div>
			<div class="list" v-if='pinyin == item.pinyin'>
				<div class="shop" v-for="shop in list" v-if="shop.district.pinyin == item.pinyin">
					<!--跳回官网的影院列表-->
					<a :href='"http://m.maizuo.com/v4/?co=maizuo#!/film/" + _id + "/cinema"'>
						<div class="desc">
							<div class="title">{{shop.name}} <span>座</span><span v-if="shop.itemTypes.length>3">通</span></div>
							<div class="tip">
								<span v-for="tip in shop.labels" v-if="tip.type != 'REFUNDABLE_SEAT_TICKET'" :class="tip.type.toLocaleLowerCase()">{{tip.name}}</span>
							</div>
							<div class="area">{{shop.address}}</div>
							<div class="extra">距离未知 | 剩余{{shop.avaliableSchedule}}场</div>
						</div>
						<div class="price">￥{{shop.minimumPrice}}</div>					
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	require('../assets/cinema.sass')
	export default {
		data(){
			return {
				pinyin:''
			}
		},
		created:function(){
			if(this.list.length == 0){
				let id = this.$route.params.id
				this.$store.dispatch('getCinemaList',id)
			}
		},
		filters:{
		},
		computed:{
			list:function(){
				return this.$store.getters.getCinemaList;
			},
			district:function(){
				this.pinyin = this.$store.getters.getDistrict[0].pinyin
				return this.$store.getters.getDistrict
			},
			_id:function(){
				//获取影片id，将所有影院重新链接到官网的相关影片的影院列表
				return this.$route.params.id
			}
		},
		methods:{
			changeArea:function(area){
				if(this.pinyin == area){
					this.pinyin = ''
					return true
				}
				this.pinyin = area;
				return true;
			}
		}
	}
</script>