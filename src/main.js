import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store'
import animated from 'animate.css'
import Vuex from 'vuex'
Vue.use(animated)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.devtools = true

const store=createStore()
new Vue({
  el: '#app',
  router,
  store,
  render: h =>h(App)
}).$mount('#app')
