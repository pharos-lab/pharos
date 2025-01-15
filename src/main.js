import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pharos } from './pharos.js'

createApp(App).use(pharos).mount('#app')