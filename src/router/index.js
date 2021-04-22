import Vue from 'vue'
import Router from 'vue-router'
// import Dna from '@/views/Dna'
// import Project from '@/views/Project'
// import Contact from '@/views/Contact'
// import Ep from '@/views/Ep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dna',
      redirect: '/Dna'
    },
    {
      path: '/Dna',
      name: 'Dna',
      component: resolve => require(['@/views/Dna'], resolve)
    },
    {
      path: '/Project',
      name: 'Project',
      component: resolve => require(['@/views/Project'], resolve)
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: resolve => require(['@/views/Contact'], resolve)
    },
    {
      path: '/Ep',
      name: 'Ep',
      component: resolve => require(['@/views/Ep'], resolve)
    }
  ],
  mode: 'history'
})
