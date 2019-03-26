<template lang="html">
	<div class="team">
		<h3 v-if="isSelected">
			<router-link :to="{name: 'SingleTeam', params: {name: team.name.toLowerCase()} }" :isSelected="isSelected"> {{team.name}} </router-link>
		</h3>
		<h3 v-else> {{team.name}} </h3>

		<team-icons :team="team"></team-icons>
		<modal-content v-if="showModal" :team="team"></modal-content>
	</div>
</template>

<script>
import {eventBus} from '../main.js';
import TeamIcons from './TeamIcons.vue'
import ModalContent from './ModalContent.vue'

export default {
	name: "make-team",
	props: ['team'],
	// props: ['team', 'followedTeams'],
	data(){
		return {
			showModal: false
		}
	},
	computed: {
		followedTeams(){
			return this.$store.getters.getFollowedTeams
		},
		isSelected(){
			const followedTeams = this.$store.getters.getFollowedTeams;
			if(followedTeams.length != 0){
				return followedTeams.map(team => team.name).includes(this.team.name)
			} else {
				return false;
			}
			// return followedTeams.map(team => team.name).includes(this.team.name)
		}
	},
	components: {
		TeamIcons,
		ModalContent
	},
	created(){
		eventBus.$on('show-team-info', (team) => { if(this.team.name === team.name){ this.showModal = true } })
		eventBus.$on('close-modal', () => { this.showModal = false })
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
