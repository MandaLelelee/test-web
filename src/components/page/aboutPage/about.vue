<template>
  <div>
    <headerPhoto></headerPhoto>
    <router-view name="leftSlider"></router-view>
    <router-view class="rightSlider"></router-view>
  </div>
</template>

<script>
import headerPhoto from '../../modules/headerPhoto'
export default {
  name: 'about',
  components: {
    headerPhoto
  }
}
</script>

<style scoped>
@import "../../../assets/css/about.css";
</style>
