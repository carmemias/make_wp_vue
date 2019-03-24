import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

Vue.use(router)
Vue.use(store)

Vue.config.productionTip = false
export const eventBus = new Vue()

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
