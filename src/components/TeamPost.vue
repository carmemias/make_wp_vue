<template lang="html">

	<article :id="postId">
		<h3 v-html="post.title.rendered"></h3>
		<p>
			<small>{{ getAuthor }} - {{ getDateTime }}</small><br>
			<small v-if="getCategories != 'Uncategorized'"><strong>Categories:</strong> {{ getCategories }}</small>&nbsp;
			<small v-if="getTaxonomies"><strong>Tags:</strong> {{ getTaxonomies }}</small>&nbsp;
			<small v-if="post.sticky"><strong>STICKY</strong></small>
		</p>
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
		getAuthor(){
			return this.post._embedded.author[0].name
		},
		getDateTime(){
			const postDateTime = new Date(this.post.date)
			return postDateTime.toLocaleString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
		},
		getCategories(){
			const terms = this.post._embedded['wp:term']
			const cats = terms[0]

			const catNames = cats.map( cat => { return cat.name }).join(', ')
			return catNames
		},
		getTaxonomies(){
			const terms = this.post._embedded['wp:term']
			const tags = terms[1]

			const tagNames = tags.map( tag => { return tag.name }).join(', ')
			return tagNames
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
		background-color: #fff;
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
		box-shadow: 3px 3px 4px #ddd;
		transition: box-shadow 400ms ease;
	}

	button:hover {
		box-shadow: 0 0 0 #fff;
	}
</style>
