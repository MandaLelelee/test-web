<template>
  <div class="headerMenu">
    <div class="webLogo">
      <img src="../../assets/img/logo.png"/>
    </div>
    <nav>
      <ul>
      <li>
        <router-link to="/" exact class="home" >首页</router-link>
        </li>
        <li>
        <router-link to="/about"  class="about" >关于我们</router-link>
          <ul class="aboutMenu">
            <b></b>
            <li><router-link to="/a">公司团队</router-link></li>
            <li><router-link to="/b">合作伙伴</router-link></li>
          </ul>
        </li>
      <li>
        <router-link to="/products"  class="products" >产品介绍</router-link>
        <ul class="productsMenu" >
          <b></b>
          <li><router-link to="/products/a">产品1</router-link></li>
          <li><router-link to="/products/b">产品2</router-link></li>
          <li><router-link to="/products/c">产品3</router-link></li>
          <li><router-link to="/products/c">产品3</router-link></li>
          <li><router-link to="/products/c">产品3</router-link></li>
          <li><router-link to="/products/c">产品3</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/technicalServices"  class="technicalServices" >技术服务</router-link>
        <ul class="technicalServicesMenu" >
          <b></b>
          <li><router-link to="/a">服务1</router-link></li>
          <li><router-link to="/b">服务2</router-link></li>
          <li><router-link to="/c">服务3</router-link></li>
          <li><router-link to="/d">服务4</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/contact"  class="contact" >联系我们</router-link>
      </li>
       <li>
         <router-link to="/recruit"  class="recruit" >招纳贤才</router-link>
       </li>
      </ul>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/header.css';
</style>
