import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home.vue'
import SingleTeam from './views/SingleTeam.vue'

export default new Router({
  routes: [
    {
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/teams/:name',
			name: 'SingleTeam',
			component: SingleTeam,
			props: true
		}
	]
})
