<template lang="html">

	<main class="team">
		<h1>{{ team.name }} Team</h1>

		<section id="team-posts">
			<team-post v-for="(post, index) in teamPosts" :key="index" :post="post"></team-post>
		</section>
	</main>

</template>

<script>
import sortedTeams from '../data/data.js';
import TeamPost from '../components/TeamPost.vue';

export default {
	name: "teams",
	components: {
		TeamPost
	},
	data(){
		return {
			team: null,
			teamPosts: []
		}
	},
	created(){
		// get the team object
		let teamName = this.$route.params.name;
		if(!teamName){ return ;}

		teamName = teamName.toLowerCase()

		this.team = sortedTeams.find(team => team.name.toLowerCase() === teamName)

		// get the team's posts
		fetch('https://make.wordpress.org/' + teamName + '/wp-json/wp/v2/posts?_embed')
		.then(res => res.json())
		.then(posts => this.teamPosts = posts)
	}
}
</script>

<style lang="css" scoped>
</style>
