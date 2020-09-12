import Vue from 'vue'
import Vuex from 'vuex'
import SidebarShow from '../store/modules/SidebarShow'



Vue.use(Vuex)
export default function createStore() {
    return new Vuex.Store({
        modules: {
            SidebarShow,
        }
    })
}