import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/HelloWorld'
import Select from '../components/select/Select'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path:'/select',
      name: 'Select',
      component: Select
    }
  ]
})
