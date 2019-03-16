import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(router)
Vue.use(Vuetify)

Vue.config.productionTip = false
export const eventBus = new Vue()

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
