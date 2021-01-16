<template>
	<div class="main-container">
		<Loader v-if="showLoader"/>
		<Header/>

		<div class="main-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import Dashboard from './function.vue'
	export default Dashboard
</script>