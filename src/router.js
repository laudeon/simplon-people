import Vue from 'vue'
import Router from 'vue-router'
import Trainers from './views/Trainers.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'trainers',
      component: Trainers
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
