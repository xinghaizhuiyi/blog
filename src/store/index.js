import Vue from 'vue'
import Vuex from 'vuex'
import SidebarShow from './modules/SidebarShow'
import Timer from "./modules/Timer"


Vue.use(Vuex)
export default function createStore() {
    return new Vuex.Store({
        modules: {
            SidebarShow,
            Timer
        }
    })
}