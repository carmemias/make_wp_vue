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
import {eventBus} from '../main.js';
import TeamPost from '../components/TeamPost.vue';

export default {
	name: "teams",
	components: {
		TeamPost
	},
	props: ['followedTeams'],
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

		// we could do the search on followedTeams only but, if a user came into a team page directly, we want to show some data rather than a message asking them to follow the team first.
		this.team = sortedTeams.find(team => team.name.toLowerCase() === teamName)

		// The Documentation Team API uses 'docs' instead of the full team name
		if( teamName === 'documentation' ){ teamName = 'docs' }

		// get the team's posts
		fetch('https://make.wordpress.org/' + teamName + '/wp-json/wp/v2/posts?_embed')
		.then(res => res.json())
		.then(posts => { this.teamPosts = this.prioritiseStickies(posts) })
	},
	mounted(){
		//find the current team amongst them and add timestamp for now as last viewing date.
		if(this.followedTeams.length > 0){
			this.followedTeams.map(team => {
				if(team.name === this.team.name){
					team.lastViewing = new Date();
				}
			})
			eventBus.$emit('new-single-team-view', this.followedTeams);
		}
	},
	methods: {
		prioritiseStickies(posts){
			const sortedPosts  = posts.sort( function(a,b){
				return a.sticky === b.sticky ? 0 : b.sticky ? 1 : -1;
			} );

			return sortedPosts;
		}
	}
}
</script>

<style lang="css" scoped>
</style>
