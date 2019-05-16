<template>
  <div>
    <headerPhoto></headerPhoto>
    关于我们
  </div>
</template>

<script>
import headerPhoto from '../../components/modules/headerPhoto'
export default {
  name: 'about',
  components: {
    headerPhoto
  }
}
</script>

<style scoped>
@import "../../assets/css/about.css";
</style>
