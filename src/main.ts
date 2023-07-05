import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
app.use(VueQueryPlugin); // Add the VueQueryPlugin to your app set configuration options here
app.use(router);
app.mount('#app')
