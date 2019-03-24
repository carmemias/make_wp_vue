import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		followedTeams: [],
		followedTeamNames: [],
		currentTeam: null
	},
	mutations: {
		SET_FOLLOWED_TEAMS(state, all_followed_teams){
			state.followedTeams = all_followed_teams;
		},
		ADD_FOLLOWED_TEAM(state, new_followed_team){
			state.followedTeams.followedTeams.push(new_followed_team);
		},
		REMOVE_FOLLOWED_TEAM(state, team_to_remove){
			const followedIndex = state.followedTeamNames.indexOf(team_to_remove.team.name);
			state.followedTeams.followedTeams.splice(followedIndex,1);
		}
	},
	actions: {
		setFollowedTeams({commit}, followedTeams){
			commit('SET_FOLLOWED_TEAMS', followedTeams)
		},
		toggleFollowedTeam({commit, state}, team){
			state.followedTeamNames = state.followedTeams.followedTeams.map(t => t.team.name)
			state.currentTeam = team.team

			if(! state.followedTeamNames.includes(state.currentTeam.name) ){
				// add team to followedTeams
				commit('ADD_FOLLOWED_TEAM', team);
			} else {
				// remove team from followedTeams
				commit('REMOVE_FOLLOWED_TEAM', team);
			}
		}
	},
	getters: {
		getFollowedTeams(state){
			return state.followedTeams.followedTeams;
		}
	}
})
