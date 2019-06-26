import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home/home'
import products from '@/components/page/products/products'
import technicalServices from '@/components/page/technicalServices/technicalServices'
import about from '@/components/page/about/about'
import contact from '@/components/page/contact/contact'
import recruit from '@/components/page/recruit/recruit'

import productDetail from '@/components/page/products/productDetail'

import '../assets/css/modules/all.css'

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
    /* 产品介绍---------------------------------------------------------------------------------- */
    {
      path: '/products',
      name: 'Products',
      component: products,
      children: [
        {
          path: '/products/Adobe',
          name: 'Adobe',
          component: products
        },
        {
          path: '/products/Autodesk',
          name: 'Autodesk',
          component: products
        },
        {
          path: '/products/Microsoft',
          name: 'Microsoft',
          component: products
        },
        {
          path: '/products/Dr.web',
          name: 'Dr.web',
          component: products
        },
        {
          path: '/products/Wacom',
          name: 'Wacom',
          component: products
        }
      ]
    },
    /* 技术服务------------------------------------------------------------------------------------ */
    {
      path: '/technicalServices',
      name: 'TechnicalServices',
      component: technicalServices,
      children: [
        {
          path: '/technicalServices/Solution1',
          name: 'Solution1',
          component: technicalServices
        },
        {
          path: '/technicalServices/Solution2',
          name: 'Solution2',
          component: technicalServices
        }
      ]
    },
    /* 联系我们------------------------------------------------------------------------------------ */
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    /* 关于我们--------------------------------------------------------------------------------------- */
    {
      path: '/about',
      name: 'About',
      component: about,
      children: [
        {
          path: '/about/companyProfile', // 如果设置为‘ ’ (空)就代表这是默认子路由 /about
          name: 'CompanyProfile',
          component: about
        },
        {
          path: '/about/partner',
          name: 'Partner',
          component: about
        }
      ]
      /* redirect: '/about/companyProfile' // 把/about重定向为/about/companyProfile */
    },
    /* 招聘--------------------------------------------------------------------------------------------- */
    {
      path: '/recruit',
      name: 'Recruit',
      component: recruit
    },
    /* 产品详情页-------------------------------------------------------------------------------------- */
    {
      path: '/products/Detail',
      name: 'productDetail',
      component: productDetail
    }
  ]
})
