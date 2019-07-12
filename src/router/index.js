import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Flv from '@/components/Flv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/live/:id',
      name: 'Flv',
      component: Flv
    },
  ]
})
