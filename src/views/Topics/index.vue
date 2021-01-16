<template>
	<div class="topics-container overflow-y-auto pb-4">
		<div class="topics-content">
			<div class="w-3/5 mt-4 px-8">
				<div 
					v-for="(list, index) in 10" 
					:key="list.index" 
					class="card mb-3 items px-8 pt-4 pb-6 cursor-pointer hover:opacity-90"
					v-bind:class="{'border-b ' : index != 10}"
					@click="goToNote(list)"
				>
					<div class="capitalize text-3xl my-3 font-family-medium">
						{{ 'The art of having the right (size) web development team' }}
					</div>

					<div class="author-container flex flex-1">
						<div class="img-container mr-2 h-9 w-9">
							<img :src="'../assets/img/boy-icon-png-10.jpg'" class="h-full w-full" alt="">
						</div>
						<div>
							<p class="text-sm">{{ 'Jhon Doe' }}</p>
							<p class="text-xs text-gray-500">
								{{ '12-25-2020' | moment('from', 'now') }}
							</p>
						</div>
					</div>

					<div class="note-image-container h-72 my-8">
						<img :src="'../assets/img/note-img.jpeg'" alt="" class="h-full">
					</div>

					<div class="flex items-center">
						<div class="flex-2">
							<div v-for="cat in 3" :key="cat.index" class="inline-block text-sm mr-2 bg-gray-200 px-3 py-1 rounded-sm">command line</div>
						</div>
						<div class="flex-1 text-right">
							<span>45</span> Views
						</div>
					</div>

					
				</div>
			</div>
		</div>
		<!-- <div class="pagination-container flex w-7/12 pt-3 px-16 mx-auto items-center min-h-50px mb-3 border-t">
			<div class="flex flex-1">
				1 - 10 of 43
			</div>
			<div class="flex flex-1 text-right items-center justify-end pr-1">
				<div 
					class="page-item w-8 text-center text-gray-500 bg-white cursor-pointer border-t border-b border-l hover:bg-gray-100" 
					v-bind:class="{
						'border-r' : (index + 1) == 5,
						'text-gray-900' : (index + 1) == 1,
					}"
					v-for="(list, index) in 5" 
					:key="list.index"
				>{{ index + 1 }}</div>
			</div>
		</div> -->
	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import Topics from './function.vue'
	export default Topics
</script>