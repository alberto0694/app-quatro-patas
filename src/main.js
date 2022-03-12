import { createApp } from 'vue';
import { createRouter, createWebHistory }  from 'vue-router';
import store from './store';


import App from './App.vue';
import AdoteAgora from './pages/AdoteAgora.vue';
import NossasRegras from './pages/NossasRegras.vue';
import Index from './pages/Index.vue'



const routes = [
    { path: '/', component: Index },
    { path: '/nossas-regras', component: NossasRegras },
    { path: '/adote-agora', component: AdoteAgora },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
});


const app = createApp(App)
                .use(store)
                .use(router)
                .mount('#app');
