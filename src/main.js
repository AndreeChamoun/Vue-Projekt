import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'
registerSW()

createApp(App).use(router).mount('#app')
