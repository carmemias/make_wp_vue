<template lang="html">

	<main class="team">
		<h1>{{ team.name }} Team</h1>

		<section id="team-posts">
			<p v-if="error">Posts not updated {{ fetchDateTime }} .</p>

			<team-post v-for="(post, index) in teamPosts" :key="index" :post="post"></team-post>
			<p v-if="teamPosts.length === 0" class="noTeams">Sorry we can't show this team's posts at the moment. Please try again when back online.</p>
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
		},
		fetchDateTime(){
			if(this.team.lastFetch){
				const dateTime = new Date(this.team.lastFetch);
				return 'since ' + dateTime.toUTCString();
			}
			return 'ever'
		}
	},
	data(){
		return {
			team: null,
			teamPosts: [],
			error: false
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
		this.fetchPosts(teamName);
	},
	methods: {
		fetchPosts(teamName){
			this.axios.get('https://make.wordpress.org/' + teamName + '/wp-json/wp/v2/posts?_embed')
			.then(response => {
				const teamPosts = this.prioritiseStickies(response.data)
				// set state
				this.teamPosts = teamPosts

				//find the current team amongst them and add blopPosts array.
				if(this.followedTeams.length > 0){
					this.followedTeams.map(team => {
						if(team.name === this.team.name){
							team.blogPosts = teamPosts;
						}
					})

				//set the lastFetch time
				this.setLastFetchTime();

				//save to browser storage
				this.$store.dispatch('saveFollowedTeams', this.followedTeams);
			}
			})
			.catch(() => {
				this.error = true;
				// get posts from the state
				this.getPostsFromStorage(teamName);
			})
		},
		getPostsFromStorage(teamName){
			const allTeams = this.$store.getters.getFollowedTeams
			const team = allTeams.find( t => t.name.toLowerCase() === teamName )

			if(team.blogPosts){
				this.teamPosts = team.blogPosts;
			}
			if(team.lastFetch){
				this.team.lastFetch = team.lastFetch;
			}
		},
		setLastFetchTime(){
			//find the current team amongst them and set last viewing date to "now".
			if(this.followedTeams.length > 0){
				this.followedTeams.map(team => {
					if(team.name === this.team.name){
						team.lastFetch = new Date();
						// update state
						this.team.lastFetch = team.lastFetch
					}
				})
			}
		},
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
	.noTeams {
		padding:20px;
		margin-bottom: 10px;
		background-color: #fff;
		border: 1px solid #ccc;
	}
</style>
