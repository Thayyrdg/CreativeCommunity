import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./components/Home.vue'), alias: '/home' },
        { path: '/blog', component: () => import('./components/Blog.vue') },
        { path: '/hello-world', component: () => import('./components/HelloWorld.vue') },
    ]
});

createApp(App)
    .use(router)
    .mount('#app')
