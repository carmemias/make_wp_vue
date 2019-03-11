import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home.vue'

export default new Router({
  routes: [
    {
			path: '/',
			name: 'Home',
			component: Home
		}
	]
})
