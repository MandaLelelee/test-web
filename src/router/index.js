import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import products from '@/components/page/products'
import successfulExamples from '@/components/page/successfulExamples'
import about from '@/components/page/about'
import contact from '@/components/page/contact'
import '../assets/css/globalStyle.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/successfulExamples',
      name: 'successfulExamples',
      component: successfulExamples
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
