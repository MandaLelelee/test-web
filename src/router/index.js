import Vue from 'vue'
import Router from 'vue-router'
import myHeader from '@/components/myHeader'
import '../assets/css/globalStyle.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myHeader',
      component: myHeader
    }
  ]
})
