<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
    <scrollTop></scrollTop>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myHeader from './components/page/headerAndfooter/myHeader'
import myfooter from './components/page/headerAndfooter/myfooter'
import scrollTop from './components/modules/scrollTop'
export default {
  name: 'App',
  components: {
    myHeader,
    myfooter,
    scrollTop
  }
}
</script>

<style>

</style>
