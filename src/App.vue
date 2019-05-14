<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myfooter from './components/myfooter'
export default {
  name: 'App',
  components: {
    myHeader,
    myfooter
  }
}
</script>

<style>

</style>
