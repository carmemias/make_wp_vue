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
	computed: {
		followedTeams(){
			return this.$store.getters.getFollowedTeams
		}
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

		// we could do the search on followedTeams only but, if a user came into a team page directly, we want to show some data rather than a message asking them to follow the team first.
		this.team = sortedTeams.find(team => team.name.toLowerCase() === teamName)

		// The Documentation Team API uses 'docs' instead of the full team name
		if( teamName === 'documentation' ){ teamName = 'docs' }

		// get the team's posts
		this.axios.get('https://make.wordpress.org/' + teamName + '/wp-json/wp/v2/posts?_embed')
		.then(response => { this.teamPosts = this.prioritiseStickies(response.data) })
		.catch(e => {
      this.errors.push(e)
    })
	},
	mounted(){
		//find the current team amongst them and set last viewing date to "now".
		if(this.followedTeams.length > 0){
			this.followedTeams.map(team => {
				if(team.name === this.team.name){
					team.lastViewing = new Date();
				}
			})
			this.saveFollowedTeams();
		}
	},
	methods: {
		prioritiseStickies(posts){
			const sortedPosts  = posts.sort( function(a,b){
				return a.sticky === b.sticky ? 0 : b.sticky ? 1 : -1;
			} );

			return sortedPosts;
		},
		saveFollowedTeams(){ //TODO move this to right location when refactoring
			const parsed = JSON.stringify(this.followedTeams);
			localStorage.setItem('followedTeams', parsed);
		}
	}
}
</script>

<style lang="css" scoped>
</style>
