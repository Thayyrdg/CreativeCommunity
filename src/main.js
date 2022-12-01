import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('./components/pages/HomePage.vue'), alias: '/home'},
        {path: '/blog', component: () => import('./components/pages/BlogPage.vue')},
    ]
});

createApp(App)
    .use(router)
    .mount('#app')
