import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import DeckBuilderView from '../views/DeckBuilderView.vue'
import BattlegroundsView from '../views/BattlegroundsView.vue'
import Mercenaries from '../views/MercenariesView.vue'

const routes = [
  {
    path: '/',
    name: 'cards',
    component: CardsView
  },
  {
    path: '/deckbuilder',
    name: 'deckbuilder',
    component: DeckBuilderView
  },
  {
    path: '/battlegrounds',
    name: 'battlegrounds',
    component: BattlegroundsView
  },
  {
    path: '/mercenaries',
    name: 'mercenaries',
    component: Mercenaries
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
