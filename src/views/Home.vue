<template lang="html">
	<main>
		<h1>Stay up-to-date with Make WordPress</h1>
		<section id="followed">
			<h2>Teams you Follow</h2>
			<div class="teams" :class="{noTeams: noFollows}">
				<make-team v-for="(team, index) in followedTeams" :key="index" :team="team" :isSelected="true"></make-team>
				<div v-if="noFollows">Like a team to start following it.</div>
			</div>
		</section>

		<section id="remainder">
			<h2>All Make WordPress Teams</h2>
			<div class="teams" v-if="teamsList">
				<make-team v-for="(team, index) in teamsList" :key="index" :team="team" :isSelected="false"></make-team>
			</div>
		</section>
	</main>
</template>

<script>
import teams from '../data/data.js';
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
		this.teamsList = teams;
		eventBus.$on('team-toggled', team => this.toggleFollowedTeam(team))
	},
	methods: {
		toggleFollowedTeam(team){
			if(! this.followedTeams.includes(team) ){
				this.followedTeams.push(team)
			} else {
				// remove team from followedTeams
				const followedIndex = this.followedTeams.indexOf(team);
				this.followedTeams.splice(followedIndex,1)

				// change teams' heart icon back to grey
				// this should be done from the MakeTeam component.

			}
		}
	}
}
</script>

<style lang="css" scoped>
	h1{
		background-color: #ccc;
		padding: 100px 50px;
	}
	#followed .teams, #remainder .teams{
		display: flex;
		flex-direction:column;
	}

	#followed > .teams {
		padding: 20px;
		border: 1px dashed #ccc;
		min-height: 300px;
	}

	#followed .noTeams{
		justify-content: center;
		align-items: center;
	}

	#followed .noTeams > div {
		width: 30%;
		font-size: 1.2em;
		text-transform: uppercase;
	}

	@media (min-width: 768px){
		#followed .teams, #remainder .teams{
			flex-direction:row;
			flex-wrap: wrap;
		}
	}
</style>
