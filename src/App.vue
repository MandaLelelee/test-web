<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
    <scrollTop></scrollTop>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myHeader from './components/modules/myHeader'
import myfooter from './components/modules/myfooter'
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
