<template>
	<div class="header-container flex border-b items-center px-8">
		<div class="mr-10 logo-wrapper border-r pr-10 h-1/2 flex items-center">
			<!-- <img src="" alt=""> -->
			<span class="logo-text text-lg">DevNote</span>
		</div>
		<div class="flex flex-2 nav-menu">
			<div class="menu-items mr-10">Topics</div>
			<div class="menu-items mr-10">Trending</div>
			<div class="menu-items mr-10">Categories</div>
		</div>
		<div class="flex flex-1">
			<div class="flex-1 search-bar text-right">
				<form class="h-full w-full">
					<div class="input-div relative h-full w-full">
						<div class="input-icon absolute left-2 top-1.5 h-5">
							<svg class="h-full text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
						<input type="text" class="border-2 rounded-md h-full w-full pl-9">
					</div>
				</form>
			</div>
			<div class="ml-7 notif">
				<svg class="h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
				</svg>
			</div>
			<div class="ml-7 user-img">
				<img :src="'../assets/img/boy-icon-png-10.jpg'" class="h-8 rounded cursor-pointer" alt="">
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import Header from './function.vue'
	export default Header
</script>