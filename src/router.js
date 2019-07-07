import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home.vue'
import ImageBcakground from 'pages/ImageBackground.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/imagebackground',
      name: 'imagebackground',
      component: ImageBcakground
    },
    {
      path: '/successpurchase',
      name: 'successpurchase',
      component: () => import('pages/SuccessPurchase.vue')
    }
  ]
})
