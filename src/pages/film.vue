<template>
	<div id="film">
		<div class="tabs">
			<div class="item" @click="changeTab('now-playing')" :class="type=='now-playing'?'active':''">正在热映</div>
			<div class="item" @click="changeTab('coming-soon')" :class="type=='coming-soon'?'active':''">即将上映</div>
		</div>
		<div class="tab-content">
			<div class="now-playing-list" v-if="type=='now-playing'">
				<router-link  v-for="item in nowList" class="item" :to="{name:'cinema',params:{id:item.id}}">
					<div class="avater"><img :src="item.poster.thumbnail" alt=""></div>
					<div class="info">
						<h3>{{item.name}}</h3>
						<p>{{item.intro}}</p>
						<p>
							<span>{{item.cinemaCount}}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;
							<span>{{item.watchCount}}</span>人购票
						</p>
					</div>
					<div class="count">{{item.grade}}</div>
				</router-link>
			</div>
			<div class="coming-soon-list" v-if="type=='coming-soon'">
				<router-link class="item" v-for="item in comingList" :to="{name:'detail',params:{id:item.id}}">
					<div class="avater"><img :src="item.poster.thumbnail" alt=""></div>
					<div class="info">
						<h3>{{item.name}}</h3>
						<p>{{item.intro}}</p>
						<p>
							<span class='time'>{{item.premiereAt|formatDate}}</span>
						</p>
					</div>
					<div class="count"></div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
require('../assets/film.sass')
	export default {
		data(){
			return {
				type:'',
			}
		},
		created:function(){
			this.type = this.$route.params.type
			console.log(this.type)
			if(this.type == 'now-playing'){
				this.$store.dispatch('getNowPlayList')
			}
			if(this.type == 'coming-soon'){
				this.$store.dispatch('getComingList')
			}
		},
		computed:{
			nowList:function(){
				return this.$store.getters.getNowPlayList ;
			},
			comingList:function(){
				return this.$store.getters.getComingList
			}
		},
		filters:{
			formatDate:function(time){
				let date = new Date(time*1),
					month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
					day = date.getDate()  > 9 ? date.getDate()  : '0' + date.getDate(),
					week = date.getDay();
				
				let arr = ['日','一','二','三','四','五','六']
				
				return `${month}月${day}日上映   星期${arr[week]}`
			}
		},
		methods:{
			changeTab:function(type){
				if(this.type == type){
					return false;
				}
				this.type = type;
				this.$router.replace({params:{type:type}})
				if(this.type == 'now-playing' && this.nowList.length == 0){
					this.$store.dispatch('getNowPlayList')
				}
				if(this.type == 'coming-soon' && this.comingList.length == 0){
					this.$store.dispatch('getComingList')
				}
			}
		}
	}
</script>