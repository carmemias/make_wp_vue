<template lang="html">
	<div class="team">
		<h3> {{team.name}} </h3>
		<team-icons :team="team" :isSelected="isSelected"></team-icons>
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
		display: flex;
		justify-content: space-between;
		width: calc(100% - 42px);
		padding: 10px;
		border: 1px solid #ccc;
		margin: 5px;
	}

	@media (min-width: 768px){
		.team {
			width: calc(30% - 10px);

		}
	}
</style>
