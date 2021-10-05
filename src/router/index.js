import Vue from 'vue'
import VueRouter from 'vue-router'
import NaverMap from '../components/NaverMap'
import SensorRegist from '../components/SensorRegist'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'NaverMap',
      component: NaverMap
    },
    {
      path: '/sensorRegist',
      name: 'sensorRegist',
      component: SensorRegist
    },
    {
      path: '/sensorStatus',
      name: 'sensorStatus',
      component: NaverMap
    },
  ]
})

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router
