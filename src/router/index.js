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
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/products',
      name: 'Products',
      component: products
    },
    {
      path: '/successfulExamples',
      name: 'SuccessfulExamples',
      component: successfulExamples
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ]
})
