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
