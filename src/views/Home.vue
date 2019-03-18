<template lang="html">
	<main>
		<h1>Stay Up-To-Date with Make WordPress</h1>
		<section id="followed">
			<h2>Teams you Follow</h2>
			<div class="teams" :class="{noFollows: noFollows}">
				<make-team v-for="(team, index) in followedTeams" :key="index" :team="team" :followedTeams="followedTeams"></make-team>
				<div v-if="noFollows">Like a team to start following it.</div>
			</div>
		</section>

		<section id="all">
			<h2>All Make WordPress Teams</h2>
			<div class="teams" v-if="teamsList">
				<make-team v-for="(team, index) in teamsList" :key="index" :team="team" :followedTeams="followedTeams"></make-team>
			</div>
		</section>
	</main>
</template>

<script>
import sortedTeams from '../data/data.js';
import MakeTeam from '../components/MakeTeam.vue';
import {eventBus} from '../main.js';

export default {
	name: "home",
	data(){
		return {
			teamsList: [],
			followedTeams: []
		}
	},
	computed: {
		noFollows(){
			return this.followedTeams.length === 0
		}
	},
	components: {
		MakeTeam
	},
	created(){
		this.teamsList = sortedTeams;
		eventBus.$on('team-toggled', team => this.toggleFollowedTeam(team))
	},
	methods: {
		toggleFollowedTeam(team){
			if(! this.followedTeams.includes(team) ){
				// add team to followedTeams
				this.followedTeams.push(team)
			} else {
				// remove team from followedTeams
				const followedIndex = this.followedTeams.indexOf(team);
				this.followedTeams.splice(followedIndex,1)
			}
		}
	}
}
</script>

<style lang="css" scoped>
	#followed .teams, #all .teams{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
		margin: 5px;
		background-color: #fff;
	}

	#all .teams {
		border: 1px solid #ccc;
	}

	#followed > .teams {
		border: 1px dashed #ccc;
		min-height: 100px;
	}

	#followed .noFollows{
		justify-content: center;
		align-items: center;
	}

	#followed .noFollows > div {
		width: 30%;
		font-size: 1.2em;
		text-transform: uppercase;
	}

	@media (min-width: 768px){
		#followed .teams, #all .teams{
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
