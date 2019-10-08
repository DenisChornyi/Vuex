import Vue from 'vue'
import Router from 'vue-router'
import ListItem from './components/ListItem'
import List from './components/List'

Vue.use(Router)
const router = new Router({
  base: '/',
  mode: 'history',

  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/todo/:id',
      component: ListItem
    }

  ]
})

export default router
