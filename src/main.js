import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.axios = axios;

Vue.use(Vuex)
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.config.devtools = true

const store=createStore()
new Vue({
  el: '#app',
  router,
  store,
  render: h =>h(App)
}).$mount('#app')
