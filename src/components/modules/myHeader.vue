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
        <router-link :to="{name:'About'}"  class="about" >关于我们</router-link>
          <ul class="aboutMenu">
            <b></b>
            <li><router-link to="/aboutPage/companyProfile">公司简介</router-link></li>
            <li><router-link to="/aboutPage/partner">合作伙伴</router-link></li>
          </ul>
        </li>
      <li>
        <router-link to="/products"  class="products" >产品介绍</router-link>
        <ul class="productsMenu" >
          <b></b>
          <li><router-link to="/products/a">Adobe</router-link></li>
          <li><router-link to="/products/b">Autodesk</router-link></li>
          <li><router-link to="/products/c">Microsoft</router-link></li>
          <li><router-link to="/products/c">Dr.web</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/technicalServices"  class="technicalServices" >技术服务</router-link>
        <ul class="technicalServicesMenu" >
          <b></b>
          <li><router-link to="/a">解决方案</router-link></li>
          <li><router-link to="/b">增值幅度</router-link></li>
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
  @import '../../assets/css/myheader.css';
</style>
