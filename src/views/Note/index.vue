<template>
	<div class="note-container flex mx-auto overflow-y-auto pt-4 px-4">
		
		<div class="h-full w-2/3 mx-auto">
			<div class="card w-full pt-8 pb-24 px-6 mb-8">
				<div class="note-header border-b pb-5 mb-5">
					<h1 class="text-4xl mb-6">{{ noteData.title }}</h1>
					<div class="categories-container mb-6">
						<div 
							v-for="cat in noteData.categories" 
							:key="cat.index" 
							class="category-item text-md mr-2 bg-gray-200 p-1 px-3 rounded-sm inline-block"
						>{{ cat }}</div>
					</div>
					<div class="flex items-center">
						<div class="flex flex-1">
							<div class="img-container mr-4 h-12 w-12">
								<img :src="noteData.userImg" class="h-full w-full" alt="">
							</div>
							<div>
								<p class="text-lg">{{ noteData.author }}</p>
								<p class="text-sm text-gray-500">{{ noteData.createdAt | moment('MMMM DD, YYYY') }}</p>
							</div>
						</div>
						<div class="flex-none">
							<div class="social-container flex">
								<div class="flex-1 mx-2">
									<font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="cursor-pointer text-gray-500" />
								</div>
								<div class="flex-1 mx-2">
									<font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="cursor-pointer text-gray-500" />
								</div>
								<div class="flex-1 mx-2">
									<font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" class="cursor-pointer text-gray-500" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div v-if="noteData.noteImg" class="note-image-container w-full mb-5">
					<img :src="noteData.noteImg" alt="" class="w-full h-full">
				</div>

				<div class="note-description-div w-full mb-24" v-html="noteData.htmlDescription">
				</div>

				<div class="comments-container ">
					<p class="text-2xl mb-2">Comments</p>

					<div class="comment-input mb-10">
						<textarea 
							name="" 
							id="" 
							cols="5" 
							rows="5" 
							placeholder=""
							class="border-2 rounded w-full p-2 text-sm"
							style="resize: none;"
						>
						</textarea>
					</div>

					<div class="comment-list-div">
						<div class="comment-item">
							<div 
								v-for="(list, index) in 3" 
								:key="list.index" 
								class="author-details flex pb-8 mb-8"
								:class="{'border-b' : index+1 != 3}"
							>
								<div class="img-container mr-8 h-20 w-20">
									<img :src="noteData.userImg" class="h-full w-full" alt="">
								</div>
								<div class="flex-1">
									<p class="text-lg">{{ noteData.author }}</p>
									<p class="text-sm text-gray-500 mb-3">{{ noteData.createdAt | moment('from') }}</p>
									<p class="text-sm text-gray-600 w-9/10">
										{{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a nisl dolor. Aliquam quis dolor nec tortor ornare finibus. Curabitur vestibulum a dolor nec imperdiet. Sed nec nunc ornare, finibus sem eget, semper sapien. Nullam justo erat, pulvinar et sapien eu, vehicula aliquam dui. Quisque fringilla turpis erat, a finibus dui elementum et. Quisque tellus libero, rutrum quis sodales eget, vulputate a diam. Phasellus in tempor dolor. Quisque lobortis augue id nunc commodo, aliquam rutrum nibh posuere.' }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
	@import "./style.scss";
</style>

<script>
	import Note from './function.vue'
	export default Note
</script>