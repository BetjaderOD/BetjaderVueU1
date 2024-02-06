import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '../views/LandingView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/Table.vue')
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: () => import('../views/Formulario.vue')
    }
  ]
})

export default router
