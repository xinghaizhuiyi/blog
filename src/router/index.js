import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test.vue'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

export default function createRouter() {
    return new VueRouter({
        routes: [
            {
                path: '/tag/:blogtag',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/test/:blogtag',
                name: 'test',
                component: test
            }
        ]
    })
}