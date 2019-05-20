import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import products from '@/components/page/productsPage/products'
import technicalServices from '@/components/page/technicalServices'
import about from '@/components/page/aboutPage/about'
import contact from '@/components/page/contact'
import recruit from '@/components/page/recruit'

import companyProfile from '@/components/page/aboutPage/companyProfile'
import partner from '@/components/page/aboutPage/partner'
import leftSlider from '@/components/page/aboutPage/leftSlider'

import '../assets/css/all.css'

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
      path: '/technicalServices',
      name: 'technicalServices',
      component: technicalServices
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/about',
      name: 'About',
      component: about,
      children: [
        {
          path: '/aboutPage/companyProfile', // 如果设置为‘ ’ (空)就代表这是默认子路由 /about
          components: {
            default: companyProfile,
            leftSlider: leftSlider
          }
        },
        {
          path: '/aboutPage/partner',
          component: partner
        }
      ],
      redirect: '/aboutPage/companyProfile'
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    }
  ]
})
