<template lang="html">
	<main>
		<h1>Stay up-to-date with Make WordPress</h1>
		<section id="followed">
			<h2>Teams you Follow</h2>
			<div class="teams"></div>
		</section>

		<section id="remainder">
			<h2>Teams</h2>
			<div class="teams" v-if="teamsList">
				<make-team v-for="(team, index) in teamsList" :key="index" :team="team"></make-team>
			</div>
		</section>
	</main>
</template>

<script>
import teams from '../helpers/scrapper.js';
import MakeTeam from '../components/MakeTeam.vue';

export default {
	name: "home",
	data(){
		return {
			teamsList: []
		}
	},
	components: {
		MakeTeam
	},
	created(){
		this.teamsList = teams;
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
	}

	@media (min-width: 768px){
		#followed .teams, #remainder .teams{
			flex-direction:row;
			flex-wrap: wrap;
		}
	}
</style>
