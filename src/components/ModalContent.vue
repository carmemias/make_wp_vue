<template lang="html">
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">

					<div class="modal-header">
						<slot name="header">
							<button class="modal-default-button" role="button" tabindex="0" v-on:click="closeModal" v-on:keyup.enter="closeModal">x</button>
							<h3>{{ team.name }}</h3>
						</slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							{{ team.description }}
							<hr>
							<p v-if="team.officeHours">{{ team.officeHours }}</p>
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
							<team-urls :team="team"></team-urls>
							<button class="follow-btn" role="button" tabindex="0" :class="{selected: isSelected }" v-on:click="toggleTeam" v-on:keyup.enter="toggleTeam"><span v-if="isSelected">UN</span>FOLLOW TEAM</button>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import TeamUrls from './TeamUrls.vue'

export default {
	name: 'modal-content',
	props: ['team'],
	computed:{
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
		TeamUrls
	},
	methods: {
		closeModal(){
			this.$store.dispatch('resetShowModal');
		},
		toggleTeam(){
			//update the state
			this.$store.dispatch('toggleFollowedTeam', this.team)
			//save to browser storage
			const followedTeams = this.$store.getters.getFollowedTeams;
			this.$store.dispatch('saveFollowedTeams', followedTeams);
		}
	}
}
</script>

<style lang="css" scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 300px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;
	}

	.modal-header h3 {
		margin-top: 0;
		text-transform: uppercase;
	}

	.modal-body {
		margin: 20px 0;
		text-align: left;
		line-height: 1.5;
	}

	hr {
		margin: 10px 0;
		border: 1px solid #eee;
	}

	.modal-default-button {
		float: right;
		color: #ccc;
		line-height: 1;
		padding: 0 4px 1px 4px;
		border: 1px solid #ccc;
		border-radius: 50px;
		background-color: #fff;
		transition: all 400ms ease;
	}

	.modal-default-button:hover {
		color: #fff;
		background-color: #000;
	}

	.follow-btn {
		width: 100%;
		padding: 10px 20px;
		margin-top: 10px;
		color: #000;
		background-color: #eee;
		transition: all 400ms ease;
	}
	.follow-btn:hover {
		color: #eee;
		background-color: #000;
	}
	/*
	* The following styles are auto-applied to elements with
	* transition="modal" when their visibility is toggled
	* by Vue.js.
	*
	* You can easily play with the modal transition by editing
	* these styles.
	*/

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>
