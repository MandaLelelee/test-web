<template>
  <div class="headerMenu">
    <div class="webLogo">
      <img src="../assets/img/logo.png"/>
      <h1>webwebweb</h1>
    </div>
    <nav>
      <ul>
      <li><router-link to="/" exact class="home" >首页</router-link></li>
      <li><router-link to="/products"  class="products" >产品介绍</router-link>
        <ul>
          <li><router-link to="/a">产品1</router-link></li>
          <li><router-link to="/b">产品2</router-link></li>
          <li><router-link to="/c">产品3</router-link></li>
        </ul>
      </li>
      <li><router-link to="/successfulExamples"  class="successfulExamples" >成功案例</router-link>
        <ul>
          <li><router-link to="/a">案例1</router-link></li>
          <li><router-link to="/b">案例2</router-link></li>
          <li><router-link to="/c">案例3</router-link></li>
          <li><router-link to="/c">案例4</router-link></li>
        </ul>
      </li>
      <li><router-link to="/about"  class="about" >关于我们</router-link>
        <ul>
          <li><router-link to="/a">公司团队</router-link></li>
          <li><router-link to="/b">合作伙伴</router-link></li>
        </ul>
      </li>
      <li><router-link to="/contact"  class="contact" >联系我们</router-link></li>
      </ul>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/header.css';
</style>
