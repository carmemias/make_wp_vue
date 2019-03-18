import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home.vue'
import Teams from './views/Teams.vue'
import SingleTeam from './views/SingleTeam.vue'

export default new Router({
  routes: [
    {
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/teams',
			name: 'Teams',
			component: Teams,
			props: true
		},
		{
			path: '/teams/:name',
			name: 'SingleTeam',
			component: SingleTeam,
			props: true
		}
	]
})
