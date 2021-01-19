<template>
	<div class="comments">
		<p>Comments</p>
		<span v-for='(comment, index) in comments'>
			<h2>{{ comment.body }}</h2>
			<p class='username'>By: {{ comment.name }}</p>
			<span v-if="comment.name == 'fakeuser'">
					<a @click='edit(index)'>Edit</a> |
					<a @click='deleteComment(index)'>Delete</a>
			</span>
		</span>
		<AddComment/>
	</div>
</template>

<script>
import AddComment from '@/components/AddComment'
import { EventBus } from '@/eventBus.js'

export default {
	name: 'PostComments',
	components: { AddComment },
	props: { postid: Number },
	data(){
		return {
			comments: []
		}
	},
	methods: {
		getComments(id){
				fetch(process.env.VUE_APP_GET_POST + id + "/comments")
				.then(response => response.json())
				.then(data => {
					this.comments = data
				}).catch(error => {
					console.error(error)
				})
		},
		edit(index){
			EventBus.$emit('edit-comment', {
					body: this.comments[index].body,
					index: index
			})
		},
		deleteComment(index){
			this.comments.splice(index, 1)
		}
	},
	watch: {
	  postid: {
	    handler: function (postid) {
	      this.getComments(postid)
	    },
	    immediate: true
		}
	},
	created(){
		EventBus.$on('send-comment', comment => {
			if(!comment.index){
				this.comments.push({
					body: comment.body,
					email: comment.email,
					id: comment.id,
					name: comment.name,
					postId: this.postid
				})
			}else if(comment.index){
				this.comments[comment.index].body = comment.body
			}
		})
	}
}
</script>

<style scoped>
.username {
	text-align: right !important;
}

a {
	cursor: pointer;
}
</style>
