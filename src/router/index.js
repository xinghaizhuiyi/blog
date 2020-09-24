import Vue from 'vue'
import VueRouter from 'vue-router'
import tag from '../components/tag.vue'
import Home from '../components/Home'
import Blog from '../components/Blog'

Vue.use(VueRouter)

export default function createRouter() {
    return new VueRouter({
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/tag/:blogtag',
                name: 'tag',
                component: tag
            },
            {
                path: '/blog/:bowen',
                name: 'Blog',
                component: Blog
            },
        ]
    })
}