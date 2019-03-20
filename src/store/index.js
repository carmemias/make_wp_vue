import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		followedTeams: []
	},
	mutations: {
		toggleFollowedTeam(state, team){
			if(! state.followedTeams.map(t => t.name).includes(team.name) ){
				// add team to followedTeams
				state.followedTeams.push(team);
			} else {
				// remove team from followedTeams
				const followedIndex = state.followedTeams.map(t => t.name).indexOf(team.name);
				state.followedTeams.splice(followedIndex,1);
			}
		}
	},
	actions: {

	},
	getters: {

	}
})
