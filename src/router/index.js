import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test.vue'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/HelloWord',
            name:'HelloWorld',
            component:HelloWorld
        },
        {
            path:'/test',
            name:'test',
            component:test
        }
    ]
})