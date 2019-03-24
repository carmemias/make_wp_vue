import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		followedTeams: []
	},
	mutations: {
		ADD_FOLLOWED_TEAM(state, new_followed_team){
			state.followedTeams.push(new_followed_team);
		},
		REMOVE_FOLLOWED_TEAM(state, team_to_remove){
			const followedIndex = state.followedTeams.map(t => t.name).indexOf(team_to_remove.name);
			state.followedTeams.splice(followedIndex,1);
		}
	},
	actions: {
		toggleFollowedTeam(context, state, team){
			if(! state.followedTeams.map(t => t.name).includes(team.name) ){
				// add team to followedTeams
				context.commit('ADD_FOLLOWED_TEAM', team);
			} else {
				// remove team from followedTeams
				context.commit('REMOVE_FOLLOWED_TEAM', team);
			}
		}
	},
	getters: {

	}
})
