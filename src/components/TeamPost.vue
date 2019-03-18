<template lang="html">

	<article :id="postId">
		<h3 v-html="post.title.rendered"></h3>
		<p><small>{{ getDateTime }}</small></p>
		<div v-if="!showFullContent" class="entry-excerpt" v-html="post.excerpt.rendered"></div>
		<button v-if="!showFullContent" v-on:click="fullContentTogle">Read in Full</button>

		<div  v-if="showFullContent" class="entry-content" v-html="post.content.rendered"></div>
		<button v-if="showFullContent" v-on:click="fullContentTogle">Hide Full Content</button>
	</article>

</template>

<script>
export default {
	name: "team-post",
	props: ['post'],
	data(){
		return {
			showFullContent: false
		}
	},
	computed: {
		postId(){
			return 'post-' + this.post.id
		},
		getDateTime(){
			let postDateTime = new Date(this.post.date)
			return postDateTime.toLocaleString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
		}
	},
	methods: {
		fullContentTogle(){
			this.showFullContent = !this.showFullContent
		}
	}
}
</script>

<style lang="css" scoped>
	article {
		padding:20px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
	}

	.entry-excerpt,
	.entry-content {
		text-align: left;
	}

	button{
		margin-top: 20px;
		padding: 5px 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
</style>
