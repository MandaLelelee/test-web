<template>
  <div class="headerMenu">
    <div class="webLogo">
      <img src="../assets/img/logo.png"/>
      <h1>webwebweb</h1>
    </div>
    <nav>
      <router-link to="/home"  class="home" >首页</router-link>
      <router-link to="/products"  class="products" >产品介绍</router-link>
      <router-link to="/successfulExamples"  class="successfulExamples" >成功案例</router-link>
      <router-link to="/about"  class="about" >关于我们</router-link>
      <router-link to="/contact"  class="contact" >联系我们</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'myHeader',
  // 定义属性，初始化值
  data: function () {
    return {
      active: 'home'
    }
  },
  // 点击菜单使用的函数
  methods: {
    makeActive: function (item) {
      this.active = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/header.css';
</style>
