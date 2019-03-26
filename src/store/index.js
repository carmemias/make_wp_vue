import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		followedTeams: [],
		followedTeamNames: [],
		currentTeam: null,
		showModal: ''
	},
	mutations: {
		SET_FOLLOWED_TEAMS(state, all_followed_teams){
			state.followedTeams = all_followed_teams;
		},
		ADD_FOLLOWED_TEAM(state, new_followed_team){
			// state.followedTeams.followedTeams.push(new_followed_team);
			state.followedTeams.push(new_followed_team);
		},
		REMOVE_FOLLOWED_TEAM(state, team_to_remove){
			const followedIndex = state.followedTeamNames.indexOf(team_to_remove.name);
			// state.followedTeams.followedTeams.splice(followedIndex,1);
			state.followedTeams.splice(followedIndex,1);
		},
		SET_SHOW_MODAL(state, teamName){
			state.showModal = teamName;
		},
		RESET_SHOW_MODAL(state){
			state.showModal = '';
		}
	},
	actions: {
		setFollowedTeams({commit}, followedTeams){
			commit('SET_FOLLOWED_TEAMS', followedTeams)
		},
		toggleFollowedTeam({commit, state}, team){
			if(state.followedTeams.length >0) {
				state.followedTeamNames = state.followedTeams.map(t => t.name)
			}
			state.currentTeam = team

			if(! state.followedTeamNames.includes(state.currentTeam.name) ){
				// add team to followedTeams
				commit('ADD_FOLLOWED_TEAM', team);
			} else {
				// remove team from followedTeams
				commit('REMOVE_FOLLOWED_TEAM', team);
			}
		},
		setShowModal({commit}, teamName){
			commit('SET_SHOW_MODAL', teamName);
		},
		resetShowModal({commit}){
			commit('RESET_SHOW_MODAL');
		}
	},
	getters: {
		getFollowedTeams(state){
			// return state.followedTeams.followedTeams;
			return state.followedTeams;
		},
		getShowModal(state){
			return state.showModal;
		}
	}
})
