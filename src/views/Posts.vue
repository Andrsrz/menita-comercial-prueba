<template>
  <div class="posts">
    <p>Search Post by Number</p>
		<input type="number" max='100' min='1' v-model='input'/>
		<Post :postid='postid'/>
  </div>
</template>

<script>
import Post from "@/components/Post"

export default {
	name: 'Posts',
	data(){
		return {
			postid: 1,
			input: 1
		}
	},
	components: { Post },
	watch: {
	  input: {
	    handler: function (input) {
				this.postid = Number(input)
			},
	    immediate: true
		}
	}
}
</script>
