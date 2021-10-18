import Vue from 'vue'
import VueRouter from 'vue-router'
import NaverMap from '../components/NaverMap'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'NaverMap',
      component: NaverMap
    },
  ]
})
