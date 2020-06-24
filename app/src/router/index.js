import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Signup from '../views/Auth/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
