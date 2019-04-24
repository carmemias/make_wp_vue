import Vue from 'vue'
import Vuex from 'vuex'
import localforage from 'localforage'

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
			state.followedTeams.push(new_followed_team);
		},
		REMOVE_FOLLOWED_TEAM(state, team_to_remove){
			const followedIndex = state.followedTeamNames.indexOf(team_to_remove.name);
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
		checkStorage({commit, state}){
			if( !state.followedTeams || state.followedTeams.length === 0 ){

				// if no followedTeams in state, get them from browser memory
				if (!('indexedDB' in window)) {
					// get the followedTeams from localStorage
					if (localStorage.getItem('followedTeams')) {
						try {
							commit('SET_FOLLOWED_TEAMS', JSON.parse(localStorage.getItem('followedTeams')) )
						} catch(e) {
							localStorage.removeItem('followedTeams');
						}
					} else {
						//TOBETESTED
						// get them from indexedDB
						const result = [];
						//get the keyvaluepairs from indexedDB's existing followedTeams
						//loop through the individual values to create a single array of objects
						localforage.iterate( function(value){
							result.push(value);
						})
						//assign this object to state.followedTeams
						// return result;
						commit('SET_FOLLOWED_TEAMS', JSON.parse(result) )
					}
				}
			}
		},
		saveFollowedTeams(followedTeams){
			if (!('indexedDB' in window)) {
				// use localStorage if browser does not support IndexedDB
				const parsed = JSON.stringify(followedTeams.getters.getFollowedTeams);
				localStorage.setItem('followedTeams', parsed);

			} else {

				followedTeams.getters.getFollowedTeams.forEach((team) => {
					return localforage.setItem( team.name , JSON.stringify(team))
					.then((value) => {
						/* eslint-disable */
						console.log("success:", value);
						// return value;
					})
					.catch((err) => {

						console.log("error", err);
						/* eslint-enable */
						// Error(err);
					})
				})
			}


			//
			// return localforage.setItem('followedTeams', parsed)
			// 				.then((value) => { return value; })
			// 				.catch((err) => { throw new Error(err); })
		},
		// updateFollowedTeam(team){
		//
		// },
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
			return state.followedTeams;
		},
		getShowModal(state){
			return state.showModal;
		}
	}
})
