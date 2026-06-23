import { createApp } from 'vue';
import App from './App.vue';
import  router  from './router'; //Importar router

import './assets/style.css';
import './assets/style-gradient.css';


createApp(App).use(router).mount('#app');
//app.use(router); -> Activa router globalmente
