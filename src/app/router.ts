import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from "@/pages/AboutPage.vue"
import ArticleListPage from "@/pages/ArticleListPage/ArticleListPage.vue"

const routes = [
    { name: 'Home', path: '/', component: HomePage },
    { name: 'About', path: '/about', component: AboutPage },
    { name: 'ArticleList', path: '/articles', component: ArticleListPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})