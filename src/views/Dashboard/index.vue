<template>
	<div class="main-container">
		<Header/>

		<div class="main-content p-4">
			<div class="flex">
				<div class="flex-2">
					<div class="card mr-10 overflow-y-auto max-h-vh8.5/10">
						<div 
							v-for="(list, index) in 10" 
							:key="list.index" 
							class="items p-4 cursor-pointer"
							v-bind:class="{'border-b ' : index != 10}"
						>
							<div class="capitalize">{{ 'zsh git completion' }}</div>
							<div class="flex items-center">
								<div class="flex-1">
									<span v-for="cat in 3" :key="cat.index" class="text-xxs mr-2 bg-gray-200 p-1 rounded-sm">command line</span>
								</div>
								<div class="flex-1 text-right text-xs">
									<p>{{ 'Jhon Doe' }}</p>
									<p class="text-gray-500">
										{{ '12-25-2020' | moment('from', 'now') }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-1"></div>
			</div>
			
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