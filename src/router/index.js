import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import products from '@/components/page/products'
import successfulExamples from '@/components/page/successfulExamples'
import about from '@/components/page/about'
import contact from '@/components/page/contact'

import product1 from '@/components/page/productsPage/product1'
import product2 from '@/components/page/productsPage/product2'
import product3 from '@/components/page/productsPage/product3'

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
      component: products,
      children: [
        {
          path: 'a', // 如果设置为‘’ 就代表这是默认子路由 /about
          component: product1
        },
        {
          path: 'b',
          component: product2
        },
        {
          path: 'c',
          component: product3
        }
      ]
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
