import Vue from 'vue'
import App from './App.vue'
import localforage from 'localforage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'

Vue.use(VueAxios, axios)
Vue.use(router)
Vue.use(store)

Vue.config.productionTip = false
localforage.config({
	name: 'mkwp',
	storeName: 'followedTeams'
})

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
