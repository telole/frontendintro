import Hallo from "../components/Hallo.vue";
import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Dir from "../components/Dir.vue";
import Login from "../view/Login.vue";
import Dashboard from "../view/Dashboard.vue";
import List from "../view/List.vue";
import Kontak from "../view/kontak.vue";


const routes  = [
    {
        path : '/',
        name : 'home',
        component : Login
    },
    {
        path : '/home',
        name : 'hallo',
        component : Dashboard
    },
    {
        path: '/contact',
        name: 'dire',
        component: Kontak
    },
    {
        path: '/list',
        name: 'dir',
        component: List
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router