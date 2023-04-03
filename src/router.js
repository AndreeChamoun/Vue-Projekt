import { createRouter, createWebHashHistory } from 'vue-router'

import ApiView from './views/ApiView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ApiView,
      path: '/api'
    }
  ]
})
