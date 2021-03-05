import { createRouter, createWebHistory } from 'vue-router'
import {isAuthenticated} from './helpers/userAuth'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Classified from './pages/Classified.vue'
import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'



const routes = [
    {path:'/', component: Home,},
    {path:'/about', component: About,},
    {path:'/classified', component: Classified, beforeEnter: (to, from) => {
        return isAuthenticated.value ? true : '/login'
    }},
    {path:'/login', component: Login,},
    {path: '/:patchMatch(.*)*', name: 'NotFound', component: NotFound}


]

export const router = createRouter({
    history:createWebHistory(),
    routes,
})