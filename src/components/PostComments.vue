<template>
	<div class="comments">
		<p>Comments</p>
		<span v-for='comment in comments'>
			<h2>{{ comment.body }}</h2>
			<p class='username'>By: {{ comment.name }}</p>
		</span>
	</div>
</template>

<script>
export default {
	name: 'PostComments',
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
		}
	},
	watch: {
	  postid: {
	    handler: function (postid) {
	      this.getComments(postid)
	    },
	    immediate: true
		}
	}
}
</script>

<style>
.username {
	text-align: right !important;
}
</style>
