import Vue from 'vue'
import Router from 'vue-router'
import Dna from '@/views/Dna'
import Project from '@/views/Project'
import Contact from '@/views/Contact'
import Ep from '@/views/Ep'

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
      component: Dna
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Ep',
      name: 'Ep',
      component: Ep
    }
  ],
  mode: 'history'
})
