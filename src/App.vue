<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
export default {
  name: 'App',
  components: {myHeader}
}
</script>

<style>

</style>
