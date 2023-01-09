import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Park from '@/views/Park'
import Zhongou from '@/views/Zhongou'
import Heimudan from '@/views/Heimudan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/park',
      name: 'park',
      component: Park
    },
    {
      path: '/zhongou',
      name: 'zhongou',
      component: Zhongou
    },
    {
      path: '/heimudan',
      name: 'heimudan',
      component: Heimudan
    }
  ]
})
