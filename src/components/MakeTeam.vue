<template lang="html">
	<div class="team">
		<h3> {{team.name}} </h3>
		<team-icons :team="team" :isSelected="isSelected"></team-icons>
		<p class="description"> {{team.description}}</p>
	</div>
</template>

<script>
import TeamIcons from './TeamIcons.vue'

export default {
	name: "make-team",
	props: ['team', 'followedTeams'],
	computed: {
		isSelected(){
			return this.followedTeams.includes(this.team)
		}
	},
	components: {
		TeamIcons
	}
}
</script>

<style lang="css" scoped>
	.team {
		padding: 10px;
		border: 1px solid #ccc;
		margin: 10px auto;
	}

	@media (min-width: 768px){
		.team {
			width: 30%;
		}
	}
</style>
