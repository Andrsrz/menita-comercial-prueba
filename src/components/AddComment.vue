<template>
	<div class='new-comment'>
		<p>Add a Comment</p>
		<textarea rows="10" v-model='comment'></textarea>
		<button @click='sendComment'>Send</button>
	</div>
</template>

<script>
import { EventBus } from '@/eventBus.js'

export default {
	name: 'AddComment',
	data(){
		return{
			comment: '',
			index: null
		}
	},
	methods: {
		sendComment(){
			EventBus.$emit('send-comment', {
					body: this.comment,
					email: 'fake@fake.fake',
					id: 1000,
					name: 'fakeuser',
					postId: 0,
					index: this.index
			})
			this.comment = ''
			this.index = null
		}
	},
	created(){
		EventBus.$on('edit-comment', comment => {
			this.comment = comment.body
			this.index = comment.index
		})
	}
}
</script>

<style scoped>
textarea {
	width: 100%;
	resize: vertical;
}
</style>
