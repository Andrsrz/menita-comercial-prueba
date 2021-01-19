<template>
	<div class="post">
		<span class="actual-post">
			<h4>By: {{ user.username }}</h4>
			<h1>{{ post.title }}</h1>
			<h3>{{ post.body }}</h3>
		</span>
		<hr />
		<PostComments :postid='postid'/>
	</div>
</template>

<script>
import PostComments from "@/components/PostComments"

export default {
	name: 'Post',
	props: { postid: Number },
	components: { PostComments },
	data(){
		return {
			post: {},
			user: {},
			noPost: false
		}
	},
	methods: {
		getPost(id){
			fetch(process.env.VUE_APP_GET_POST + id)
				.then(response => response.json())
				.then(data => {
					this.post = data
					this.getUser()
				}).catch(error => {
					console.error(error)
				})
		},
		getUser(){
				fetch(process.env.VUE_APP_GET_USER + this.post.userId)
				.then(response => response.json())
				.then(data => {
					this.user = data
					this.dataLoaded = true
				}).catch(error => {
					console.error(error)
				})
		}
	},
	watch: {
	  postid: {
	    handler: function (postid) {
				this.getPost(postid)
	    },
	    immediate: true
		}
	}
}
</script>

<style scoped>
.post {
	display: block;
	width: 75%;
	margin: auto;
}

.post > * {
	text-align: left;
}
</style>
