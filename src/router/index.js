import Vue from 'vue'
import Router from 'vue-router'
import SelectDemo from '../components/select/SelectDemo'
import TabsDemo from '../components/tabs/TabsDemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/select-demo',
      name: 'SelectDemo',
      component: SelectDemo
    },
    {
      path: '/tabs-demo',
      name: 'TabsDemo',
      component: TabsDemo
    }
  ]
})
