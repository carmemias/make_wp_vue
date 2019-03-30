<template lang="html">
	<div class="team" :class="team.name">
		<h3 v-if="isSelected">
			<router-link :to="{name: 'SingleTeam', params: {name: team.name.toLowerCase()} }" :isSelected="isSelected"> {{team.name}} </router-link>
		</h3>
		<h3 v-else> {{team.name}} </h3>

		<team-icons :team="team"></team-icons>
		<modal-content v-if="showThisModal" :team="team"></modal-content>
	</div>
</template>

<script>
import TeamIcons from './TeamIcons.vue'
import ModalContent from './ModalContent.vue'

export default {
	name: "make-team",
	props: ['team'],
	computed: {
		showModal(){
			return this.$store.getters.getShowModal;
		},
		showThisModal(){
			return this.showModal === this.team.name;
		},
		isSelected(){
			const followedTeams = this.$store.getters.getFollowedTeams;
			if(followedTeams.length != 0){
				return followedTeams.map(team => team.name).includes(this.team.name)
			} else {
				return false;
			}
		}
	},
	components: {
		TeamIcons,
		ModalContent
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

	h3 > a {
		text-decoration: none;
		color:inherit;
	}

	@media (min-width: 768px){
		.team {
			width: calc(30% - 10px);

		}
	}
</style>
