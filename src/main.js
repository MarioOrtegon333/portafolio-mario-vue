import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css'; // Importa tus estilos globales aquí

createApp(App)
  .use(router)
  .mount('#app');