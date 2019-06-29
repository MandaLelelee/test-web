<template>
  <keep-alive>
  <div class="headerMenu">
    <div class="webLogo">
      <img src="../../../assets/img/logo.png"/>
    </div>
    <nav>
      <ul>
      <li>
        <router-link to="/" exact class="home" >首页</router-link>
        </li>
        <li>
        <router-link :to="{name:'About',query: {id: '1-1'}}"  class="about">关于我们</router-link>
          <ul class="aboutMenu">
            <b></b>
            <li><router-link :to="{name:'CompanyProfile',query: {id: '1-1'}}" >公司简介</router-link></li>
            <li><router-link :to="{name:'Partner',query: {id: '1-2'}}" >合作伙伴</router-link></li>
          </ul>
        </li>
      <li>
        <router-link :to="{name:'Products',query: {id: '2-1'}}"   class="products" >产品介绍</router-link>
        <ul class="productsMenu" >
          <b></b>
          <li><router-link :to="{name:'Dr.web',query: {id: '2-1'}}" >Dr.web</router-link></li>
          <li><router-link :to="{name:'Autodesk',query: {id: '2-2'}}" >Autodesk</router-link></li>
          <li><router-link :to="{name:'Microsoft',query: {id: '2-3'}}" >Microsoft</router-link></li>
          <li><router-link :to="{name:'Adobe',query: {id: '2-4'}}" >Adobe</router-link></li>
          <li><router-link :to="{name:'Wacom',query: {id: '2-5'}}" >Wacom</router-link></li>
        </ul>
      </li>
<!--      <li>
        <router-link :to="{name:'TechnicalServices',query: {id: '3-1'}}" class="technicalServices" >解决方案</router-link>
        <ul class="technicalServicesMenu" >
          <b></b>
          <li><router-link :to="{name:'Solution1',query: {id: '3-1'}}">方案1</router-link></li>
          <li><router-link :to="{name:'Solution2',query: {id: '3-2'}}">方案2</router-link></li>
        </ul>
      </li>-->
      <li>
        <router-link to="/contact"  class="contact" >联系我们</router-link>
      </li>
       <li>
         <router-link to="/recruit"  class="recruit" >招纳贤才</router-link>
       </li>
      </ul>
    </nav>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../assets/css/headerAndfooter/myheader.css';
</style>
