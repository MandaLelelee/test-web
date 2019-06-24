import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home/home'
import products from '@/components/page/products/products'
import technicalServices from '@/components/page/technicalServices/technicalServices'
import about from '@/components/page/about/about'
import contact from '@/components/page/contact/contact'
import recruit from '@/components/page/recruit/recruit'

import threeDSMAX from '@/components/page/products/Autodesk/3DSMAX'
import AutoCAD from '@/components/page/products/Autodesk/AutoCAD'

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
          name: 'Drweb',
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
          path: '/technicalServices/solution',
          name: 'Solution',
          component: technicalServices
        },
        {
          path: '/technicalServices/increment',
          name: 'Increment',
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
      path: '/products/Autodesk/3DSMAX',
      name: 'threeDSMAX',
      component: threeDSMAX
    },
    {
      path: '/products/Autodesk/AutoCAD',
      name: 'AutoCAD',
      component: AutoCAD
    }
  ]
})
