import { createRouter, createWebHistory } from 'vue-router'
import RoadmapView from '../views/RoadmapView.vue'
import CounterView from '../views/CounterView.vue'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'roadmap', component: RoadmapView },
    { path: '/counter', name: 'counter', component: CounterView },
    { path: '/list', name: 'list', component: ListView },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import RoadmapView from '../views/RoadmapView.vue'
import CounterView from '../views/CounterView.vue'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'roadmap', component: RoadmapView },
    { path: '/counter', name: 'counter', component: CounterView },
    { path: '/list', name: 'list', component: ListView },
  ],
})

export default router

