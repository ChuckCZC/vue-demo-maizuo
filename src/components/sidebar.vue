<template>
	<div id="sidebar">
		<div class="sidebar-container" @click='hideNav' v-show="show">
			<div class="sidebar-overlay">
				<transition name="leftNav" mode="">
					<nav v-show='show'>
						<ul>
							<li v-for='menu in menuList'>
								<router-link :to='menu.path'>
									<span>{{menu.name}}</span>
									<i class="icon iconfont icon-right"></i>
								</router-link>
							</li>
						</ul>
					</nav>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
	require('../assets/sidebar.sass')
	export default {
		data(){
			let menuList = [
				{
					name:'首页',
					path:'/home'
				},
				{
					name:'影片',
					path:'/film/now-playing'
				}
			]
			return {
				menuList:menuList
			}
		},
		computed:{
			show:function(){
				return this.$store.getters.leftNavState
			}
		},
		methods:{
			hideNav(){
				this.$store.dispatch('changeLeftNavState',false)
			}
		}
	}
</script>