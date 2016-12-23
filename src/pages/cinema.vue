<template>
	<div id="cinema">
	</div>
</template>
<script>
	export default {
		created:function(){
			if(this.list.length == 0){
				let id = this.$route.params.id
				console.log(id)
				this.$store.dispatch('getCinemaList',id)
			}
		},
		filters:{

		},
		computed:{
			list:function(){
				return this.$store.getters.getCinemaList;
			}
		}
	}
</script>