<template>
  <div class="posts">
    <p>Search Post by Number</p>
		<input type="text"/>
		<Post :postid='postid'/>
  </div>
</template>

<script>
import Post from "@/components/Post"

export default {
	name: 'Posts',
	data(){
		return {
			postid: 1
		}
	},
	components: { Post }
}
</script>
