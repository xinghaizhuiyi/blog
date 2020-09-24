import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.axios = axios;


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)


Vue.use(Vuex)
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.config.devtools = true

const router = createRouter()
const store = createStore()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
